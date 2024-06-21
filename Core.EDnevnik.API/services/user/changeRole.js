import studentAsTeacher from "../../repository/user/act-student-as-teacher";

export default async (req, res) => {
  try {
    await studentAsTeacher(req.params.userId);
    return {
      message: `Role for user with id ${req.params.userId} is changed. Now user, ${req.params.userId} can act like teacher`,
    };
  } catch (error) {
    return {
      message: error,
    };
  }
};
