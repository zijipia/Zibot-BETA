const config = require("../../config");

module.exports = async (client, interaction) => {
  try {
    if (interaction?.customId.includes("ZiVC")){
      return require("./../Zibot/Zivc")(interaction)
    } 

//#region Button Func
    switch (interaction.customId) {
      case "cancel":
        return interaction?.message?.delete();
      case "cancelXcancel":
        return interaction?.message.edit({components: [ ]})

      default:
        return client?.errorLog?.send(`**${config?.Zmodule}** <t:${Math.floor(Date.now() / 1000)}:R>\nButton:${interaction?.customId}`)
    }
//#endregion
  } catch (e) {
    return client?.errorLog?.send(`**${config?.Zmodule}** <t:${Math.floor(Date.now() / 1000)}:R>\nButton:${e?.stack}`)
  }
}
