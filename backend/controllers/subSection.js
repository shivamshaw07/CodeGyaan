import SubSection from "../models/SubSection.js";
import section from "../models/section.js";
import { uploadImageToCloudinary } from "../utils/imageUploader.js";
import { config as configDotenv } from "dotenv";
configDotenv()


//create subsection
export const createSubSection = async (req,res) =>{
    try {
            //fetch data
        const {title,description,duration,sectionId} = req.body
        const video = req.files.videoFile

        //validate the enteries
        if(!title || !description || !duration || video){
            return res.status(400).json({
                success : false,
                message:"All fileds are mandatory"
            })
        }

        //upload video to cloudinary
        const videoDetails = uploadImageToCloudinary.uploader.upload(video, process.env.FOLDER_NAME)

        //create a subsection
        const subsection = await SubSection.create(
            {
                duration:duration,
                description:description,
                title:title,
                videoUrl:videoDetails.secure_url
            }
        )

        //update section with subsection
        const updateSection = await section.findByIdAndUpdate({_id:sectionId},{
            $push:{
                subSection:subsection._id
            }
        },{new:true})
        //HW: add populate here to log updated section

        return res.status(200).json({
            success:true,
            message:"SubSection Added successfully",
            data:subsection
        })
    } catch (error) {
        console.log(error.message);
        return res.status(200).json({
            success:false,
            message:"SubSection Added successfully",
        })
    }

}



//Update subsection
export const updateSubSection = async (req,res) => {
    try {
                    //fetch data
                    const {title,description,duration,subSectionId} = req.body
                    const video = req.files.videoFile
            
                    //validate the enteries
                    if(!title || !description || !duration || !subSectionId){
                        return res.status(400).json({
                            success : false,
                            message:"All fileds are mandatory"
                        })
                    }
            
                    //upload video to cloudinary
                    const videoDetails = uploadImageToCloudinary.uploader.upload(video,process.env.FOLDER_NAME)

                    //update subsection
                    const updateSubSectionDetails = await SubSection.findByIdAndUpdate({_id:subSectionId},
                        {
                            title,
                            duration,
                            description,
                            videoUrl:videoDetails.secure_url
                        }
                    )

                    return res.status(200).json({
                        success:true,
                        message:"Subsection updated successfully",
                        data:updateSubSectionDetails
                    })
            
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Subsection updated Unsuccessfully",
        })
    }
}


//delete subsection
export const deleteSubsection = async (req,res) =>{
    try {
        const {subSectionId} = req.body

       // validate
       if(!subSectionId){
            return res.status(500).json({
                success:false,
                message:"SubsectionId required to delete",
            })
       }

       const deleteDetails = await section.findByIdAndDelete({_id:subSectionId})
       return res.status(200).json({
            success:true,
            message:"Subsection deleted successfully",
            data:deleteDetails
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Subsection deleted Unsuccessfully",
        })
    }
}