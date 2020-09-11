import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';
import '../styles/Properties.css';

function Properties({ userID }) {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: '', isSuccess: false });

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: true,
        })
      );
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(err => console.log(err));
  }, [search]);

  const handleSaveProperty = propertyId => {
    axios.post('http://localhost:4000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <div className="Properties">
      <SideBar />
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map(property => (
        <div className="Properties__propertycard" key={property._id}>
          <PropertyCard
            {...property}
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        </div>
      ))}
    </div>
  );
}

export default Properties;
