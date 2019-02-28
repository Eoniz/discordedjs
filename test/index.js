const Discorded = require('../src/index');
const Command = require('../src/structures/command');
const Component = require('../src/structures/component');

class PingComponent extends Component {
    constructor() {
        super();
    }

    componentWillExecute(client, guild, msg, cmd, args) {
        console.log(`[Bot] Component will execute ${cmd}`)
    }

    execute(client, guild, msg, cmd, args) {
        msg.reply('pong');
    }

    componentDidExecute(client, guild, msg, cmd, args) {
        console.log(`[Bot] Component did execute ${cmd}`)
    }
}

const client = new Discorded("NTI0MzE4NDc3ODkzNTAwOTQ4.D1myvw.0mcFx9MxhdP69JIquNjS_jPUvzg", false);



client
    .registerEvent("ready", () => {
        console.log("hello");
    })
    .registerEvent("message", (msg) => {
        console.log(`[Bot] New message sent on channel #${msg.channel.name} ("${msg.content}")`);
    });

client.commands.registerCommand("ping", new PingComponent());

client.login();