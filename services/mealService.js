//Mealclass to preform CRUD operations on database rows
const { Op } = require("sequelize");
class MealService {
    constructor(db) {
        this.client = db.sequelize;
        this.Meal = db.Meal;
        this.Type = db.Type;
       
    }
    //Get all meals (with type)
    async get() {
        return this.Meal.findAll({
          where: {},
          include: [
            {
              model: this.Type
            }
          ]
      
          })
      };
  
      //Delete a meal with a given ID
    async removeMeal(mealId) {
        return this.Meal.destroy(
             { where: { id: mealId } });
    }


    //Create new meal
    async createMeal(name, type, calories, protein){
      return this.Meal.create({
        Name: name,
        TypeId: type,
        Calories: calories,
        Protein: protein
      })
    }
  async findMeal(searchString){
    return this.Meal.findAll({
      where: {
        name: {
          [Op.like]: searchString + '%'
        }
      }
    })
  }
}
module.exports = MealService;