import React from "react";
import { CreateLists } from "./CreateLists";
import { Header } from "./Header";
import { List } from "./List";

export const DataContext = React.createContext(null);
export const App = () => {
  const [data, setData] = React.useState([]);
  const [addList, setAddList] = React.useState(false);
  const Lists = data.map((list) => {
    return <List key={list.id} {...list} />;
  });
  Lists.push(<CreateLists show={addList} setShow={setAddList} />);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Header />
      <section className="lists">{Lists}</section>
    </DataContext.Provider>
  );
};
