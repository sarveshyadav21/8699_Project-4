import React, { useContext, useEffect, useState } from 'react';
// import { FirebaseContext } from '../context/FirebaseContext';

const Profile = () => {
  const { fetchProfileData } = useContext(FirebaseContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      const data = await fetchProfileData();
      setProfile(data);
    };

    getProfileData();
  }, [fetchProfileData]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile">
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      {profile.imageUrl && <img src={profile.imageUrl} alt="Profile" style={{ maxWidth: '200px', borderRadius: '8px' }} />}
    </div>
  );
};

export default Profile;