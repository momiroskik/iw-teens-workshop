import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StudentTable from "./StudentTable";
import useAuth from "../hooks/use-auth";
import Layout from "./Layout/Layout";

const EvidentenList = () => {
  const { user } = useAuth();
  const userId = user?._id;
  const [gradesByUser, setGradeByUser] = useState();
  const getGradesByUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/api/v1/student/${userId}`
      );
      setGradeByUser(response.data.data);
    } catch (error) {
      toast.error("error se sluci");
    }
  };

  useEffect(() => {
    getGradesByUser();
  }, [user]);

  return <StudentTable initialData={gradesByUser} />;
};
export default EvidentenList;
