import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function GetUsers() {
  const [api, setApi] = useState([]);
  const [keys, setKeys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4040/user')
      .then(response => {
        setApi(response.data);
        setKeys(response.data[0]);
      })
      .catch(error => console.error('error', error));
  }, [api]);

  function del(id) {
    axios.delete('http://localhost:4040/user/'+id).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <div className="tablecontainer">
        <table className='table' cellPadding={''}>
          <caption>
            <h1 id='curd'>CRUD OPERATIONS</h1>
          </caption>
          <thead className='tablethead'>
            <tr>
              {keys && Object.keys(keys).slice(0, 4).map((key, index) => (
                <th key={index} className='keyth' style={{ borderRadius: "5px" }}>{key}</th>
              ))}
              <th key={'op'} className='keyth' style={{ borderRadius: "5px" }}>operations</th>
            </tr>
          </thead>
          <tbody className='tbodytable'>
            {api.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className='td4table'>
                  <Link to={`/edit/${user.id}`}>
                    <button id='edit'>edit</button>
                  </Link>
                  <button id='delete' onClick={() => del(user.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button id='add' onClick={() => navigate('/add')}>add users</button>
      </div>
    </>
  );
}