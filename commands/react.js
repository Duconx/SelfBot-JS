module.exports = {
    name: "reagir",
    description: "reagir a 25 mensagens antigas",
    run: async (message, args) => {

        let emoji = "745389287544979642"

        if (args.length != 0) {
            emoji = args[0]
        }

        if (emoji.includes(":") && emoji.includes(">")) {
            const str = emoji.split(":")[2]
            emoji = str.substring(0, str.length - 1)

            emoji = message.guild.emojis.find(e => e.id == emoji)
        }

        await message.delete()

        const messages = await message.channel.fetchMessages({limit: 25})

        const startTime = new Date().getTime()

        console.log("reagindo a " + messages.size + " mensagens com " + emoji + "..")

        for (msg of messages.keys()) {
            msg = messages.get(msg)

            await msg.react(emoji)
        }

        const endTime = new Date().getTime()
        const timeTaken = (endTime - startTime) / 1000

        console.log("terminou de reagir a" + messages.size + " mensagens com " + emoji + " em " + timeTaken + "s")
    }
}