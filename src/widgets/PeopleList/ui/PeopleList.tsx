import styles from "./PeopleList.module.scss";
import { IPeople } from "../../../SWApi";
import PersonCard from "../../../features/PersonCard";
import { ReactNode } from "react";

interface IPeopleListProps {
  people: IPeople[];
  children: ReactNode;
}

const PeopleList = ({ people, children }: IPeopleListProps) => {
  if (people.length <= 0) {
    return <div>no items found...</div>;
  }

  return (
    <main className={styles.main}>
      <aside className={styles.peopleList}>
        {people.map((p: IPeople) => (
          <PersonCard person={p} key={p.url} />
        ))}
      </aside>
      <div>{children}</div>
    </main>
  );
};

export default PeopleList;
