import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="bg-white rounded-md p-4 shadow-md h-full">
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 px-4 py-2 text-left bg-gray-100"
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {headers.map((header, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">
                  {header === "name" ? (
                    <strong className="font-bold">{row[header]}</strong>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="action-btns flex justify-between items-center py-2">
        <div className="action-left-btn">
          <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
            Add More
          </button>
        </div>
        <div className="action-right-btn flex gap-2">
          <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
            Save
          </button>
          <button className="bg-white border-page-secondary border-[0.5px] p-2 rounded-lg font-semibold">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
