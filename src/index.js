const Discord = require("discord.js");
const CommandsContainer = require('./structures/commandsContainer');

class Discorded {
    
    /**
     * Discorded lib constructor
     * @param {string} authToken The discord bot token
     * @param {boolean} autoLogin Auto log discord bot ?
     * @param {Discord.ClientOptions} options The discord client options 
     */
    constructor(authToken, autoLogin = true, options = null) {
        this.client = new Discord.Client();

        this._authToken = authToken;
        this._events = {
            'ready': (evt) => {
                console.log(`[Discorded] Connected, logged in as : ${this.client.user.tag} (${this.client.user.id})`);
            },
            'message': (msg) => {
                console.log(`[Discored] New message sent on channel #${msg.channel.name} ("${msg.content}")`);
            }
        };

        this.commands = new CommandsContainer(this);

        this._init(autoLogin);
    }

    /**
     * Init discored app
     * @param {boolean} autoLogin Auto log discord bot ? 
     */
    _init(autoLogin) {
        if(autoLogin) {
            this.login();
        }
    }

    /**
     * Function to log in discord bot
     */
    login() {
        this.updateEvents();

        this.client.login(this._authToken);
    }

    /**
     * Register an event for the discord client event listener
     * @returns {Discorded} this, for chaining
     */
    registerEvent(eventName, logic) {
        this._events[eventName] = logic;

        return this;
    }

    /**
     * Set all events registered with *registerEvent*
     */
    updateEvents() {
        this.client.on('message', (msg) => {
            const content = msg.content;

            // If it's a command
            if(content.substr(0, 1) === '!') {
                let args = content.substring(1).split(' ');
                let cmd = args[0];

                args = args.slice(1);
                
                this.commands.forEach((command) => {
                    command.parse(this.client, msg.guild, msg, cmd, args);
                })
            }
        });

        for(let key in this._events) {
            this.client.on(key, this._events[key]);
        }
    }
}

module.exports = Discorded;