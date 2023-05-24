import { useEffect, useState } from "react";

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

function App() {
  const [sub, setSub] = useState<Sub[]>([]);

  useEffect(() => {
    setSub(INITIAL_STATE);
  }, []);

  return (
    <>
      <h1>Facu subs</h1>
      <ul>
        {sub.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt="sub image" />
              <h4>
                {sub.nick} (<small>{sub.subMonth}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
