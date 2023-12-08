import tag from "../models/tag.js";


export const createTag = async (req,res) =>{
    try {
        const {name,description} = req.body;

        if(!name || !description){
            return res.status(400).json({
                success:false,
                message : "All fields are required"
            })
        }
    
        const tagDetails = await tag.create(
            {
                name:name,
                description:description
            }
        )
        console.log(tagDetails);
    
        return res.status(200).json({
            success:true,
            message:"Tag created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error while creating Tag "
        })
    }
}


export const getAllTag = async (req,res) =>{
    try {
        const allTag = await tag.find({},{name:true,description:true})
        console.log(allTag);

        return res.status(200).json({
            success:true,
            message:"Recived all tag",
            allTag,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error while reciving allTag",
        })
    }
}