module.exports = {
    name: "recarregar",
    description: "recarregar comandos",
    run: async (message, args) => {
        const { reloadCommands } = require("../selfbot.js")

        await message.delete()
        reloadCommands()
    }
}