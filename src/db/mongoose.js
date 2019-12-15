const mongoose = require ('mongoose')

const uri = 'mongodb+srv://xakul:atakankul33A.@cluster0-izs42.mongodb.net/Getir-Project?retryWrites=true&w=majority'

mongoose.connect(uri , {

    useNewUrlParser: true,
    useCreateIndex: true

})

module.exports = mongoose