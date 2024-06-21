import Joi from "@hapi/joi";

const registerValidationSchema = Joi.object({
  name: Joi.string().min(4).required(),
  surname: Joi.string().min(4).required(),
  email: Joi.string().min(5).required().email(),
  password: Joi.string().min(4).required(),
  school: Joi.string().min(5).required(),
});

export default registerValidationSchema;
