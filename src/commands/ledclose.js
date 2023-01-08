const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("led-close")
    .setDescription("Pin13 Led'i kapat"),
  run: async (client, interaction) => {

    try {
      const {
        Led
      } = require("johnny-five");

      const led13 = new Led(13);
      led13.off()
      interaction.reply(`Led Closed!`)

    } catch (ex) {
      
      const embed = new EmbedBuilder()
      .setDescription(`> **Arduino Bağlantısı Bulunamadı** -> ` + ex)
      interaction.reply({ embeds: [embed] })
      return;

    }
  }
};
