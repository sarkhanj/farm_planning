import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ setFieldId }) => {
  let [loading, setLoading] = useState(true);
  let [regions, setRegions] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/regions").then((response) => {
      setRegions(response.data);
      console.log(regions)
      setLoading(false);
    });
  }, []);

  let navigate = useNavigate();
  const setField = (id) => {
    if (setFieldId(id)) console.log(id);

    navigate("/Analysis");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Regions</h1>
      <table>
        <thead>
          <tr>
            <th>RegionID</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.region_id}</td>
                <td>{val.region}</td>
                <td>
                  <button onClick={() => setField(val.region_id)}>Records</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
