import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";

const StudentTable = ({ initialData }) => {
  const gradeCount = initialData?.info?.reduce((acc, item) => {
    console.log(item.grade);
    acc = acc + item.grade;
    return acc;
  }, 0);

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
              </tr>
            </thead>
            <tbody>
              {initialData?.info?.map((item, idx) => (
                <tr key={idx}>
                  {idx === 0 && (
                    <>
                      <td rowSpan={initialData?.info?.length}>
                        {initialData?.user_name}
                      </td>
                      <td rowSpan={initialData?.info?.length}>
                        {initialData?.user_surname}
                      </td>
                    </>
                  )}
                  <td>{item?.subject_name}</td>
                  <td>{item?.grade}</td>
                </tr>
              ))}
              {!initialData?.info && (
                <tr>
                  <td
                    colSpan="4"
                    style={{ textAlign: "center", padding: "15px 50px" }}
                  >
                    За ученикот не се внесени оцени до овој момент
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {initialData?.info?.length && (
            <div className="mt-4">
              <h5>Постигнат успех:</h5>
              <p>{gradeCount / initialData?.info?.length}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StudentTable;
