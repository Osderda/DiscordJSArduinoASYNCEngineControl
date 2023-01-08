const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("led-open")
    .setDescription("Pin13 Led'i aç"),
  run: async (client, interaction) => {
    const {
      Led
    } = require("johnny-five");

    const led13 = new Led(13);
    led13.on()
    interaction.reply(`Led Opened!`)
  }
};
