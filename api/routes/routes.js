const productRout = require("./product.route");
const userRouter = require("./user.routes");

const Raouter = [
    userRouter,
    productRout
];

module.exports = Raouter;