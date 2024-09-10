import React from "react";
import { clients } from "./Utilities";
const ClientPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {" "}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Clients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={client.imageUrl}
                alt={client.name}
                className="w-12 h-12 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold mb-1">{client.name}</h2>
              <p className="text-gray-600 text-sm mb-4">ID: {client.id}</p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 text-sm mb-8 text-center">
                  <span className="mr-6">Request Date:</span>
                  <span className="font-semibold">{client.requestDate}</span>
                </p>
                <div className="flex justify-center space-x-12">
                  <button className="bg-[#032858] text-white py-2 px-5 rounded-full hover:bg-primaryDark">
                    Accept
                  </button>
                  <button className="bg-gray300 text-baseBlack py-2 px-5 rounded-full hover:bg-gray-400">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClientPage;
