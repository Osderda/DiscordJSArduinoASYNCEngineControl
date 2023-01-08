const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("async-engine-start")
    .setDescription("Asenkron motoru başlatır."),
  run: async (client, interaction) => {
    const {
      Pin
    } = require("johnny-five");

    const embed = new EmbedBuilder()
    .setTitle("A-Sync Engine Started!")
    .setColor("#57F287");
//https://i.gifer.com/origin/3e/3e727bd54f9a036b83d29e8055eb9b21_w200.gif
    const pin7 = new Pin({
      pin: 7
    });


    pin7.write(0x01)
    interaction.reply({ embeds:[embed]})
  }
};
