import { useState } from "react";
import "./App.css";
import Nav from "./Components/Layouts/Nav.jsx";
import Search from "./Components/Users/Search";
import Users from "./Components/Users/Users";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((res) => console.log(res.data));
  // }, []);

  const searchUsers = async (search) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  return (
    <div className='App'>
      <Nav />
      <div className='main-layout'>
        <Search searchUsers={searchUsers} />
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;
