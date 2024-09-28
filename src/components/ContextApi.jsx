// src/AppContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FetchDataFromApi } from './Api';

export const AuthContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedValue);
  }, [selectedValue]);

  const fetchSelectedCategoryData =  (query) => {
    setLoading(true);
    try {
       FetchDataFromApi(`search?q=${query}`).then(({contents} )=>{
        
      setData(contents);
      });
     
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
       data,
        loading,
        setLoading,
        setData,
        selectedValue,
        mobileMenu,
        setMobileMenu,
        setSelectedValue,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
