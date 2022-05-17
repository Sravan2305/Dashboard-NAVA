import React from "react";
import { DataContext } from "./App";

export const Card = ({ parentId, id, title, desc }) => {
  const { setData } = React.useContext(DataContext);
  const deleteList = () => {
    setData((prev) => {
      return prev.map((list) => {
        if (list.id === parentId) {
          list.data = list.data.filter((card) => card.id !== id);
        }
        return list;
      });
    });
  };
  return (
    <div className="card">
      <div className="list-header">
        <h3 className="list-heading">{title}</h3>
        <button onClick={deleteList} className="delete delete-card">
          X
        </button>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
};
