import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";

function AllStudents({ setLoggedIn }) {
  const [students, setStudents] = useState([]);
  const [editableGrades, setEditableGrades] = useState({}); // State to track editable grades
  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3333/api/v1/student/report"
      );
      setStudents(response.data.data);
    } catch (error) {
      toast.error(error.massage);
    }
  };

  const handleEditGrade = (studentIndex, subjectIndex) => {
    console.log("studentIndex", studentIndex);
    console.log("studentIndex", studentIndex);
    setEditableGrades({
      ...editableGrades,
      [`${studentIndex}-${subjectIndex}`]: true, // Set as editable
    });
    console.log("edit", editableGrades);
  };
  const handleSaveGrade = (studentIndex, subjectIndex, event) => {
    // console.log()
    // Save the updated grade (you can send it to API or update state)
    const newGrade = event.target.value; // Assuming value is directly taken from the input
    console.log(
      `Saving grade ${newGrade} for student ${studentIndex}, subject ${subjectIndex}`
    );

    //     // Disable editing after saving
    //     setEditableGrades({
    //       ...editableGrades,
    //       [`${studentIndex}-${subjectIndex}`]: false // Set as non-editable
    //     });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <Layout>
      <h2 className="text-center mb-4">Е-дневник на ученици и оцени</h2>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Име</th>
                <th scope="col">Презиме</th>
                <th scope="col">Предмет</th>
                <th scope="col">Оцена</th>
                {/* <th scope="col">Дејства</th> */}
              </tr>
            </thead>
            <tbody>
              {students.map((student, studentIndex) =>
                student.info.map((item, subjectIndex) => (
                  <tr key={`${studentIndex}-${subjectIndex}`}>
                    {subjectIndex === 0 ? (
                      <td rowSpan={student.info.length}>
                        {student.student_name}
                      </td>
                    ) : null}
                    {subjectIndex === 0 ? (
                      <td rowSpan={student.info.length}>
                        {student.student_surname}
                      </td>
                    ) : null}
                    <td>{item.subject_name}</td>
                    <td>
                      {/* {editableGrades[`${studentIndex}-${subjectIndex}`] ? (
                          <input
                            type="number"
                            value={item.grade}
                            onChange={(e) => handleSaveGrade(studentIndex, item.subject_name, e)}
                            className="form-control"
                          />
                        ) : ( */}
                      {item.grade}
                      {/* )} */}
                    </td>
                    <td>
                      {/* {editableGrades[`${studentIndex}-${subjectIndex}`] ? (
                          <button className="btn btn-primary" onClick={() => handleSaveGrade(studentIndex, subjectIndex)}>
                            Зачувај
                          </button>
                        ) : (
                          <button className="btn btn-secondary" onClick={() => handleEditGrade(studentIndex, subjectIndex)}>
                            Промени
                          </button>
                        )} */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
export default AllStudents;
