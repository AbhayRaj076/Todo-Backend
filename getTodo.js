//import th model
// const Todo = require("../models/Todo");
const Todo = require("../models/Todo");
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => 
    {
    try {
          const Todo = await Todo.find({})
          res.status(200)
          .json({
            success:true,
            data: Todo ,
            message:"Todo data is getting successfully"

          })
        }
    catch(err) 
    {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:"server Error",
           }) 
     }
}    

exports.getTodoById = async (req , res)=>
    {
        try{
            const id = req.params.id;
            const todo = await Todo.findById({_id:id});
            if(!todo){
                return res.status(404).json({
                    success:false,
                    message:"not data found"
                })


            }
            res.status(200)
            .json({
              success:true,
              data: Todo ,
              message:`data id is ${id} successfully fatched`
  
            })

        }
        catch(err){
            console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:"server Error",
           }) 
        }
    }