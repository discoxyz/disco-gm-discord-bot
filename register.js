import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [
  {
    name: 'gm',
    description: 'Issue a gm',
    options: [
      {
        name: "recipient",
			  description: "recipient to receive Disco GM. Type @ then the username of who you'd like to issue a GM to!",
			  type: 6,
			  required: true,
      },
    ],
  },
];

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.APP_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();