import mongoose  from "mongoose";


const todoSchema = new mongoose.Schema(
    {
        todo: {
            type:String, 
            required:true
        }
    },
    {
        timestamp: true
    }
);

export const Todo = mongoose.model('todo', todoSchema);
