const userModel = require('./students');
const studentUsers = () => {
    const projection = { __v: 0, _id: 0, password: 0 };
    const filter = {};
    return userModel.find(filter, projection);
}
module.exports={studentUsers}