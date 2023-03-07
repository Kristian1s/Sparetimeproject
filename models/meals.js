module.exports = (sequelize, Sequelize) => {
    const Meal = sequelize.define('Meal', {
        Name: Sequelize.DataTypes.STRING,
        Calories: Sequelize.DataTypes.INTEGER,
        Protein: Sequelize.DataTypes.INTEGER,
    },{
        timestamps: false
    });
    Meal.associate = function(models) {
        Meal.belongsToMany(models.Type, {through: "MealTypes", timestamps: false});
       
    };
    return Meal
}   
