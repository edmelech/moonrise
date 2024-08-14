import React from 'react';
import Link from 'next/link';

const ExpertiseContent: React.FC = () => {
  return (
    <div className="expertise-content m-8">
      <h2 className="text-2xl font-bold mb-6 ml-5">Expertise</h2>
      <div className="content-wrapper flex flex-col md:flex-row mb-6">
        <div className="image-wrapper md:w-1/2 order-1 md:order-none">
          <img src="/Water-Engineer-Clipboard-low-res.jpg" alt="Water Engineer Clipboard" className="rectangle-image w-full" />
        </div>

        <div className="text-content md:w-1/2 order-2 md:order-none">
          <div className="half-width-section-right mb-10">
            <h3 className="mb-2 font-bold">Engineering</h3>
            <p className="engineering-paragraph mb-4">At moonrise, we recognise that the engineering sector is growing at an astonishing rate. Our specialist
              consultants are experts in the engineering field and are committed to meeting the ever-growing demand
              that our global infrastructure presents. Our team of specialists have plenty of hands-on experience in
              placing passionate engineers from entry to executive level across multiple disciplines. These include Land
              Development, Water/Wastewater, Water Resources, Transportation, Construction, Geotechnical,
              Electrical, Structural, Oil &amp; Gas, Automation &amp; Controls and many more.</p>
            <Link href="/contact">
              <button className="learn-more engineering-button">LEARN MORE</button>
            </Link>
          </div>

          <div className="half-width-section-right mb-6">
            <h3 className="mb-2 font-bold">Architecture</h3>
            <p className="mb-4">Our specialist recruiters have hands-on experience in finding and providing talent across the architecture industry. We understand that the built environment is constantly evolving, presenting new challenges in sustainability practices, design protocols, and construction standards. And we understand that you need the creative experience and strategic input of architects, planners and designers to achieve them. Using a client-focused and data-driven approach, we make it simple for you to deliver and access the complex talent and recruitment landscape so that you can successfully meet your business objectives.</p>
            <Link href="/contact">
              <button className="learn-more">LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div> 
      <div className="content-wrapper flex flex-col md:flex-row">
          <div className="text-content md:w-1/2 order-2 md:order-none">
              <div className="half-width-section-left mb-10">
                <h3 className="mb-2 font-bold">Real Estate</h3>
                <p className="mb-4">At moonrise. Our expert consultants specialise in strategically targeting top-tier candidates and partnering with clients across a broad portfolio of roles at real estate companies, from innovative start-ups to major multinationals from the commercial, residential and property investment, development and asset management sectors. We are passionate about people and property, with a team that understands the demands of real estate and go the extra mile to secure successful placements.</p>
                <Link href="/contact">
                  <button className="learn-more">LEARN MORE</button>
                </Link>
              </div>

              <div className="half-width-section-left mb-6">
                <h3 className="mb-2 font-bold">Renewable Energy</h3>
                <p className="mb-4">Our energy network consists of thousands of professionals with multi-disciplined capabilities as well as ample resources to serve global clients effectively and efficiently. Our resources and geographical base enable us to serve key local areas and partner efficiently with industry leaders in the energy field. Some of the disciplines covered by our network include Power Delivery Services, Battery Energy Storage Systems (BESS) Consulting, Hydrogen Services, Wind Engineering Services, Solar Engineering Services, Natural Gas Engineering Services, and Zero-Emission Vehicle Infrastructure.</p>
                <Link href="/contact">
                  <button className="learn-more">LEARN MORE</button>
                </Link>
              </div>
          </div>
          <div className="image-wrapper md:w-1/2 order-1 md:order-none">
            <img src="/water-treatment-plant-low-res.jpg" alt="Water Treatment Plant" className="rectangle-image w-full" />
          </div>
      </div>
      <div className="text-content">
        <div className="half-width-section-left mb-6">
          <h3 className="mb-2 font-bold">Aviation / Aerospace</h3>
          <p className="mb-4">We provide the expertise and ideas you need to confidently solve your aviation and aerospace talent management challenges. When it comes to the research, design, manufacture and maintenance of both aircraft and spacecraft, moonrise. has the people, strategy, and resources to provide the talent you require. We work with all kinds of organisations in the aviation and aerospace industry to facilitate growth and exploration. Our extensive networks and close regional knowledge allow us to access talent from around the globe.</p>
          <Link href="/contact">
            <button className="learn-more">LEARN MORE</button>
          </Link>
        </div>
        <div className="half-width-section-left mb-6">
          <h3 className="mb-2 font-bold">Technology</h3>
          <p className="mb-4">We understand how quickly technology is impacting the world, transforming industries, improving
communities, and helping us realise a better and more sustainable environment. moonrise. partners with
some of the leading global organisations in the Technology industry, enabling them to scale into new
markets and territories, create and design new products and offerings, and restructure their teams from
entry-level to leadership executives. Areas of expertise include Cyber Security, Semi-Conductors, Artificial
Intelligence, Cloud-Based Tech, Digital Infrastructure, Sustainability Tech, and more.</p>
          <Link href="/contact">
            <button className="learn-more">LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseContent;