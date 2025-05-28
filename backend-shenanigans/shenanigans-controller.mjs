// Controllers for the Shenanigan Collection

import 'dotenv/config';
import express from 'express';
import * as shenanigans from './shenanigans-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/shenanigans', (req,res) => { 
    shenanigans.createShenanigan(
        req.body.description, 
        req.body.score, 
        req.body.date,
        req.body.link
        )
        .then(shenanigan => {
            console.log(`Shenanigan featuring ${shenanigan.description} was added to the collection.`);
            res.status(201).json(shenanigan);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Tried to add an invalid shenangian. Ensure all fields are filled out, score is between 0 and 10, and date is formatted properly, e.g. YYYY-MM-DD' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/shenanigans', (req, res) => {
    shenanigans.retrieveShenanigans()
        .then(shenanigans => { 
            // if (shenanigans !== null && shenanigans.length > 0) {
                if (shenanigans !== null) {
                console.log(`All shenanigans were retrieved from the collection.`);
                res.json(shenanigans);
            } else {
                res.status(404).json({ Error: "Couldn't find any shenanigans." });
            }       
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: "Couldn't get shenanigans due to invalid request." });
        });
});


// RETRIEVE by ID controller
app.get('/shenanigans/:_id', (req, res) => {
    shenanigans.retrieveShenaniganByID(req.params._id)
    .then(shenanigan => { 
        if (shenanigan !== null) {
            console.log(`Shenanigan featuring ${shenanigan.description} was retrieved, based on its ID.`);
            res.json(shenanigan);
        } else {
            res.status(404).json({ Error: "Couldn't get shenanigan: no shenanigan entry with that ID." });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `Couldn't get shenanigan entry: invalid ID.` });
    });

});


// UPDATE controller ************************************
app.put('/shenanigans/:_id', (req, res) => {
    shenanigans.retrieveShenaniganByID(req.params._id)
    .then (shenanigan => { 
        if (shenanigan !== null) {
            shenanigans.updateShenanigan(
                req.params._id, 
                req.body.description, 
                req.body.score, 
                req.body.date,
                req.body.link
            )
            .then (shenanigan => {
                console.log(`Shenanigan featuring ${shenanigan.description} was updated by ID.`);
                res.json(shenanigan);
            })
        } else {
            res.status(404).json({ Error: "Couldn't update shenanigan: no shenanigan entry with that ID." });
        }        
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: "Couldn't update shenanigan entry: invalid ID." });
    });
});

// alt version
// app.put('/shenanigans/:_id', (req, res) => {
//     shenanigans.updateShenanigan(
//         req.params._id, 
//         req.body.description, 
//         req.body.score, 
//         req.body.date
//     )
//     .then(shenanigan => {
//         console.log(`Scooter shenanigan featuring "${shenanigan.description}" was updated.`);
//         res.json(shenanigan);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(400).json({ Error: 'Unique and specific error message.' });
//     });
// });


// DELETE Controller ******************************
app.delete('/shenanigans/:_id', (req, res) => {
    shenanigans.deleteShenaniganById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} shenanigan was deleted.`);
                res.status(200).send({ Success: 'Shenanigan successfully deleted.' });
            } else {
                res.status(404).json({ Error: "Couldn't delete shenanigan: already no shenanigan by that ID." });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: "Couldn't delete shenanigan: invalid ID." });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});