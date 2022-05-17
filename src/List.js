import React from "react";
import { DataContext } from "./App";
import { Card } from "./Card";
import { CreateCard } from "./CreateCard";

export const List = ({ id, name, data }) => {
  const { setData } = React.useContext(DataContext);
  const [addList, setAddList] = React.useState(false);

  const deleteList = () => {
    setData((prev) => prev.filter((list) => list.id !== id));
  };
  const cards = data.map((card) => {
    return <Card parentId={id} {...card} />;
  });
  cards.push(<CreateCard show={addList} setShow={setAddList} id={id} />);
  return (
    <section className="list">
      <div className="list-header">
        <h3 className="list-heading">{name}</h3>
        <button onClick={deleteList} className="delete">
          X
        </button>
      </div>
      <div className="list-cards">{cards}</div>
    </section>
  );
};
