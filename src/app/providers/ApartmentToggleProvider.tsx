import React, { createContext, ReactNode, useContext, useState } from "react";

type ApartmentToggleType = {
  showApartment: boolean;
  toggleShowApartment: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApartmentToggleContext = createContext<ApartmentToggleType>({
  showApartment: false,
  toggleShowApartment: ()=>{},
});

export const useApartmentToggle = () => useContext(ApartmentToggleContext);

const ApartmentToggleProvider = ({ children }: { children: ReactNode }) => {
  const [showApartment, toggleShowApartment] = useState(true);

  return (
    <ApartmentToggleContext.Provider value={{ showApartment, toggleShowApartment }}>
      {children}
    </ApartmentToggleContext.Provider>
  );
};

export default ApartmentToggleProvider;
