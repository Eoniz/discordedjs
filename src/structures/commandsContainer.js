const Command = require('./command');

class CommandsContainer {
    
    /**
     * 
     * @param {Discorded} discorded : discorded app 
     */
    constructor(discorded) {
        this._discorded = discorded;
        
        this.commands = {};
    }
    

    registerCommand(name, component) {
        if(this.commands[name] != undefined) {
            throw new Error(`Command !${name} already defined`)
        }

        const command = new Command(name, component);
        this.commands[name] = command;

        return this;
    }

    registerCustomCommand(command) {
        if(this.commands[command.name] != undefined) {
            throw new Error(`Command !${command.name} already defined`)
        }

        this.commands[command.name] = command;

        return this;
    }

    /**
     * Removes a given command and returns it
     * @param {Discorded.Command} command the command to remove
     * @return {Discorded.Command} the removed command
     */
    removeCommand(command) {
        if(this.commands[command] == undefined) {
            throw new Error(`Command !${!command.name} is not defined`);
        }

        this.commands[command] = null;

        return command;
    }
    
    /**
     * ForEach iterator for commands dict
     * @param {function} func function with passed cmd and component props 
     */
    forEach(func) {
        for(let cmd in this.commands) {
            func(this.commands[cmd]);
        }
    }
}

module.exports = CommandsContainer;