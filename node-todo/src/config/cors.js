module.exports = (req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Headers', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}