const { SlashCommandBuilder } = require('@discordjs/builders');
const { Player } = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pauses the currently playing song'),
    async execute(interaction, player) {
        await interaction.deferReply();

        const voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel) {
            return interaction.followUp('You need to be in a voice channel to pause music!');
        }

        const permissions = voiceChannel.permissionsFor(interaction.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return interaction.followUp('I need the permissions to join and speak in your voice channel!');
        }

        const queue = player.nodes.get(interaction.guild.id);  // Access the queue for the guild

        if (!queue || !queue.isPlaying()) {
            return interaction.followUp('There is no song currently playing!');
        }

        queue.node.pause();  // Pause the currently playing song

        await interaction.followUp('Paused the music!');
    },
};
