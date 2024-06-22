export default async (req, res) => {
  const USER_INFO_DATA = req?.USER_INFO_DATA;

  try {
    const { email, school, role_id, firstName, lastName, _id} = USER_INFO_DATA;

    if (USER_INFO_DATA) return { email, school, firstName, lastName, role_id, _id};

    if (!USER_INFO_DATA) {
      return {
        message: `No user info found`,
      };
    }
  } catch (error) {
    return {
      message: error,
    };
  }
};
