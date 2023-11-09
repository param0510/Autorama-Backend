const express = require('express');
const router = express.Router();

const accessoryModel = require('../models/accessory')


router.get('/', (req, res) => {
    accessoryModel.find((err, accessoriesFound) => {
        if (err) {
            console.log('Error finding any accessories in database')
            return res.status(400).json(err)
        }
        else {
            // res.render('accessories/index', { title: "Our accessories", accessories: accessoriesFound })
            return res.status(200).json(accessoriesFound)
        }
    })
})

router.post('/', (req, res) => {
    accessoryModel.create(req.body, (err, newAccessory) => {
        if (err) {
            console.log('Error in making new Accessory entry')
            return res.status(501).json(err)
        }
        else {
            return res.status(201).json(newAccessory)
        }
    }
    )
})


router.delete('/:id', (req, res) => {
    accessoryModel.findByIdAndRemove(req.params.id, (err, deletedAccessory) => {
        if (err) {
            console.log(`Error in deleting deletedAccessory`)
            return res.status(400).json(err)
        }
        else {
            return res.status(204).json(deletedAccessory)
        }
    })
})



router.put('/', (req, res) => {
    accessoryModel.findByIdAndUpdate(req.body._id, req.body, (err, selectedAccessory) => {
        if (err) {
            console.log(err)
            return res.status(400).json(err)
        }
        else {
            return res.status(202).json(selectedAccessory)
        }
    })
})

module.exports = router