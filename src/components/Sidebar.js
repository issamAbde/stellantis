import React from "react";

const Sidebar = ({ categories, onCategorySelect }) => {
  return (
    <div
      style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}
    >
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
