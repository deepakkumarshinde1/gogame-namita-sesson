import { useUserContext } from "../context/user.context";

const UserList: React.FC = () => {
  let { userList } = useUserContext();
  return (
    <>
      {userList.map((value: string, index: number) => {
        return <li key={index}>{value}</li>;
      })}
    </>
  );
};

export default UserList;
