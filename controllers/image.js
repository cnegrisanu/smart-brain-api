const Clarifai = require('clarifai');


const app = new Clarifai.App({
    apiKey: '681195e7b95b49638874121ead95f132'
   });

const handleApiCall = (req,res) => {
   app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
   .then(data => {
       res.json(data);
   })
   .catch(err => res.status(400).json('Unable to work with API', err));
}


const handleImage = (req, res, db) => {
    const {id} = req.body;

    db('users').returning('entries').where({id}).increment('entries',1)
    .then(response => {
        res.json(response[0]);
    })
    .catch(err => res.status(400).json('Unable to get entries!', err));
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}