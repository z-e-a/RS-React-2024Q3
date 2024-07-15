import styles from "./PersonCard.module.scss";
import { IPeople } from "../../../SWApi";

interface IPersonCardProps {
  person: IPeople;
}

const PersonCard = ({ person }: IPersonCardProps) => {
  return (
    <article className={styles.card}>
      <h3>
        <span>Name: </span>
        <span>{person.name}</span>
      </h3>
      <p>
        <span>Year of birth: </span>
        <span>{person.birth_year}</span>
      </p>
      <p>
        <span>Eye color: </span>
        <span>{person.eye_color}</span>
      </p>
    </article>
  );
};

export default PersonCard;
