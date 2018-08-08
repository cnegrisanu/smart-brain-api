const handleImage = (req, res, db) => {
    const {id} = req.body;

    db('users').returning('entries').where({id}).increment('entries',1)
    .then(response => {
        res.json(response[0]);
    })
    .catch(err => res.status(400).json('Unable to get entries!'));
}

module.exports = {
    handleImage: handleImage
}