import React from 'react';

export default function CustomDropdown({ actions }) {
  return (
    <div className="relative inline-block text-left">
      <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">⋮</button>
      <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
