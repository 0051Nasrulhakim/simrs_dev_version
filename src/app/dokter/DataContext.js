// DataContext.js
"use client";
import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [resep, SetResep] = useState([]);
  const [assesmentDokter, SetAsessmentDokter] = useState([]);
  const [diagnosa, setDiagnosa] = useState([]);

  const DataResep = newResep => {
    SetResep(newResep);
  };

  const DataAssesmentDokter = newAssessmentDokter => {
    SetAsessmentDokter(newAssessmentDokter);
  };

  const DataDiagnosa = newDiagnosa => {
    setDiagnosa(newDiagnosa);
  }

  return (
    <DataContext.Provider value={{ resep, DataResep, assesmentDokter, DataAssesmentDokter, diagnosa, DataDiagnosa }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () => {
  return useContext(DataContext);
};
