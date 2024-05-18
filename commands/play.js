const { SlashCommandBuilder } = require('@discordjs/builders');
const { Player } = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays a song from YouTube')
        .addStringOption(option => option.setName('query').setDescription('The name or URL of the song').setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply(); // Acknowledge the interaction immediately

        const query = interaction.options.getString('query');
        const voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel) {
            return interaction.followUp('You need to be in a voice channel to play music!');
        }

        const permissions = voiceChannel.permissionsFor(interaction.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return interaction.followUp('I need the permissions to join and speak in your voice channel!');
        }

        const player = Player.singleton();
        const result = await player.search(query, {
            requestedBy: interaction.user,
            searchEngine: 'youtube'
        });

        if (!result || !result.tracks.length) {
            return interaction.followUp('No results found!');
        }

        const track = result.tracks[0];
        await player.play(voiceChannel, track, {
            requestedBy: interaction.user
        });

        await interaction.followUp(`Now playing: **${track.title}**`);
    },
};
