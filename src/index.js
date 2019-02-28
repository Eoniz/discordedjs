const Discord = require("discord.js");

class Discorded {
    
    /**
     * Discorded lib constructor
     * @param {string} authToken The discord bot token
     * @param {boolean} autoLogin Auto log discord bot ?
     * @param {Discord.ClientOptions} options The discord client options 
     */
    constructor(authToken, autoLogin = true, options = null) {
        this._authToken = authToken;
        this.client = new Discord.Client();

        this._init(autoLogin);
    }

    /**
     * Init discored app
     * @param {boolean} autoLogin Auto log discord bot ? 
     */
    _init(autoLogin) {
        this.client.on('ready', (evt) => {
            console.log(`[Discorded] Connected, logged in as : ${this.client.user.tag} (${this.client.user.id})`);
        });

        this.client.on('message', (msg) => {
            console.log(`[Discored] New message sent on channel ${msg.channel.name} (${msg.content})`);
        })

        if(autoLogin) {
            this.login();
        }
    }

    /**
     * Function to log in discord bot
     */
    login() {
        this.client.login(this._authToken);
    }
}

module.exports = Discorded;