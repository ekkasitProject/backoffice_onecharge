import React from 'react';

interface ModalAddChargingStationProps {
  onClose: () => void;
}

const ModalAddChargingStation: React.FC<ModalAddChargingStationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">Add Charging Station</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <div className="mt-4">
          {/* Modal content goes here */}
          <p>Modal content for adding a charging station.</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddChargingStation;
