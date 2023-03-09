class TypeService {
    constructor(db) {
        this.client = db.sequelize;
        this.Meal = db.Meal;
        this.Type = db.Type;
       
    }
    async get() {
        return this.Type.findAll({
          where: {},
          })
      };
    
     /*  async removeMeal(mealId) {
        return this.Meal.destroy(
             { where: { id: mealId } });
    } */

   /*  async updateMeal(mealId) {
        return this.Meal.update(
            { Adopted: "Available" },
             { where: { id: animalid } });
    } */


    
  

}
module.exports = TypeService;