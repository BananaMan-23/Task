import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import FormList from "./Components/FormList/FormList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FormList />
      <Footer />
    </div>
  );
}

export default App;
