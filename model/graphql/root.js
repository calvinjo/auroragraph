module.exports.root = {
    createMahasiswa : (req) => {
        return require('../../controllers/mahasiswaController').create(req);
    }
}