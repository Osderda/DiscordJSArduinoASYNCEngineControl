const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather-degrees")
    .setDescription("Arduino sıcaklık ölçülerini çeker."),
  run: async (client, interaction) => {
    try {

      const {
        Thermometer
      } = require("johnny-five");

      const thermometer = new Thermometer({
        controller: "LM35",
        pin: "A0"
      });

      const {
        celsius,
        fahrenheit,
        kelvin
      } = thermometer;

      const AsciiTable = require("ascii-table");
      var table = new AsciiTable()
      table
        .addRow('°C:', celsius)
        .addRow('°F:', fahrenheit)
        .addRow('K:', kelvin)
      const embed = new EmbedBuilder()
        .setDescription(`\`\`\`${table.toString()}\`\`\``)
      interaction.reply({ embeds: [embed] })
    } catch (ex) {

      const embed = new EmbedBuilder()
      .setDescription(`> **Arduino Bağlantısı Bulunamadı** -> ` + ex)
      interaction.reply({ embeds: [embed] })
      return;

    }
  }
};
