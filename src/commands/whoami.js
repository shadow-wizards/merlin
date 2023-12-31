import { SlashCommandBuilder } from 'discord.js'

export const command = {
    fix: 'Hello from the ping file',
    data: new SlashCommandBuilder().setName('user').setDescription('Provides information about the user.'),
    async execute(interaction) {
        try {
            await interaction.reply(
                `This spell was conjured by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
            )
        } catch (error) {
            await interaction.reply('This spell is unrecognizable!')
        }
    }
}
