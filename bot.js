
import DiscoClient from './discoClient.mjs';
import { Client, GatewayIntentBits, SlashCommandBuilder } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const discoClient = new DiscoClient();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'gm') {
    const args = interaction.options.getUser('recipient');

    console.log(args);
    const recipient = args.username;
    console.log("commandArgs", recipient);
    console.log(`will issue a gm to ${recipient}!`);

    const matchingDids = await discoClient.lookupDiscord(recipient);

    matchingDids.forEach((did) => {
      issueGmCredential(did);
      console.log('issuing gm cred to', did);
    });

    await interaction.reply(`GMs issued to: ${matchingDids}!`);
  }
});


const issueGmCredential = async (recipient) => {
  const schemaUrl = 'https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json';

  try {
    console.log(`Issuing cred to: ${recipient}`);
    const credential = await discoClient.issueCredential(schemaUrl, recipient, {});
    // console.log('Issued credential:', credential);
  
  } catch (error) {
    console.error('Failed to issue credential:', error);
  }
};