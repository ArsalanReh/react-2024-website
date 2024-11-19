import React, { useState, useEffect } from 'react';
import './ServiceSection.css';

// Using JSONPlaceholder for sample data
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch services from JSONPlaceholder API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Only get the first 6 items for demonstration purposes
        const formattedData = data.slice(0, 6).map((item, index) => ({
          id: item.id,
          title: item.title,
          description: item.body,
          image: `https://picsum.photos/200/150?random=${index + 1}`, // Placeholder images
        }));
        setServices(formattedData);
        setFilteredServices(formattedData);
      })
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <section id='service' className="service-section">
      <h2>Our Services</h2>
      <p>We provide a variety of services to meet your needs.</p>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for services..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button disabled={!searchQuery} onClick={() => handleSearch()}>
          Search
        </button>
      </div>

      {/* Service List */}
      <div className="service-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div className="service-item" key={service.id}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))
        ) : (
          <p>No services found</p>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
