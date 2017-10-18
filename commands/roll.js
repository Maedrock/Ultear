const { Command } = require('discord-akairo');

class RollCommand extends Command {
    constructor() {
        super('roll', {
            aliases: ['roll'],
            args: [
                {
                    id: 'amount',
                    type: word => {
                        if (!word || isNaN(word)) return null;
                        const num = parseInt(word);
                        if (num < 1 || num > 100) return null;
                        return num;
                    },
                    default: 100
                }
            ]
        });
    }

    exec(message, args) {
        const res = Math.floor(Math.random() * args.amount);
        return message.reply(`${res}!`);
    }
}

module.exports = RollCommand;