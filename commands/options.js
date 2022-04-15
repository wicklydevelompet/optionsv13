module.exports = {
	name: 'options',
	description: 'Options Command',
	options: [
	{
		name: 'user',
		description: 'USER options',
		type: 'USER',
		required: true
	}],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const string = interaction.options.getString('string')
		const user = interaction.options.getUser('user')
		const member = interaction.options.getMember('user')
		const integer = interaction.options.getInteger('integer')
		const number = interaction.options.getNumber('number')
		const boolean = interaction.options.getBoolean('boolean')
		const channel = interaction.options.getChannel('channel')
		const role = interaction.options.getRole('role')
		const mentionable = interaction.options.getMentionable('mentionable')
		const notrequired = interaction.options.getString('notrequired')

		return interaction.reply('Options Commands Example');
	},
};