import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true
    }
}, {timestamps:true});

userSchema.methods.checkPassword = function (password) {
    console.log('checkPassword');
    console.log(this);
    const userPassword = this.password;
    return new Promise((resolve, reject) => {
        if(password == userPassword) resolve(true);
        else reject(false);
    });

}

export const User = mongoose.model('user', userSchema);