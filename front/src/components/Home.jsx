import React, { useContext, useEffect, useState } from 'react';
// import { FirebaseContext } from '../context/FirebaseContext';

const Home = () => {
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
    <div className="home">
      <h1>Welcome to the App</h1>
      <p>This is the landing page of the application.</p>
      <h2>Data from Firebase:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;