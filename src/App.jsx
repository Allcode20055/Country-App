import React from "react";

import DataFetch from "./CoustomHooks/DataFetch";
import Countries from "./components/Countries";
import Search from "./components/Search";
import "./App.css";

function App() {
  // use coustom hooks
  const { copyData, isLoding, errors, onHandelRemoveTodo, onHandelSearchTodo } =
    DataFetch("https://restcountries.com/v3.1/all");

  return (
    <main>
      <h2>Country App</h2>
      <Search onHandelSearchTodo={onHandelSearchTodo} />
      {errors && <h4>{errors.message}</h4>}
      {isLoding && <h4>Lodding ...</h4>}
      <Countries
        countriesData={copyData}
        onHandelRemoveName={onHandelRemoveTodo}
      />
    </main>
  );
}

export default App;
