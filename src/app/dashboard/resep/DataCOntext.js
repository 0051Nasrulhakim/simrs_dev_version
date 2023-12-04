// DataContext.js
"use client";
import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [resep, setResep] = useState([]);
  const [assesment, setAsessment] = useState([]);

  const dataResep = newResep => {
    setResep(newResep);
  };

  const dataAssesment = newAsswsment => {
    setAsessment(newAsswsment)
  }

  return (
    <DataContext.Provider value={{ resep, dataResep, assesment, dataAssesment }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
