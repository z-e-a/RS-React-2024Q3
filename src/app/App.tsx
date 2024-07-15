import { useCallback, useEffect, useState } from "react";

// import styles from "./App.module.scss";
import { IPeople } from "../SWApi";
import Header from "../widgets/Header";
import PeopleList from "../widgets/PeopleList";
import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [searchText, setSearchText] = useLocalStorage("searchText", "");

  const [people, setPeople] = useState<IPeople[]>([]);

  const search = useCallback(
    (text: string) => {
      const trimmedText = text.trim();
      setSearchText(trimmedText);
      fetch(`${import.meta.env.VITE_API_URL}?search=${trimmedText}`)
        .then((response) => response.json())
        .then((data) => {
          setPeople(data.results);
        })
        .catch((error) => console.log(error));
    },
    [setSearchText],
  );

  useEffect(() => {
    search(searchText);
  }, []);

  return (
    <>
      <Header searchText={searchText} searchCallback={search}></Header>
      <PeopleList people={people}></PeopleList>
    </>
  );
};

export default App;
