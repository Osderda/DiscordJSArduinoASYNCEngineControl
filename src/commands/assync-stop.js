const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("async-engine-stop")
    .setDescription("Asenkron motoru durdurur."),
  run: async (client, interaction) => {
    const {
      Pin
    } = require("johnny-five");
    const embed = new EmbedBuilder()
    .setTitle("A-Sync Engine Started!")
    .setColor("#57F287");
    const pin7 = new Pin({
      pin: 7
    });
    pin7.write(0x00)
    interaction.reply({ embeds:[embed]})
  }
};
