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

    
  

}
module.exports = MealService;