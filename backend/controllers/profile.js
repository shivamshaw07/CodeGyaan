import Profile from "../models/profile.js";
import user from "../models/user.js";

export const updateProfile = async  (req,res)  =>  {
    try {
        const {about = "",dateOfBirth = "",gender,contactNumber} = req.body
        const id = req.user.id

        if(!id){
            return res.status(400).json({
                success : false,
                message : "id not fond"
            })
        }

        //find the user in user schema
        const userDetails = await user.findById(id)
        const profileId = userDetails.additionalDetails

        //find profile
        const profile = await Profile.findById(profileId)

        //update profile
        profile.gender = gender
        profile.dateOfBirth = dateOfBirth
        profile.contactNumber = contactNumber
        profile.about = about

        await profile.save()

        return res.status(200).json({
            success:true,
            message:"profile updated successfully",
            data:profile
        })


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:fale,
            message:"profile updated Unsuccessfully",
        })
    }
}


//delete Account
export const deleteAccount = async(req,res) => {
    try {
        //get the user
        const userId = req.user.id

        //validate user
        const user = await user.findById(userId)
        if(!userId){
            return res.status(400).json({
                success : false,
                message : "id not fond"
            })
        }

        //find profile
        await Profile.findByIdAndDelete({_id:user.additionalDetails})
        await user.findByIdAndDelete({_id:userId})
        return res.status(200).json({
            success:true,
            message:"account deleted successfully",
        })
        
    } catch (error) {
        return res.status(500).json({
            success:flse,
            message:"account delted Unsuccessfully",
        })
    }
}