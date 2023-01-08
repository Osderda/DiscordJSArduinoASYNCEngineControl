const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ldr-sensor")
    .setDescription("LDR(Işık sensör) değerlerini çeker)"),
  run: async (client, interaction) => {

    /*  try {*/
    const AsciiTable = require("ascii-table");
    const five = require("johnny-five")
    const board = require("../../board").board.board;
    var table = new AsciiTable()

    photoresistor = new five.Sensor({
      pin: "A0",
      freq: 250
    });

    board.repl.inject({
      pot: photoresistor
    });

    table.addRow('Ambient light value: ', photoresistor.value)

    let embed = new EmbedBuilder()
      .setTitle(`\`\`\`${table.toString()}\`\`\``)
    interaction.reply({ embeds: [embed] })

    /*} catch (ex) {

      const embed = new EmbedBuilder()
        .setDescription(`> **Arduino Bağlantısı Bulunamadı** -> ` + ex)
      interaction.reply({ embeds: [embed] })
      return;

    }*/
  }
};
