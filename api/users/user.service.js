const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO usuarios(nombre, apellido, genero, email, password, telefono)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                data.nombre,
                data.apellido,
                data.genero,
                data.email,
                data.password,
                data.telefono
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getUsers: callback => {
        pool.query(
            `SELECT * FROM  usuarios`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select * from usuarios where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateUsers: (data, callBack) => {
        pool.query(
            `UPDATE usuarios SET 
            nombre=?, 
            apellido=?, 
            genero=?, 
            email=?, 
            password=?, 
            telefono=? 
            WHERE id = ?`,
            [
                data.nombre,
                data.apellido,
                data.genero,
                data.email,
                data.password,
                data.telefono,
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
    deleteUsers: (data, callBack) => {
        pool.query(
            `DELETE FROM usuarios WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM usuarios WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};
