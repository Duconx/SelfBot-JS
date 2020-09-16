const ascii = require("figlet")

module.exports = {
    name: "ascii",
    description: "converter texto para ascii",
    run: async (message, args) => {

        ascii(args.join(" "), async function(err, data) {
            if (!err) {
                data = "```" + data + "```"
                if (data.length > 1950)  {
                    return console.log("ascii texto muito grande")
                } else {
                    await message.edit(data)
                    console.log("mensagem editada com sucesso")
                }
            }
        })

    }
}