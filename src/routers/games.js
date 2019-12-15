
const express = require('express')
const Games = require('../models/games')
const router = new express.Router()
const fs = require('fs')


router.post('/games', async (req,res) => {
     const array = req.body
     array.forEach(async array => {
      const game = await new Games(array)
      try{
        await game.save() 
        res.status(201).send()
        console.log(game)
        res.send(game)
        if(!game) {
          throw new Error ('Can not load the games')
        }
  
      } catch(e) {
        res.status(500).send()
  
      }

     })

})

router.get('/games', async (req,res) => {
  
    try{
       const games = await Games.find({})
       if(!games){
         throw new Error ('Can not found games')
       }
       res.send(games)
       res.status(201).send()

    } catch (e) {
      res.status(500).send()
     
  }
    

})

router.post('/games/search' ,  async (req,res) => {
  
  const publisher = req.body.publisher
  const categories = req.body.categories
  const genres = req.body.genres
  const price = req.body.price
  const name = req.body.name
  const release_date = req.body.release_date
     
    
  var games = await Games.find({})

  var gamesList = games
  //const icine this.gamelist atıp da filtrenebilir
   
  if(name) {
   const nameFilterList = games.filter(r => r.name == name)
   this.gamesList = nameFilterList
  }

  if(price){
   const priceFilterList =  gamesList.filter(r => r.price == price)
   this.gamesList = priceFilterList
  }

   if(genres) {
   const genresFilterList =  this.gamesList.filter( r =>r.genres == genres )
   this.gamesList = genresFilterList
   
  }
  
  if(release_date){
    const releaseDateFilterList  = this.gamesList.filter(r => r.release_date == release_date)
    this.gamesList = releaseDateFilterList
  }

  if(publisher){
    const publisherFilterList = this.gamesList.filter(r => r.publisher == publisher)
    this.gamesList = publisherFilterList
  }

  if(categories){
   const categoriesFilterList = this.gamesList.filter(r => r.categories == categories)
   this.gamesList = categoriesFilterList
  }

  res.send(this.gamesList)
   
 


})

module.exports = router