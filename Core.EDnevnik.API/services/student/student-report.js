import getStudentsReport from "../../repository/students/student-summary";
import allStudentsReportMapper from "../../utils/all-students-report-mapper";

export default async (req, res) => {
  const result = await getStudentsReport();
  const data = allStudentsReportMapper(result);

  if (result) {
    return {
      data: data,
      statusCode: 200,
    };
  }

  return {
    data: [],
    statusCode: 200,
  };
};
