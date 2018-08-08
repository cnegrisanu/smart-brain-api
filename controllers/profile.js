const handleProfile = (req, res, db) => {
    const {id} = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
        if(user.length) {
            res.json(user[0]);
        } else {
            throw 'No such user!';
        }
    })
    .catch(err => res.status(400).json('Error getting user - ' + err));
    
}

module.exports = {
    handleProfile: handleProfile
}