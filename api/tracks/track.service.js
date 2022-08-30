const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO tracks(nombre, descripcion, duracion, autor, fecha, genero)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                data.nombre,
                data.descripcion,
                data.duracion,
                data.autor,
                data.fecha,
                data.genero
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getTracks: callback => {
        pool.query(
            `SELECT * FROM  tracks`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getTrackByTrackId: (id, callBack) => {
        pool.query(
            `select * from tracks where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateTracks: (data, callBack) => {
        pool.query(
            `UPDATE tracks SET 
            nombre=?, 
            descripcion=?, 
            duracion=?, 
            autor=?, 
            fecha=?, 
            genero=? 
            WHERE id = ?`,
            [
                data.nombre,
                data.descripcion,
                data.duracion,
                data.autor,
                data.fecha,
                data.genero,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteTracks: (data, callBack) => {
        pool.query(
            `DELETE FROM tracks WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
   
};
