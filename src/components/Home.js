import React from 'react'
import {useNavigate} from 'react-router-dom'

const data = [
  { FieldId: 0, Region: "Shusha" },
  { FieldId: 1, Region: "Khankendi" },
  { FieldId: 2, Region: "Zangilan" },
  { FieldId: 3, Region: "Shusha" },
  { FieldId: 4, Region: "Aghdam" },
];

const Home = ({setFieldId}) => {

    let navigate = useNavigate(); 
    const setField =(id) => {
        if(setFieldId(id))
        console.log(id)

        navigate('/Analysis')
    }

  return (
    <div className="home">
      <table>
        <thead>
          <tr>
            <th>FieldId</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.FieldId}</td>
                <td>{val.Region}</td>
                <td>
                  <button onClick={() => setField(val.FieldId)}>Analyze</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Home