import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  const handleBackNavigation = () => {
    history.goBack();
  };
  return (
    <>
      <button
        onClick={handleBackNavigation}
        className="bg-gray-500 hover:bg-gray-700 text-sm text-white py-1 px-3 rounded-full"
      >
        Back
      </button>
    </>
  );
};

export default BackButton;
