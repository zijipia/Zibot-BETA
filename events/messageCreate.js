const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../config");
const mongoDB = require("../mongoDB");

module.exports = async (client, message) => {
    if (message.author.bot || message.content.includes("@here") || message.content.includes("@everyone")) return;

    const botMentionRegex = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (!message.content.includes(`<@${client.user.id}>`) && !message.content.match(botMentionRegex)) return;

    const content = message.content.toLowerCase();
    message.react("<a:likee:1210193685501706260>");
    if (botMentionRegex.test(content) && !message.reference) {
        let lang = await mongoDB?.ZiUser?.findOne({ userID: message.author.id })
        lang = lang?.lang || `vi`
        lang = require(`../lang/${lang}.js`);
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor(lang?.COLOR || client.color)
                    .setTitle("Yo... Ziji desu :3")
                    .setDescription(`${lang?.MENstion} \n${config?.Zmodule} ✅`)
                    .setURL(`${client?.InviteBot}`)
                    .setTimestamp()
                    .setFooter({ text: `${lang?.RequestBY} ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setImage(lang?.banner)
            ],
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("cancel")
                        .setLabel("❌")
                        .setStyle(ButtonStyle.Secondary)
                )
            ] });
    }
};
