//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deketeTodo = async(req,res) => {
    try {
            
        const {id} = id.params
        await Todo.findByIdAndDelete(id)
            res.json(
                {
                    success:true,
                   
                    message:'deleted Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}