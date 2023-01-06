const mongoose= require('mongoose');
// const uniqueValid= require('mongoose-unique-validator');

const schema= mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    hostel:{type:String,required:true},
    room:{type:Number,required:true},
    roll:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    uploads:[
        {
            _id:{
                type:String,
                required:true
            },
            desc:{
                type:String,
                required: false
            },
            type:{
                type: String,
                required: false,
            },
            date:{
                type: String,
                required: false
            },
            location:{
                type: String, 
                required: false
            },
            item:{
                type: String,
                required: false
            },
        }
    ]
});
// schema.plugin(uniqueValid);

module.exports= mongoose.model("User",schema);