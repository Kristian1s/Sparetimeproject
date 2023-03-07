class MealService {
    constructor(db) {
        this.client = db.sequelize;
        this.Meal = db.Meal;
        this.Type = db.Type;
       
    }
    async get() {
        return this.Meal.findAll({
          where: {},
         /*  include: [
          {
            model: this.Size
           },
           {
            model: this.Species,
        
           },
           {
            model: this.Temperament,
            through: this.AnimalTemperament
          
              }
            ] */
          })
      };
    
      async removeMeal(mealId) {
        return this.Meal.destroy(
             { where: { id: mealId } });
    }

   /*  async updateMeal(mealId) {
        return this.Meal.update(
            { Adopted: "Available" },
             { where: { id: animalid } });
    } */


    
  

}
module.exports = MealService;