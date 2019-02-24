const Promise = require("bluebird"),
      dbModel = require('../dbmodels/model');

class Query {

   getAllData(){
      return dbModel.find({}).exec();
   }

  addNew(data){
    return new Promise((resolve, reject) => {
      console.log(data);
      dbModel.create(data).then(
        succ => resolve(data)
        ,err => reject(err)
      )
    })
  }

//first get then update two methods here

getById(id,data){
  return new Promise((resolve, reject) =>{
    dbModel.findOne({_id:id},data).then(
      userData =>resolve(userData)
      ,err => reject(err)
     )
  })
}
updateById(id,data){
  return new Promise((resolve, reject) =>{
    if (id == undefined) {
        return reject();
    }
    dbModel.findOneAndUpdate({_id:id},data).then(
      userData =>{
        if (userData == null || userData == undefined) {
          return reject('user with this {_id} is not avaialble');
        }
        resolve(userData);
      }
      ,err => reject(err)
    )
  })
}

deleteById(id){
  return dbModel.findByIdAndRemove(id).exec()
}


}
module.exports  = new Query();
