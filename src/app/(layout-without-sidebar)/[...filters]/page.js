import React from "react";

function Filters({ params }) {
  const { filters } = params;
  console.log(filters);
  return (
    <div>
      <ul className="text-3xl text-center p-12">
        {filters.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
