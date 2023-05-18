import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import CV from "./components/CV.jsx";
import "./app.css";

function App() {
  return (
    <main className="App">
      <body>
        <Header />
        <MainPage />
      </body>
    </main>
  );
}

export default App;
