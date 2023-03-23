//Defining Meal object for relationaldatabase

module.exports = (sequelize, Sequelize) => {
    const Meal = sequelize.define('Meal', {
        Name: Sequelize.DataTypes.STRING,
        Calories: Sequelize.DataTypes.INTEGER,
        Protein: Sequelize.DataTypes.INTEGER,
    },{
        timestamps: false
    });
    Meal.associate = function(models) {
        Meal.belongsTo(models.Type);
      
    };
    return Meal
}   
