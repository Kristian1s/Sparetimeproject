module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define('Type', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Type.associate = function(models) {
        Type.belongsToMany(models.Meals, {through: models.MealTypes});
    
    };
    return Type
}   
