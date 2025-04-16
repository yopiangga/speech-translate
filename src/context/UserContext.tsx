import { createContext, useState } from "react";
import { User } from "../types/init";
import React from "react";
import Cookies from "js-cookie";

interface UserContextType {
  initUser: (user: User) => void;
  editUser: (updatedUser: User) => void;
  logout: () => void;
  user: User;
}

export const UserContext = createContext<UserContextType>({
  initUser: (user: User) => {},
  editUser: (updatedUser: User) => {},
  logout: () => {},
  user: { name: "", email: "", userRole: "" } as User,
});

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}): React.ReactElement => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    userRole: "",
  } as User);

  const initUser = (user: User) => {
    setUser(user);
  };

  const editUser = (updatedUser: User) => {
    setUser({ ...updatedUser });
  };

  const logout = () => {
    Cookies.remove("token");
    editUser({ name: "", email: "", userRole: "" });
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ initUser, editUser, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
