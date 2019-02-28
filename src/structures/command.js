const Component = require('./component');

/**
 * Abstract Command class. 
 * It defines all the logic behind a command
 */
class Command {
    
    /**
     * Command constructor
     * @param {string} name The !command name
     * @param {Component} component The component associated to the command 
     */
    constructor(name, component) {
        this.name = name;
        this.component = component;

        this.component.command = this;
    }

    /**
     * Function trying to parse the command. If it's the right command,
     * it will execute the command.
     * 
     * @param {Discord.Client} client The discord bot client 
     * @param {Discord.Guild} guild The discord bot guild
     * @param {Discord.Message} msg The original message sent
     * @param {string} cmd The command typed
     * @param {string[]} args The args passed on the command
     * @returns {boolean} True if command is executed. False otherwise
     */
    parse(client, guild, msg, cmd, args) {
        if(cmd !== this.name)
            return false;
        
        this.component.componentWillExecute(client, guild, msg, cmd, args);
        this.component.execute(client, guild, msg, cmd, args);
        this.component.componentDidExecute(client, guild, msg, cmd, args);
    }
}

module.exports = Command;