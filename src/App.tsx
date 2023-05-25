import { useEffect, useState } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";

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

interface Sub {
  nick: string;
  avatar: string;
  subMonth: number;
  description?: string;
}

interface AppState {
  subs: Sub[];
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <>
      <h1>Facu subs</h1>
      <List subs={subs} />
      <Form />
    </>
  );
}

export default App;
