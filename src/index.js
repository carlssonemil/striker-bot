require('dotenv').load();
require("babel-core/register");
require("babel-polyfill");

const commando = require('discord.js-commando');
const client = new commando.Client();

client.registry.registerGroup('strike', 'Strike');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login(process.env.BOT_TOKEN);

export const allowedRoles = ["Påve", "Biskop", "THE PUPPETEER"];