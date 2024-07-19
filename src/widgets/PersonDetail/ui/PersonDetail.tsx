import styles from "./PersonDetail.module.scss";
import { IPeople } from "../../../SWApi";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../app/Contexts";

const PeopleDetail = () => {
  const theme = useContext(ThemeContext);
  const person: IPeople = useLoaderData() as IPeople;
  const [searchParams] = useSearchParams();

  const redusedSearchParams: URLSearchParams = new URLSearchParams();
  searchParams.forEach((v, k) => {
    if (k !== "name" && k !== "id") {
      redusedSearchParams.set(k, v);
    }
  });
  const backUrl = new URL(
    `search?${redusedSearchParams.toString()}`,
    window.location.origin,
  );

  return (
    <div
      className={[
        styles.detailContainer,
        theme == "light" ? styles.light : "",
      ].join(" ")}
    >
      <h2 className={styles.detailCaption}>{person.name}</h2>
      <ul>
        {Object.keys(person).map((k) => {
          return (
            <li className={styles.detailEntry} key={k}>
              <span className={styles.fieldName}>{k}: </span>
              <span>{(person as unknown as Record<string, string>)[k]}</span>
            </li>
          );
        })}
        <Link
          to={backUrl.toString()}
          className={styles.closeBtn}
          title="close"
        ></Link>
      </ul>
    </div>
  );
};

export default PeopleDetail;
