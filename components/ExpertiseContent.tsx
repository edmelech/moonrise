import React from 'react';


const ExpertiseContent: React.FC = () => {
  return (
    <div className="expertise-content m-8">
      <h2 className="text-xl font-bold mb-6">Expertise</h2>
      <ul className="list-none">
        <li className="mb-6">
          <div className="half-width-section-right">
            <h3 className="mb-2 font-bold">Water Resources</h3>
            <p className="mb-4">Our expertise in water resources encompasses a comprehensive understanding of hydrology, water distribution, and sustainable management practices. We aim to ensure the availability and quality of water for diverse needs.</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="half-width-section-right">
            <h3 className="mb-2 font-bold">Wastewater</h3>
            <p className="mb-4">Specializing in wastewater management, we focus on the treatment and recycling of wastewater to protect water bodies from pollution and to support environmental sustainability. Our innovative solutions aim to reduce water footprint.</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="half-width-section-left">
            <h3 className="mb-2 font-bold">Water Treatment</h3>
            <p className="mb-4">Our water treatment expertise involves the use of cutting-edge technologies to ensure the safety and cleanliness of water for consumption and use. We are dedicated to providing solutions that meet stringent quality standards.</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="half-width-section-left">
            <h3 className="mb-2 font-bold">Land Development</h3>
            <p className="mb-4">We offer comprehensive land development services, focusing on sustainable and efficient use of land resources. Our team works on planning, design, and implementation of infrastructure projects to foster community growth.</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="half-width-section-right">
            <h3 className="mb-2 font-bold">Transportation</h3>
            <p className="mb-4">Our transportation expertise includes the planning, design, and management of transportation systems to improve mobility, enhance safety, and minimize environmental impact. We are committed to developing smart and efficient transportation solutions.</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExpertiseContent;