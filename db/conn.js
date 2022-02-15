const Mongoose = require('mongoose')

async function main() {
  await Mongoose.connect('mongodb://localhost:27017/testemongoose2');
  console.log('conectado com sucesso!');
}

main().catch((err) => console.log(err))

module.exports = Mongoose