const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays available commands'),
    async execute(interaction) {
        await interaction.deferReply();

        const commands = [
            '`/play <song>` - Plays a song from YouTube',
            '`/stop` - Stops the current song and clears the queue',
            '`/skip` - Skips the current song',
            '`/pause` - Pauses the currently playing song',
            '`/resume` - Resumes the paused song',
            '`/loop` - Toggles loop mode for the current song',
            '`/volume <level>` - Adjusts the volume of the current song',
            '`/ping` - Ping pong!',
            '`/queue` - Displays the current queue',
            '`/nowplaying` - Displays the currently playing song',
            '`/move` - Displays available commands',
            '`/help` - Displays available commands',
        ];

        await interaction.followUp(`**Available Commands:**\n${commands.join('\n')}`);
    },
};
