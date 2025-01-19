import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';

const Dashboard = () => {
  const { fetchData } = useContext(FirebaseContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, [fetchData]);

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}: {item.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;