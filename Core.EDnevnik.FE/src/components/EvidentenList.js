import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import StudentTable from "./StudentTable";

function EvidentenList ({student}){
    console.log('student', student._id)
    const [gradesByUser, setGradeByUser] = useState();
    const getGradesByUser = async () =>{
        try{
            const response = await axios.get(`http://localhost:3333/api/v1/student/${student._id}`);
            setGradeByUser(response.data.data)
        }catch(error){
            toast.error('error se sluci')
        }
    }
    useEffect(()=>{
        getGradesByUser()
    },[student])
    return (
        <div>
            <StudentTable initialData={gradesByUser} />
        </div>
    )
}
export default EvidentenList;