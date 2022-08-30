const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO libros(nombre, descripcion, editorial, autor, fecha, genero)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                data.nombre,
                data.descripcion,
                data.editorial,
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
    getLibros: callback => {
        pool.query(
            `SELECT * FROM  libros`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getLibroByLibroId: (id, callBack) => {
        pool.query(
            `select * from libros where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateLibros: (data, callBack) => {
        pool.query(
            `UPDATE libros SET 
            nombre=?, 
            descripcion=?, 
            editorial=?, 
            autor=?, 
            fecha=?, 
            genero=? 
            WHERE id = ?`,
            [
                data.nombre,
                data.descripcion,
                data.editorial,
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
    deleteLibros: (data, callBack) => {
        pool.query(
            `DELETE FROM libros WHERE id = ?`,
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
