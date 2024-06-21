import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterTecher() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [selectedRole, setSelectedRole] = useState('Наставник');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async(event) => {
    const role_id = selectedRole == "Наставник"  ? 1 : 2
    event.preventDefault();
    // Handle register logic here
    try{
      const response  = await axios.post('http://localhost:3333/api/v1/user/register', {name,surname, email, password, school,role_id})
      console.log('resposne', response.data)
      if(response.status === 201){
        toast.success(response.data.message, {
          onClose: () => navigate('/login')
        });
      }
      
    }catch(error)
    {
      // console.log('error-Register', error)
      toast.error(error.message)
    }
  };

  return (
    <div className='mt-5'>
      <h2>Креирај корисник за {selectedRole}</h2>
      <div className="text-center mb-3">
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="Наставник"
              checked={selectedRole === 'Наставник'}
              onChange={handleChange}
            />
            Наставник
          </label>
        </div>
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            value="Ученик"
            checked={selectedRole === 'Ученик'}
            onChange={handleChange}
          />
          Ученик
        </label>
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Име:</label>
          <input
            type="text"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Презиме:</label>
          <input
            type="text"
            value={surname}
            required={true}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <label>Е-маил:</label>
          <input
            type="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Име на училиште:</label>
          <input
            type="text"
            value={school}
            required={true}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div>
          <label>Лозинка:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" >Креирај корисник</button>
      </form>
      {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}
    </div>
  );
}

export default RegisterTecher;
