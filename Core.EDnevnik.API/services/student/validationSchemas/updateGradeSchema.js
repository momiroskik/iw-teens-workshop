import Joi from "@hapi/joi";

const updateGradeValidationSchema = Joi.object({
  grade: Joi.number().min(1).max(5).required(),
});

export default updateGradeValidationSchema;
