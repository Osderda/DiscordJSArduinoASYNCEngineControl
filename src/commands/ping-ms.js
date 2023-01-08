const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping-ms")
    .setDescription("Bot Gecikmelerini hesaplar"),
  run: async (client, interaction) => {
   
    const sent = await interaction.reply({ content: '**Hesaplanıyor<a:yklenyr:820644635751743529> **', fetchReply: true });
  
    const api = sent.createdTimestamp - interaction.createdTimestamp;
    const websocket = client.ws.ping;
   
    var webSocketStat = "true";
    var apiStat = "true";

    const normal = "(MS Normal <a:onay_osderda:820645446775078912>)"
    const anormal = "(MS Normal Değil <a:iptal_osderda:821367745488748594>)"

    if (websocket >= 150) {
      webSocketStat = ""
    }
    if (api >= 400) {
      apiStat = ""
    }

    setTimeout(() => {
      interaction.editReply(`- Bot Gidiş Dönüş Gecikmesi: ${api}ms ${!apiStat ? anormal : normal} \n- Websocket(Bot Gecikmesi): ${websocket}ms ${!webSocketStat ? anormal : normal}`);
    }, 2500)
  }
};
