import course from "../models/course.js";
import user from "../models/user.js";

export const addToCart = async(req,res) => {
    try {
        const {id, courseId} = req.body;
        // console.log(id, courseId);
        if(!courseId || !id) {
            return res.status(400).json({message: "All fields are required",success:false})
        }
        let userToAdd = await user.findById(id)
        const courseToAdd = await course.findById(courseId)
        if(!userToAdd) {
            return res.status(404).json({message: "User not found",success:false})
        }
        if(!courseToAdd) {
            return res.status(404).json({message: "Course not found",success:false})
        }

        if(userToAdd.cart.courses.includes(courseId)) {
            return res.status(400).json({message: "Course already in cart",success:false})
        }
        userToAdd.cart.totalPrice = userToAdd.cart.totalPrice + courseToAdd.price
        
        userToAdd.cart.courses.push(courseId);    
        
        await userToAdd.save();
        userToAdd = await user.findById(id).populate("cart.courses");
        return res.status(200).json({message: "Course added to cart",success:true,cart : userToAdd.cart})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: error.message})
    }
}   

export const removeFromCart = async(req,res) => {
    try {
        const {id, courseId} = req.body;
        if(!courseId || !id) {
            return res.status(400).json({message: "All fields are required",success:false})
        }
        let userToAdd = await user.findById(id)
        const courseToAdd = await course.findById(courseId)
        if(!userToAdd) {
            return res.status(404).json({message: "User not found",success:false})
        }
        if(!courseToAdd) {
            return res.status(404).json({message: "Course not found",  success:false})
        }

        if(!userToAdd.cart.courses.includes(courseId)) {
            return res.status(400).json({message: "Course not in cart",success:false})
        }

        const index = userToAdd.cart.courses.indexOf(courseId);
        userToAdd.cart.courses.splice(index,1);
        userToAdd.cart.totalPrice = userToAdd.cart.totalPrice - courseToAdd.price
        await userToAdd.save();
        userToAdd = await user.findById(id).populate("cart.courses");
        return res.status(200).json({message: "Course removed from cart",success:true, cart: userToAdd.cart})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

export const getCart = async(req,res) => {
    // console.log('kkk');
    try {
        const {id} = req.params;
        if(!id) {
            return res.status(400).json({message: "All fields are required",success:false})
        }

        const userToAdd = await user.findById(id).populate("cart.courses");
        if(!userToAdd) {
            return res.status(404).json({message: "User not found",success:false})
        }
        return res.status(200).json({success:true, cart: userToAdd.cart})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}