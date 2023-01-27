const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../database/sqlite.db');
const utilisateur = sequelize.define('utilisateur', {
    id_Utilisateur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Nom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Prenom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Mail: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    MotDePasse: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false
});

module.exports = utilisateur