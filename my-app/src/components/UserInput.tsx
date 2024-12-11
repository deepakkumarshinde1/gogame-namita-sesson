import React, { useState } from "react";

interface User {
  username: string;
  userEmail: string;
}

const App: React.FC = () => {
  let [userForm, setUserForm] = useState<User>({
    username: "",
    userEmail: "",
  });

  let [userList, setUserList] = useState<User[]>([]);
  let inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };
  let saveUserDetails = () => {
    // let _userList:User[] = userList;
    // _userList.push({...userForm});
    // setUserList(_userList);
    setUserList([...userList, { ...userForm }]);
  };
  return (
    <>
      <input
        onChange={inputChange}
        value={userForm.username}
        type="text"
        placeholder="Enter Username"
        name="username"
      />
      <input
        onChange={inputChange}
        value={userForm.userEmail}
        type="text"
        placeholder="Enter Email"
        name="userEmail"
      />
      <button onClick={saveUserDetails}>Save</button>

      <ul>
        {userList.map((value: User, index: number) => {
          return (
            <li key={index}>
              {value.username} has {value.userEmail}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
