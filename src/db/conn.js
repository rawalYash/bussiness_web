const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quaryForm", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected sucessfully");
}).catch((err) =>{
    console.log(err);
})