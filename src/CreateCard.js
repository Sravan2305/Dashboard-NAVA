import React from "react";
import { DataContext } from "./App";

export const CreateCard = ({ id, show, setShow }) => {
  const [val, setVal] = React.useState({ tile: "", desc: "" });
  const { setData } = React.useContext(DataContext);
  const clickHandler = () => {
    if (!show || val.title.length === 0) {
      setShow(!show);
      return;
    }
    setData((prev) => {
      return prev.map((list) => {
        if (list.id !== id) return list;
        list.data.push({
          id: Date.now(),
          title: val.title,
          desc: val.desc,
        });
        return list;
      });
    });
    setShow(false);
  };
  return (
    <div className="add-card rounded-5">
      {show && (
        <>
          <input
            className="create-card__input rounded-5"
            type="text"
            value={val.title}
            onChange={(e) => setVal({ ...val, title: e.target.value })}
            placeholder="Enter title..."
          />
          <input
            className="create-card__input rounded-5"
            type="text"
            value={val.desc}
            onChange={(e) => setVal({ ...val, desc: e.target.value })}
            placeholder="Enter text for this card..."
          />
        </>
      )}
      <button onClick={clickHandler} className="rounded-5 add-list">
        Add Card
      </button>
    </div>
  );
};
