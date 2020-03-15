import React, { useEffect } from "react";
import { useQueryState } from "./useQueryState";

export const HomePage = () => {
  const initData = { name: "ashu", age: 30 };
  const [pageState, setPageState] = useQueryState(initData);

  useEffect(() => {
    console.log(pageState.name, pageState.age);
  }, [pageState]);

  return (
    <>
      <h2>Home Page!</h2>
      <input
        value={pageState.name || ""}
        onChange={event => setPageState({ name: event.target.value })}
      />
    </>
  );
};

export default HomePage;
