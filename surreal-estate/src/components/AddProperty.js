import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';
import '../styles/AddProperty.css';

function AddProperty() {
  const initialState = {
    fields: {
      title: '',
      type: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: 'Manchester',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = e => {
    e.preventDefault();
    setAlert({
      message: '',
      isSuccess: false,
    });
    axios
      .post('http://localhost:4000/api/v1/PropertyListing/', {
        ...fields,
      })
      .then(() =>
        setAlert({
          message: 'Property Added',
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: false,
        })
      );
  };

  const handleFieldsChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddProperty">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty}>
        <div className="AddProperty__field">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Advert Title"
              value={fields.title}
              onChange={handleFieldsChange}
            />
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldsChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldsChange}
            />
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={fields.bathrooms}
              onChange={handleFieldsChange}
            />
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="number"
              value={fields.price}
              onChange={handleFieldsChange}
            />
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldsChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="AddProperty__field">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Contact Email"
              value={fields.email}
              onChange={handleFieldsChange}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProperty;
