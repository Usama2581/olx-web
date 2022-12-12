const express = require('express')
// const { findById } = require('../models/adsModel')
const router = express.Router()
const Ads = require('../models/adsModel')



router.post('/insert', async(req, res) => {
    const adsDetails  = req.body
    console.log(req.body)
    try {
      const ads = new Ads(req.body)        
      await ads.save()
      res.send('ad posted')
    } catch (e) {
        res.send({ message: e })
    }
})


router.get('/', async(req, res) => {
    const result = await Ads.find()
    res.send(result)
})

router.get('/one/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const result = await Ads.findById(id)
        res.send(result)
    } catch (e) {
        res.send({ message: e.message})
    }
})


router.get('/:search', async(req,res) => {
    const title = req.params.search
    console.log(title)
    try {
        const result = await Ads.find({ title: {$eq: title }})
        res.send(result)
    } catch (e) {
        res.send({ message: e.message})
    }
})



module.exports = router