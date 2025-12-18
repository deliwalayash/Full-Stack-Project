const express=require('express')
const route=express.Router()

const User=require('../model/user')

console.log(User)



route.post('/create',async(req,res)=>{

    const {name ,email,course}=req.body

    if(!name || !email || !course){

        return res.status(500).json({
            success:false,
            message:"All field Must Require"
        })
    }

    try{
        const student=await User.create({name,email,course})
        return res.status(200).json({
            success:true,
            message:"Student cretaed",
            data:student
        })

    }
    catch(err){
        return res.status(200).json({
            success:false,
            message:err.message
        })


    }
    
})

route.get('/view',async(req,res)=>{
   try{

     const details=await User.find()

    if(details.length == 0){
        return res.status(500).json({
            success:false,
            message:"NO user Found"
        })
    }

    res.status(200).json({
        success:true,
        message:"User found",
        data:details
    })

   }
   catch(err){
     return res.status(500).json({
            success:false,
            message: err.message
        })

   }

})

route.delete('/delete/:id',async(req,res)=>{

    const{ id} = req.params

    try{
        const founduser=await User.findById(id)
        if(!founduser){
            return res.status(404).json({
                success:false,
                message:"No user found"
            })

        }

        await User.findByIdAndDelete(id)

        return res.status(200).json({
            success:true,
            message:"User successfully deleted"
        })




    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })

    }
})

route.put('/update/:id',async(req,res)=>{

    const {id}=req.params

    const {name,email,course}=req.body

  try{
    const founduser=await User.findById(id)

    if(!founduser){
        return res.status(404).json({
            success:false,
            message:"No user found"
        })
    }

    const upDateUser=await User.findByIdAndUpdate(
        id,
        {name,email,course},
        {new:true}

    )

    return res.status(200).json({
        success:true,
        message:"User Updated",
        data:upDateUser
    })


  }catch(err){
    return res.status(500).json({
        success:false,
        message:err.message
    })

  }

    
})

module.exports = route