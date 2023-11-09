const express = require('express');
const router = express.Router();

const carModel = require('../models/car')


router.get('/', (req, res) => {
    carModel.find((err, carsFound) => {
        if (err) {
            console.log('Error finding any cars in database')
            return res.status(400).json(err)
        }
        else {
            return res.status(200).json(carsFound)
        }
    })
})


//post method for add car form

router.post('/', (req, res) => {
    carModel.create( req.body, (err, newCar) => 
        {
            if(err) {
                console.log('Error in making new car entry')
                return res.status(501).json(err)
            }
            else{
                return res.status(201).json(newCar)
            }
        }
    )
})

//post method for add car form
// router.post('/add', (req, res) => {
//     // res.render('')
//     carModel.create(
//         {
//             make: req.body.make,
//             model: req.body.model,
//             year: req.body.year,
//             mileage: req.body.mileage,
//             transmission: req.body.transmission
//         }, (err, newCar) =>{
//             if(err) {
//                 console.log('Error in making new car entry')
//             }
//             else{
//                 res.redirect('/cars')
//             }
//         }
//     )
// })



// router.get('/edit/:id', (req, res) => {
//     carModel.findById(req.params.id, (err, car) => {
//         if (err){
//             console.log(err)
//         }
//         else(
//             res.render('cars/carForm', {title: 'Edit Car', carFound: car})
//         )
//     })
// })

// REST API end point

router.put('/', (req, res) => {
    carModel.findByIdAndUpdate(req.body._id, req.body, (err, selectedCar) => 
    {
        if(err){
            console.log(err)
            return res.status(400).json(err)
        }
        else{
            return res.status(202).json(selectedCar)
        }
    })
})




router.delete('/:id', (req, res) => {
    carModel.findByIdAndRemove(req.params.id, (err, deletedCar) => {
        if (err) {
            console.log(`Error in deleting deletedCar`)
            return res.status(400).json(err)
        }
        else {
            return res.status(204).json(deletedCar)
        }
    })
})


module.exports = router