const { SlashCommandBuilder } = require('@discordjs/builders');
const { Player } = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Displays the current queue'),
    async execute(interaction, player) {
        await interaction.deferReply();

        const voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel) {
            return interaction.followUp('You need to be in a voice channel to view the queue!');
        }

        const permissions = voiceChannel.permissionsFor(interaction.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return interaction.followUp('I need the permissions to join and speak in your voice channel!');
        }

        const queue = player.nodes.get(interaction.guild.id);

        if (!queue || !queue.isPlaying()) {
            return interaction.followUp('There is no song currently playing!');
        }

        const tracks = queue.tracks.map((track, index) => `${index + 1}. ${track.title}`).join('\n');
        await interaction.followUp(`Current Queue:\n${tracks}`);
    },
};
