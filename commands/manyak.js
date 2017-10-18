const { Command } = require('discord-akairo');

class SecretCommand extends Command {
    constructor() {
        super('say', {
            aliases: ['say'],
            prefix: 'Ultear ',
            split: 'none',
            args: [
                {
                    id: 'choosenword',
                    type: 'string'
                }
            ]
        });
    }

    exec(message, args) {
        return message.reply(`${args.choosenword}`);
    }
}

module.exports = SecretCommand;