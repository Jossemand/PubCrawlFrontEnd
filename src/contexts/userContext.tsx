import React, { createContext, useState, ReactNode, useContext } from "react";

interface UserContextProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
