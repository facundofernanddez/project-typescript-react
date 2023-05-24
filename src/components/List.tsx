interface Props {
  subs: Array<{
    nick: string;
    avatar: string;
    subMonth: number;
    description?: string;
  }>;
}

export const List = ({ subs }: Props) => {
  <ul>
    {subs.map((sub) => {
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
  </ul>;
};
