import course from "../models/course.js";
import section from "../models/section.js";

//Create section
export const createSection = async (req, res) => {
  try {
    //fetch data
    const { sectionName, courseId } = req.body;

    //validate the data
    if (!sectionName || !courseId) {
      return res.status.json({
        success: false,
        message: "All fields are required",
      });
    }

    //create section and insert in course
    const newSection = await section.create({ sectionName });
    const updatedeatails = await course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      {
        new: true,
      }
    );

    //hw popullate section and subsection

    return res.status(200).json({
      success: true,
      data: updatedeatails,
      message: "course updates successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      success: false,
      message: "course updates Unsuccessfully",
    });
  }
};

//updatesction
export const updateSection = async (req, res) => {
  try {
    const { sectionName, sectionId } = req.body;

    //validate the inputs
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Unable to fetch details",
      });
    }

    //updatesection
    const updateSection = await section.findByIdAndUpdate(
      sectionId,
      { sectionName: sectionName },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: updateSection,
      message: "Section updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      success: false,
      message: "Section updated Unsuccessfully",
    });
  }
};

//deleteSection
export const deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.body;
    const deleteSection = await section.findByIdAndUpdate(sectionId);

    return res.status(200).json({
      success: true,
      message: "section deleted successfully",
      data: deleteSection,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "section deleted Unsuccessfully",
    });
  }
};
