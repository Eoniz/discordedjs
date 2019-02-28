class Component {

    /**
     * Component constructor
     */
    constructor() {
        this.command = null;
    }

    /**
     * Function called juste before executing the command
     * 
     * @param {Discord.Client} client The discord bot client 
     * @param {Discord.Guild} guild The discord bot guild
     * @param {Discord.Message} msg The original message sent
     * @param {string} cmd The command typed
     * @param {string[]} args The args passed on the command
     */
    componentWillExecute(client, guild, msg, cmd, args) {}
    
    /**
     * Function to execute the command logic
     * 
     * @param {Discord.Client} client The discord bot client 
     * @param {Discord.Guild} guild The discord bot guild
     * @param {Discord.Message} msg The original message sent
     * @param {string} cmd The command typed
     * @param {string[]} args The args passed on the command
     */
    execute(client, guild, msg, cmd, args) {}

    /**
     * Function called juste after executing the command
     * 
     * @param {Discord.Client} client The discord bot client 
     * @param {Discord.Guild} guild The discord bot guild
     * @param {Discord.Message} msg The original message sent
     * @param {string} cmd The command typed
     * @param {string[]} args The args passed on the command
     */
    componentDidExecute(client, guild, msg, cmd, args) {}
}

module.exports = Component;