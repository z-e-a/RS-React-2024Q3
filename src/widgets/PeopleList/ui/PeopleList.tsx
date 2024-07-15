import styles from "./PeopleList.module.scss";
import { IPeople } from "../../../SWApi";
import PersonCard from "../../../features/PersonCard";

interface IPeopleListProps {
  people: IPeople[];
}

const PeopleList = ({ people }: IPeopleListProps) => {
  if (people.length <= 0) {
    return <div>no items found...</div>;
  }

  return (
    <main className={styles.main}>
      {people.map((p: IPeople) => (
        <PersonCard person={p} key={p.url} />
      ))}
    </main>
  );
};

export default PeopleList;
