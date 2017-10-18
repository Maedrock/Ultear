const { AkairoClient } = require('discord-akairo');

const client = new AkairoClient({
    ownerID: '131753542628278272',
    prefix: '-',
    commandDirectory: './commands/',
    inhibitorDirectory: './inhibitors/',
    listenerDirectory: './listeners/'
});

client.login('MzY5ODI0MDI0NDEyMjkxMDcz.DMi18A.ul2wRNCw39f_wGIzIiKe2B6DaAY').then(() => {
    console.log('Started up!');
});
