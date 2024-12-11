// context

import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserContextInterface {
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  saveDetails: () => void;
  userList: string[];
}
interface ContextProviderProp {
  children: ReactNode;
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

// provider
export const UserContextProvider: React.FC<ContextProviderProp> = ({
  children,
}) => {
  let [username, setUserName] = useState<string>("");

  let [userList, setUserList] = useState<string[]>([]);

  let inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  let saveDetails = () => {
    let _userList: string[] = [...userList];
    _userList.push(username);
    setUserName("");
    setUserList(_userList);
  };
  let values = {
    username,
    inputChange,
    saveDetails,
    userList,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
// custom hook (get all shared data)
export const useUserContext = (): UserContextInterface => {
  let context = useContext(UserContext);
  if (!context) {
    throw new Error("Context Is Missing");
  }
  return context;
};
