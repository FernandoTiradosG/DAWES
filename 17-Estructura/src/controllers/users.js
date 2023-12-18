async function getUsers(req, res, next) {
const filters = req.query;
    return res.status(200).send({ results: [], filters });
}

function getUserId(req, res, next) {
    return res.status(200).send(req.params.id);
}

function createUser(req, res, next) {
    mongodbService.createUser(req.body);
    return res.status(201).send({ message: 'Created' });
}

function pingController(){
    response.statusCode = 418;
    response.setHeader('Content-Type', 'text/html');
    return response.end('<h1>Pong</h1>');
}

module.exports = {
    getUsers,
    getUserId,
    createUser,
};