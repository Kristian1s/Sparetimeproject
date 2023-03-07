module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define('Type', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Type.associate = function(models) {
        Type.belongsToMany(models.Meal, {through: "MealTypes"});
    
    };
    return Type
}   
