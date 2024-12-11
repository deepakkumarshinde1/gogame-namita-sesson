import UserList from "./components/List";
import Users from "./components/Users";
import { UserContextProvider } from "./context/user.context";

const App: React.FC = () => {
  return (
    <>
      <UserContextProvider>
        <Users />
        <UserList />
      </UserContextProvider>
    </>
  );
};

export default App;
