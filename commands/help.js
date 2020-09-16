module.exports = {
    name: "ajuda",
    description: "menu de ajuda",
    run: async (message, args) => {

        const { commands } = require("../selfbot.js")
        const { prefix } = require("../config.json")

        let msg = ""

        for (command of commands.keys()) {
            msg = msg + prefix + "**" + command + "** " + commands.get(command).description + "\n"
        }

        await message.edit(msg).then(() => {
            setTimeout(() => {
                message.delete().catch()
            }, 10000)
        })

    }
}