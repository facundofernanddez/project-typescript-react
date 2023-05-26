import { useEffect, useState, useRef } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Sub } from "./types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonth: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "dapelu hace de moderador a veces",
  },
  {
    nick: "juan",
    subMonth: 2,
    avatar: "https://i.pravatar.cc/150?u=juan",
  },
];

interface AppState {
  subs: Sub[];
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Facu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
