import React from "react";
import ReactDOM from "react-dom";
import { Link,BrowserRouter,Routes,Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
// import Pet from "./Pet";


const App = () => {
  return(
    <BrowserRouter>
      <header><Link to="/">Adopt Me!</Link></header>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="Pepper" animal="bird" breed="Cockatile"/>
      <Pet name="Doink" animal="cat" breed="Mixed"/> */}
      <Routes>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/" element={<SearchParams/>}/>
      </Routes>
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);
