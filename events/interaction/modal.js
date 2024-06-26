const db = require("./../../mongoDB");
const config = require("../../config");
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuOptionBuilder, ButtonBuilder } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    switch (interaction.customId) {

      case"ZiVCMODALrename":{
        interaction.member.voice.channel.edit({
          name: interaction.fields.getTextInputValue("resu")
        })
       	return interaction.deferUpdate().catch(e => { });
      }
      default:
        console.log(interaction.customId)
    }
  } catch (e) {
    console.log(e)
    return client?.errorLog?.send(`**${config?.Zmodule}** <t:${Math.floor(Date.now() / 1000)}:R>\nmodal:${e?.stack}`)
  }
}
