import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const { user, loginUser, logoutUser } = useUser();

  const handleLoginClick = () => {
    if (!user) {
      loginUser();
    } else {
      logoutUser();
    }
  };

  return (
    <header>
      <h1>Мій додаток</h1>
      {!user ? (
        <button onClick={handleLoginClick}>Увійти</button>
      ) : (
        <p>Привіт, {user.username}!</p>
      )}
    </header>
  );
};
export default Header;
