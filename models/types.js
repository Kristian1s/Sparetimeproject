module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define('Type', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Type.associate = function(models) {
        Type.hasMany(models.Meal);
    
    };
    return Type
}   
