import mongoose from "mongoose";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
const ourschema=new mongoose.Schema({
    paymentmethod:{
        type:String,   
    },
    email:{
        type:String,   
    },
    nameoncard:{
        type:String,   
    },
    cardnumber:{
        type:String,   
    }, 
    cvc:{
        type:String,   
    }, 
    address:{
        type:String,   
    }, 
    city:{
        type:String,   
    }, 
    region:{
        type:String,   
    }, 
    postalcode:{
        type:String,   
    }, 
    netbankingoption:{
        type:String,   
    }, 
    upiid:{
        type:String,   
    }, 
    inputcardnumber:{
        type:String,   
    },   
});
mongoose.models={};
export default mongoose.model("buy",ourschema);