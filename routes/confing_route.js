const usersR = require("./users");
const mhsR = require("./mhs");

exports.rouesInit = (app) =>{
    app.use("/mhs" , mhsR);

    app.use("/users" , usersR);
    
}