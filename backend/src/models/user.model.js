import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minLength:3,
            maxLength:20,
        },
        password:{
            type:String,
            required:true,
            minLength:6,
            maxLength:50,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        }
    
    },
    {
        timestamps:true
    }
)
//before saving the user hash the password

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});

//compare password method
userSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password);
}

export const User=mongoose.model("User",userSchema)

//onume panla iniki

//thappa seriya
