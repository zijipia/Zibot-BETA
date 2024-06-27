const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../config");
const mongoDB = require("../mongoDB");


const handleBotMention = async (message, client, lang, content) => {
    const embed = new EmbedBuilder()
        .setColor(lang?.COLOR || client.color)
        .setTitle("Yo... Ziji desu :3")
        .setDescription(`${lang?.MENstion} <a:_:${animatedIcons[Math.floor(Math.random() * animatedIcons.length)]}> \n${config?.Zmodule} ✅`)
        .setURL(`${client?.InviteBot}`)
        .setTimestamp()
        .setFooter({ text: `${lang?.RequestBY} ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setImage(lang?.banner);
    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("cancel")
            .setLabel("❌")
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId("buttHelp")
            .setLabel("/HELP")
            .setStyle(ButtonStyle.Secondary)
    )
    return message.reply({ embeds: [embed], components: [row] });
};

module.exports = async (client, message) => {
    if (message.author.bot || message.content.includes("@here") || message.content.includes("@everyone")) return;

    const botMentionRegex = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (!message.content.includes(`<@${client.user.id}>`) && !message.content.match(botMentionRegex)) return;

    const content = message.content.toLowerCase();

    message.react("<a:likee:1210193685501706260>");


    if (botMentionRegex.test(content) && !message.reference) {
        let lang = await mongoDB?.ZiUser?.findOne({ userID: member.id })
        lang = lang?.lang || `vi`
        lang = require(`../lang/${lang}.js`);
        return handleBotMention(message, client, lang, content);
    }
return;
};
