import React from "react";

const records = [
  {
    FieldId: 0,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
  {
    FieldId: 0,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
  {
    FieldId: 1,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
  {
    FieldId: 1,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
  {
    FieldId: 2,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
  {
    FieldId: 2,
    N: 232,
    P: 2323,
    K: 23,
    temperature: 23,
    humidity: 23,
    pH: 6,
    rainfall: 222,
  },
];

// N, P, K, temperature, humidity, ph, rainfall;

const Analysis = ({ fieldId }) => {
  const analyze = (record) => {
    // Here we send request to abckedn for machine learning
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
          {records.filter(r => r.FieldId == fieldId).map((record, key) => {
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
    </>
  );
};

export default Analysis;
