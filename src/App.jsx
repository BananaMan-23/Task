import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import FormList from "./Components/FormList/FormList";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FormList />
    </div>
  );
}

export default App;
