const express = require('express')
const User = require('../models/users')
const router = new express.Router()
const mongoose = require('../db/mongoose')



router.post('/createUser', async (req, res) => {
     console.log(req.body)
    const user = new User(req.body)


    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/ownedGamesPS', async (req,res) => {
    
     const newGame = {
           gameID : req.body.gameID,
           gameName : req.body.gameName
          
     }
      try {
      const user = await User.findOne({login_name : req.body.login_name})

      const ownedPsGames = user.ownedGames[0].ownedPSGames

      ownedPsGames.push(newGame)
    console.log(user.ownedGames[0].ownedPSGames)
    await user.save()



    res.status(200).send(user)
      }catch {
          res.status(500).send()

      }
   
     

})

router.post('/ownedGamesPC', async (req,res) => {
    
    const newGame = {
          gameID : req.body.gameID,
          gameName : req.body.gameName
         
    }
     try {
     const user = await User.findOne({login_name : req.body.login_name})

     const ownedPcGames = user.ownedGames[0].ownedPCGames

  ownedPcGames.push(newGame)
   await user.save()



   res.status(200).send(user)
     }catch {
         res.status(500).send()

     }
  
    

})


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/login' , async (req,res) => {

        try{
          const user = await  User.findByCredentials(req.body.login_name,req.body.password)
          res.send(user)
          if(!user){
              throw new Error ('Unable to login')
          }
          
        }catch(e) {
            
            res.status(500).send()

        }

})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router