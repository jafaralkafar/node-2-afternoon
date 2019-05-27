let messages = []
let id = 0
let user = 'Grant'

module.exports = {
    create: (req, res) => {
        let {text, time} = req.body
        let newMessage = {
            id: id++,
            user: user,
            text: text,
            time: time
        }
        console.log(newMessage)
        messages.push(newMessage)
        console.log(messages)
        res.send(messages)
    },
    read: (req, res) => {
        res.send(messages)
    },
    update: (req, res) => {
        let index = null;
        let {id} = req.params
        let {text, time} = req.body
        messages.forEach((message, i) => {
            if(message.id === +id) index = i
        })
        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].text,
            time: time || messages[index].time
        }
        res.send(messages)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)
        res.send(messages)
    }

}