import React, { useEffect, useState } from "react";

const DataFetch = (url) => {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState(data);
  const [isLoding, setIsLoding] = useState(true);
  const [errors, setErrors] = useState(null);

  const onHandelRemoveTodo = (name) => {
    setData(data.filter((removeData) => removeData.name.common !== name));
  };

  const onHandelSearchTodo = (searchText) => {
    const value = searchText.toLowerCase();
    const searchNewCountry = data.filter((newData) =>
      newData.name.common.toLowerCase().startsWith(value)
    );
    setCopyData(searchNewCountry);
  };

  const fethingData = async (url) => {
    try {
      const responseData = await fetch(url);
      const response = await responseData.json();

      setData(response);
      setCopyData(response);
      setIsLoding(false);
      setErrors(null);
    } catch (error) {
      setErrors(error);
      setIsLoding(false);
    }
  };

  useEffect(() => {
    fethingData(url);
  }, []);

  return { copyData, isLoding, errors, onHandelRemoveTodo, onHandelSearchTodo };
};

export default DataFetch;
