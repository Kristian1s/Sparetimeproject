class MealService {
    constructor(db) {
        this.client = db.sequelize;
        this.Meal = db.Meal;
        this.Type = db.Type;
       
    }
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
    
      async removeMeal(mealId) {
        return this.Meal.destroy(
             { where: { id: mealId } });
    }

    async createMeal(name, type, calories, protein){
      return this.Meal.create({
        Name: name,
        TypeId: type,
        Calories: calories,
        Protein: protein
      })
    }
  

}
module.exports = MealService;