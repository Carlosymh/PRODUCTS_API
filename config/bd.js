const mongoose = require('mongoose');
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const BDConect = async () => {

    try{

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD Conect');

    } catch (error){
        console.log(error);
        process.exit(1)// app stop
             
    }

}

module.exports = BDConect
