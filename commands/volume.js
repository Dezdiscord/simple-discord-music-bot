const { SlashCommandBuilder } = require('@discordjs/builders');
const { Player } = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('volume')
        .setDescription('Adjusts the volume of the current song')
        .addIntegerOption(option => option.setName('level').setDescription('Volume level (0-100)').setRequired(true)),
    async execute(interaction, player) {
        await interaction.deferReply();

        const voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel) {
            return interaction.followUp('You need to be in a voice channel to adjust the volume!');
        }

        const permissions = voiceChannel.permissionsFor(interaction.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return interaction.followUp('I need the permissions to join and speak in your voice channel!');
        }

        const queue = player.nodes.get(interaction.guild.id);

        if (!queue || !queue.isPlaying()) {
            return interaction.followUp('There is no song currently playing!');
        }

        const volumeLevel = interaction.options.getInteger('level');
        queue.setVolume(volumeLevel); // Set volume level

        await interaction.followUp(`Volume set to ${volumeLevel}.`);
    },
};
