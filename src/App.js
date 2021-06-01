import { useState } from "react";
import "./App.css";
import Nav from "./Components/Layouts/Nav.jsx";
import Search from "./Components/Users/Search";
import Users from "./Components/Users/Users";

function App() {
  const [users] = useState([
    {
      login: "mojombo",
      id: "1",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    },
    {
      login: "defunkt",
      id: "2",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      html_url: "https://github.com/defunkt",
    },
    {
      login: "Tanish",
      id: "3",
      avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
      html_url: "https://github.com/defunkt",
    },
  ]);
  return (
    <div className='App'>
      <Nav />
      <div className='main-layout'>
        <Search />
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
