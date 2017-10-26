
var config = {};

config.botName = "Ultear";
config.prefix = "-";
config.serverName = "Hydra Engineering Facility";
config.text_channelName = "bot";
config.voice_channelName = "Test 1";

//Generate your own encryption key and insert here, DO NOT CHANGE ONCE STARTED
//otherwide data will be "corrupt" and will be overwritten with fresh data.
config.encryptionKey = "anan";

//These are the names of the files that will store all player/history data, no need to change these
config.fileNamePlayers = "playersBank.csv";
config.encryptedPlayers = "encrypted.dat";
config.fileNameHistory = "bettingHistory.csv";
config.encryptedHistory = "encryptedHistory.dat";

//Insert your Bot Token HERE
config.botToken = "MzY5ODI0MDI0NDEyMjkxMDcz.DNHvtg.4RI_AuV8IJWFO8Fwx6h50RrsbZY";

//How much money each user gets
config.bankRoll = 1000000;

//The default symbol for new users/non changed symbols
config.userSymbolDefault = "ø";

//Minimum bet Settings for Inside & Outside Bets
config.minimumBetInside = 1000;
config.minimumBetOutside = 10000;

//Max Bet is a % of the users bankroll
config.maxBet = 10;

//Time per Game
config.timeLimit = 25;

//Loan Settings
config.loanAmount = 500000;
config.maxLoans = 5;
//loanRequirement is the number that users have to be down to to be eligible for a loan.
config.loanRequirement = 100000;

module.exports = config;
