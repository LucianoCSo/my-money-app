const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//Banco Mongo istalado na maquina
// module.exports = mongoose.connect('mongodb://localhost/todo',
// {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });

//Banco Mongo Atlas
module.exports = mongoose.connect("mongodb+srv://lucianocosta:kelvilu2020@cluster0-sampm.mongodb.net/moneyApp?retryWrites=true&w=majority",
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."