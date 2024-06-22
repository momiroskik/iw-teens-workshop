const allStudentsReportMapper = (data) => {
  const remappedData = data.reduce((acc, record) => {
    const { user_id, student_name, student_surname, subject_name, grade } =
      record;

    const key = `${user_id}-${student_name}-${student_surname}`;

    if (!acc[key]) {
      acc[key] = {
        user_id,
        student_name,
        student_surname,
        info: [],
      };
    }

    acc[key].info.push({ subject_name, grade });

    return acc;
  }, {});

  return Object.values(remappedData);
};

export default allStudentsReportMapper;
