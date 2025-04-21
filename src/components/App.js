import React, { useState } from "react";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  function handleModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
