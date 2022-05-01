//Création du models de table avec sequelize 

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts
};