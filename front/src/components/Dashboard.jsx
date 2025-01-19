import React, { useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([
    {
      name: 'John Doe',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Software Engineer from California.',
      hobbies: 'Coding, Hiking, Reading'
    },
    {
      name: 'Jane Smith',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Graphic Designer from New York.',
      hobbies: 'Drawing, Traveling, Photography'
    },
    {
      name: 'Chris Johnson',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'Product Manager from Texas.',
      hobbies: 'Gaming, Cooking, Running'
    },
    {
      name: 'Emma Brown',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Marketing Specialist from Florida.',
      hobbies: 'Writing, Yoga, Music'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <div className="user-card">
          <img src={data[currentIndex].imageUrl} alt={data[currentIndex].name} style={{ maxWidth: '100px', borderRadius: '8px' }} />
          <h2>{data[currentIndex].name}</h2>
          <p>{data[currentIndex].bio}</p>
          <p><strong>Hobbies:</strong> {data[currentIndex].hobbies}</p>
        </div>
      )}
      <div className="buttons">
        <button onClick={handleButtonClick}>Link-up</button>
        <button onClick={handleButtonClick}>Reject</button>
        <button onClick={handleButtonClick}>Reverse</button>
      </div>
    </div>
  );
};

export default Dashboard;