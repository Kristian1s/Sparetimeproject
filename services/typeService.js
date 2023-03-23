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
    

}
module.exports = TypeService;