import React, { useState } from 'react'

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="relative font-[sans-serif] w-full mx-auto">
      <button
        type="button"
        className="px-6 py-2.5 rounded text-[#333] text-sm font-semibold border-2 border-600 hover:bg-blue-50"
      >
        {selectedCountry || 'Country'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-[#333] inline ml-3"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          />
        </svg>
      </button>
      <ul className="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
        {/* Input for filtering countries */}
        {/* List of countries */}
        <li
          className={`py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer ${
            selectedCountry === 'USA' && 'bg-blue-50'
          }`}
          onClick={() => handleCountrySelect('USA')}
        >
          <div className="flex items-center">
            USA
          </div>
        </li>
        <li
          className={`py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer ${
            selectedCountry === 'UK' && 'bg-blue-50'
          }`}
          onClick={() => handleCountrySelect('UK')}
        >
          <div className="flex items-center">
            UK
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CountryList