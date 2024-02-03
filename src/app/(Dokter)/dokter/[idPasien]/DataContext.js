// DataContext.js
"use client";
import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [resep, SetResep] = useState([]);
  const [assesmentDokter, SetAsessmentDokter] = useState([]);
  const [diagnosa, setDiagnosa] = useState([]);
  const [perencanaan, setPerencanaan] = useState([]);
  const [tindakan, setTindakan] = useState([]);

  const DataResep = newResep => {
    SetResep(newResep);
  };

  const DataAssesmentDokter = newAssessmentDokter => {
    SetAsessmentDokter(newAssessmentDokter);
  };

  const DataDiagnosa = newDiagnosa => {
    setDiagnosa(newDiagnosa);
  }
  
  const DataPerencanaan = newPerencanaan => {
    setPerencanaan(newPerencanaan);
  }

  const DataTindakan = newTindakan => {
    setTindakan(newTindakan)
  }

  return (
    <DataContext.Provider value={{
      resep, DataResep,
      assesmentDokter, DataAssesmentDokter,
      diagnosa, DataDiagnosa,
      perencanaan, DataPerencanaan,
      tindakan, DataTindakan
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () => {
  return useContext(DataContext);
};
