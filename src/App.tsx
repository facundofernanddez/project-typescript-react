import { useState } from "react";

function App() {
  const [sub, setSub] = useState([
    {
      nick: "dapelu",
      subMonth: 3,
      avatar: "https://i.pravatar.cc/150?u=dapelu",
      descripcion: "dapelu hace de moderador a veces",
    },
    {
      nick: "juan",
      subMonth: 2,
      avatar: "https://i.pravatar.cc/150?u=juan",
    },
  ]);

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
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
