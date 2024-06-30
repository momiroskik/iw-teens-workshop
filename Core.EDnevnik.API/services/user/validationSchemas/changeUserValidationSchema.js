import Joi from "@hapi/joi";

const changeUserValidationSchema = Joi.object({
  name: Joi.string().min(4).required(),
  surname: Joi.string().min(4).required(),
  new_email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  old_email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  new_password: Joi.string().min(4).required(),
  old_password: Joi.string().min(4).required(),
  school: Joi.string().min(5).required(),
  role_id: Joi.number().valid(1, 2).required(),
});

export default changeUserValidationSchema;
