import React from "react";
import { DataContext } from "./App";

export const CreateLists = ({ show, setShow }) => {
  const [val, setVal] = React.useState("");
  const { setData } = React.useContext(DataContext);
  const clickHandler = () => {
    if (!show || !val.length) {
      setShow(!show);
      return;
    }
    setData((prev) => [...prev, { id: Date.now(), name: val, data: [] }]);
    setShow(false);
  };
  return (
    <div className="create-card rounded-5">
      {show && (
        <input
          className="create-card__input rounded-5"
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Enter a list title..."
        />
      )}
      <button onClick={clickHandler} className="rounded-5 add-list">
        Add List
      </button>
    </div>
  );
};
