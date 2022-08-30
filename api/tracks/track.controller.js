const {
    create,
    getTracks,
    getTrackByTrackId,
    updateTracks,
    deleteTracks
} = require('./track.service');
module.exports = {
    createTrack: (req, res) => {
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
    getTrackByTrackId: (req, res) => {
        const id = req.params.id;
        getTrackByTrackId(id, (err, results) => {
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

    getTracks: (req, res) => {
        getTracks((err, results) => {
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


    updateTracks: (req, res) => {
        const body = req.body;
        updateTracks(body, (err, results) => {
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

    deleteTracks: (req, res) => {
        const data = req.body;
        deleteTracks(data, (err, results) => {
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