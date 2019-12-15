const validate = require('validator')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    appid : {

    },
    name : {

    },
    release_date : {

    },
    english : {

    },
    publisher : {

    },
    platforms :{

    },
    required_age :{

    },categories : {

    },
    genres : {

    },
    steamspy_tags : {

    },
    achievements :{

    },
    positive_ratings : {

    },
    price : {

    }
})

// userSchema.statics.findByCredentials = async (name,publisher,categories,genres,steamspy_tags,owners,price) => {
//     const gameList = await Games.find({}) 

//    if(name) {  
//    const gameList = await Games.find({name})
//      console.log(gameFound.gameList)
//      res.send(gameFound.gameList)
//        res.status(201).send()
//        if(!game) {
//            throw new Error ('Can not found the game')
//            res.status(404).send()
//        }
//    }
//    if(publisher) {
//     this.gameList = await Games.find({publisher})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// if(categories) {
//     this.gameList = await Games.find({categories})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// if(genres) {
//     this.gameList = await Games.find({genres})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// if(steamspy_tags) {
//     this.gameList = await Games.find({steamspy_tags})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// if(owners) {
//     this.gameList = await Games.find({owners})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// if(price) {
//     this.gameList = await Games.find({price})
//     res.status(201).send()
//     if(!game) {
//         throw new Error ('Can not found the game')
//         res.status(404).send()
//     }
// }

// return gameList

// }

const Games = mongoose.model('Games',userSchema)

module.exports = Games