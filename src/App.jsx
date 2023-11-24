import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Posts />
      </div>
    </UserProvider>
  );
};

export default App;
