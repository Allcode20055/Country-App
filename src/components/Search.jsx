import React, { useEffect, useState } from "react";

import style from "./search.module.css";

const Search = ({ onHandelSearchTodo }) => {
  const [searchText, setSearchText] = useState("");

  const handelSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    onHandelSearchTodo(searchText);
  }, [searchText]);

  return (
    <div className={style["search-control"]}>
      <input
        type="text"
        name="text"
        placeholder="Search Countrys"
        onChange={handelSearch}
        className={style["search-input"]}
      />
    </div>
  );
};

export default Search;
