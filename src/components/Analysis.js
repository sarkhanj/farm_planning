import React, { useEffect, useState } from "react";
import axios from "axios";
// N, P, K, temperature, humidity, ph, rainfall;

const Analysis = ({ fieldId }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null)
  const [analyzed, setAnalyzed] = useState(false)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/records/" + fieldId).then((response) => {
      setRecords(response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const analyze = (record) => {
    // Here we send request to abckedn for machine learning
    axios.get("http://127.0.0.1:8000/ml/"+record.record_id).then(response=>{
      console.log(response)
      setResult(response.data)
    })
    console.log("Analyzing the record: ", record);
  };

  return (
    <>
      <h1>Analysis</h1>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>P</th>
            <th>K</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>pH</th>
            <th>Rainfall</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((r) => r.region_id == fieldId)
            .map((record, key) => {
              return (
                <tr key={key}>
                  <td>{record.N}</td>
                  <td>{record.P}</td>
                  <td>{record.K}</td>
                  <td>{record.temperature}</td>
                  <td>{record.humidity}</td>
                  <td>{record.pH}</td>
                  <td>{record.rainfall}</td>
                  <td>
                    <button onClick={() => analyze(record)}>Analyze</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {result != null ? (
        <div className="results">
          {result[1].map((item) => (
            <>
              <p>Crop: {item[0]}</p>
              <p>Fit: {item[1]*100}%</p>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Analysis;
