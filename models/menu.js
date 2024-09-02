const mongoose=require('mongoose');

const menu= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    taste:{
        type:String,
        enum:['Spicy','Sour','Sweet'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
        required:true
    },
    ingredients :{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const MenuItems= mongoose.model('MenuItems',menu);
module.exports=MenuItems;