// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/project" , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() =>{
//     console.log("connection successfull");
// }).catch((error) => {
//     console.log(error);
// })


const dbs = 'mongodb+srv://shubham123:shubham123@cluster0.fe8izhn.mongodb.net/?retryWrites=true&w=majority';

const mongoose = require('mongoose');
mongoose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})
