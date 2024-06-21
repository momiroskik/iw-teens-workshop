import Joi from "@hapi/joi";

const loginValidationSchema = Joi.object({
  email: Joi.string().min(5).required().email(),
  password: Joi.string().min(4).required(),
});

export default loginValidationSchema;
