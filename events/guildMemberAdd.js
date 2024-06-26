const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { Font } = require("canvacord");
const { WelcomeCard } = require("./../events/Zibot/WelcomeCard");
const config = require("../config");
module.exports = async (client , member ) =>{
if (member?.guild.id !== "1007597270704869387" ) return;
let channel = client.channels.cache.get("1007640056074358806")
Font.loadDefault();
const card = new WelcomeCard()
        .setAvatar(member.user.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setDisplayName(member.user.tag)
        .setType("welcome")
        .setMessage("to Ziji server!");

const image = await card.build({ format: "png" });
const attachment = new AttachmentBuilder(image, { name: "WelcomeCard.png" });
const embedsss = new EmbedBuilder()
    .setDescription(
    `Chào mừng ${member?.user}, nhớ ghé qua <id:customize> để lấy role nha~`
    )
    .setColor(client?.color)
    .setImage(`attachment://WelcomeCard.png`)
return channel.send({ embeds:[embedsss], files: [attachment] })

}