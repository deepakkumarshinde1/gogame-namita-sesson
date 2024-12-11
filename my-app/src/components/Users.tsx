import { useUserContext } from "../context/user.context";

const Users: React.FC = () => {
  let { username, inputChange, saveDetails } = useUserContext();
  return (
    <>
      <input value={username} type="text" onChange={inputChange} />
      <button onClick={saveDetails}>Save</button>
    </>
  );
};

export default Users;
