// contexts/DogContext.js
import { createContext, useState, useContext } from "react";

const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <DogContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </DogContext.Provider>
  );
};

export const useDogContext = () => useContext(DogContext);
