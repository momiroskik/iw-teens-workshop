const validateRequest = (data, validationSchema) => {
  if (typeof validationSchema === "object") {
    console.log('tuka')
    return validationSchema.validate(data);
  } else {
    return { message: "You must use Joi validation schema" };
  }
};

export default validateRequest;
