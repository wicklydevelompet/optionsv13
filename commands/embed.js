const { MessageEmbed,MessageButton,MessageActionRow, Message } = require('discord.js')
const { Modal, TextInputComponent, showModal } = require('discord-modals');


module.exports = {
	name: 'embed',
	description: 'Embed Command',
	options: [],
	default_permission: true,
	permissions: [],
	async execute(client,interaction) {
	
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
	
			const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Deneme')
					.setStyle('SUCCESS'),
					
			);
			const örn = new MessageEmbed()
			.setTitle('Some title')
			.setDescription('Description after the edit');
		
		return interaction.reply({ ephemeral: false ,embeds: [embed], components: [row] , embeds: [örn] });
			return interaction.reply({ ephemeral: false, embeds: [embed], components: [row] });
			}
}