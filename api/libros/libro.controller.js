const {
    create,
    getLibros,
    getLibroByLibroId,
    updateLibros,
    deleteLibros
} = require('./libro.service');
module.exports = {
    createLibro: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error al realizar el insert"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getLibroByLibroId: (req, res) => {
        const id = req.params.id;
        getLibroByLibroId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Sin datos"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getLibros: (req, res) => {
        getLibros((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },


    updateLibros: (req, res) => {
        const body = req.body;
        updateLibros(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Actualizado correctamente"
            });
        });
    },

    deleteLibros: (req, res) => {
        const data = req.body;
        deleteLibros(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "No se pudo Eliminar"
                });
            }
            return res.json({
                success: 1,
                message: "Eliminado correctamente"
            });
        });
    },


}