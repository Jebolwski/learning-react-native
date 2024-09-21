import React, { createContext, useState } from 'react';

const defaultValue = {
  name: '',
  email: '',
};

const DataContext = createContext(defaultValue);

const DataProvider = ({ children } : any) => {
  const [data, setData] = useState(defaultValue);
  const [user, setUser] = useState("essilanmessi");

  const updateData = (updatedData:any) => {
    setData((prevState) => ({ ...prevState, ...updatedData }));
  };

  const valueData:any={
    updateData:updateData,
    user:user
  }

  return (
    <DataContext.Provider value={valueData}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };