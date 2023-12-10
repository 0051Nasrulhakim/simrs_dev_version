// DataContext.js
"use client";
import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [resep, SetResep] = useState([]);
  const [assesmentDokter, SetAsessmentDokter] = useState([]);

  const DataResep = newResep => {
    SetResep(newResep);
  };

  const DataAssesmentDokter = newAssessmentDokter => {
    SetAsessmentDokter(newAssessmentDokter);
  };

  return (
    <DataContext.Provider value={{ resep, DataResep, assesmentDokter, DataAssesmentDokter }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () => {
  return useContext(DataContext);
};
