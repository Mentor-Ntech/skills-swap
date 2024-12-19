import React from 'react'

const HomeDash = ({details}) => {
  return (
    <div className="dashboard">
    <h2 className="text-xl font-bold">Dashboard</h2>
    <ul>
      {details.map((item, index) => (
        <li key={index} className="my-4 p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>Price: {item.price} CELO</p>
          <p>Description: {item.description}</p>
          {item.fileUrl && (
            <img
              src={URL.createObjectURL(item.fileUrl)}
              alt={item.title}
              className="w-20 h-20 object-cover mt-2"
            />
          )}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default HomeDash;
