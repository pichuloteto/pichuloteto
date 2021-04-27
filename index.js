const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on('ready', () => {
    console.log(`el bot esta listo como ${client.user.tag}`);
    client.user.setStatus('idle')
});

client.on("message", msg => {
    // receiving the message
    console.log(msg.content);
    if (msg.content === 'udec') {
        msg.channel.send('si');
    }
    if (msg.content === 'udec drive') {
        const drive = new RichEmbed()
            .addField('Drive ingenieria', 'https://drive.google.com/drive/folders/1RdCoSxVC28k9-cVv_qRLIiKa-ixi-5W9', true)
        msg.channel.send(drive);
    }
    if (msg.content === 'udec info') {
        const info = new RichEmbed()
            .addField('informacion', 'estamos trabajando pa traer info  ', true)
            .setImage('https://media.discordapp.net/attachments/549443199962316820/760023441432379392/756956800397475952.gif', true)
        msg.channel.send(info);
    }
    if (msg.content === 'udec help') {
        const help = new RichEmbed()
            .addField('ayuda', 'estamos trabajando para ayudarte ', true)
            .setImage('https://media.discordapp.net/attachments/549443199962316820/760023441432379392/756956800397475952.gif', true)
        msg.channel.send(help);
    }
    if (msg.content === 'udec comandos') {
        const comandos = new RichEmbed()
            .setTitle('Comandos')
            .addField( 'udec info', 'da informacion sobre el bot' , false)
            .addField( 'udec help', 'muestra ayuda sobre el bot' , false)
            .addField( 'udec drive', 'da un link con el drive de ingenieria' , false)
            .addField( 'udec comandos', 'da una lista con los comandos disponibles' , false)
        msg.channel.send(comandos);
    }
});

client.login('ODAwNDQ5MDU5MDY4NDQ0Njk0.YASSRw.cuYOtMSUrQTj6Z2oynSJRoPNJx0');