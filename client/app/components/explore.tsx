import React from 'react';

const ExploreButton = ({ website  }:any) => {
  const handleExplore = () => {
    window.location.href = website;
  };

  return (
    <button className="mt-6 w-28 px-4 py-2 bg-slate-700 text-white rounded-3xl hover:bg-white hover:text-slate-700 h-12" onClick={handleExplore}>
      Explore
    </button>
  );
};

export default ExploreButton;