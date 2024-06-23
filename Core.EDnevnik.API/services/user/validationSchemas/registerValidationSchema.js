import Joi from "@hapi/joi";

const registerValidationSchema = Joi.object({
  name: Joi.string().min(4).required(),
  surname: Joi.string().min(4).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().min(4).required(),
  school: Joi.string().min(5).required(),
  role_id: Joi.number().valid(1, 2).required(),
});

export default registerValidationSchema;
