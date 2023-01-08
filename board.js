const config = require("./src/config.js");
const { readdirSync } = require("fs")
const moment = require("moment");

const five = require("johnny-five")
const board = new five.Board();

exports.run = () => {

    const log = l => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${l}`) };
   
    const {
        Board,
        Thermometer,
        Led,
        Piezo
    } = require("johnny-five");
    const AsciiTable = require("ascii-table");
    //const board = new Board();
    //const board = new five.Board({ port: "COM4" });

    board.on("ready", () => {
        var serialport = require("serialport");

        // serialport.list(function (err, ports) {
        //     console.log(ports);

        // });

        console.log("Ready")
return board;
        /* client.on('messageCreate', msg => {
             const {
                 celsius,
                 fahrenheit,
                 kelvin
             } = thermometer;
             if (msg.content == "led-open") {
                 led.on();
                 return msg.reply("Led Opened!");
             } else if (msg.content === "led-close") {
                 led.off()
                 return msg.reply("Led Closed!");
             } else if (msg.content === "weather-degrees") {
                 var table = new AsciiTable()
                 table
                     .addRow('°C:', celsius)
                     .addRow('°F:', fahrenheit)
                     .addRow('K:', kelvin)
                 const  embed = new EmbedBuilder()
                     .setDescription(`\`\`\`${table.toString()}\`\`\``)
                 msg.channel.send({ embeds: [embed] })
             } else if (msg.content === "light-sensor") {
                 var table = new AsciiTable()
                 table.addRow('Ambient light value: ', photoresistor.value)
     
                 let embed = new EmbedBuilder()
                     .setTitle(`\`\`\`${table.toString()}\`\`\``)
                 return msg.channel.send({ embeds: [embed] })
     
             } else if (msg.content === "music") {
                 led.blink();
                 board.repl.inject({
                     piezo: piezo
                 });
                 piezo.play({
                     song: "E D F D A - A D A A G D G G G F - - C D F D G - G G G G F F F F F F - - - -",
                     beats: 1 / 4,
                     tempo: 200
                 });
                 return msg.reply("Music Opened!");
             } else if (msg.content == "music-close") {
                 led.stop()
                 return msg.reply("Music Closed!");
             } else {
                 if (msg.author.id != client.user.id) {
                     msg.reply("Unknown Command.\n> music -> music-close\n\n> led-open -> led-close\n\n> light-sensor");
                 }
             }
         });*/
    })
   
}

exports.board = {
    board: board
};
