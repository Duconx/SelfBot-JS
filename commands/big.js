const swapNum = new Map()

swapNum.set("1", "1️⃣")
swapNum.set("2", "2️⃣")
swapNum.set("3", "3️⃣")
swapNum.set("4", "4️⃣")
swapNum.set("5", "5️⃣")
swapNum.set("6", "6️⃣")
swapNum.set("7", "7️⃣")
swapNum.set("8", "8️⃣")
swapNum.set("9", "9️⃣")
swapNum.set("0", "0️⃣")

module.exports = {
    name: "big",
    description: "textos grande",
    run: async (message, args) => {
        if (args.length == 0) return

        const regex = /^[A-Za-z0-9 ]+$/

        const str = args.join(" ").toLowerCase()

        if (!regex.test(str)) {
            return console.log("caracteres especiais encontrados - não é possível converter")
        }

        let newStr = ""

        for (letter of str.split("")) {
            if (newStr.length > 1900) break
            if (swapNum.has(letter)) {
                newStr = newStr + swapNum.get(letter)
            } else if (letter == " ") {
                newStr = newStr + " "
            } else {
                newStr = newStr + ":regional_indicator_" + letter + ":"
            }
        }

        await message.edit(newStr)
        console.log("mensagem editada com sucesso")

    }
}