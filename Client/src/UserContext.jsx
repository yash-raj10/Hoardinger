import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider valure={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
