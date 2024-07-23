import styles from "./Flyout.module.scss";
import { useDispatch } from "react-redux";
import { RootStateType, useAppSelector } from "../../../app/store";
import {
  IPeopleViewState,
  unselectAllPeople,
} from "../../../entities/people/model/peopleViewSlice";
import Button from "../../../shared/Button";

const Flyout = () => {
  const dispatch = useDispatch();

  const { selectedPeople }: IPeopleViewState = useAppSelector<
    RootStateType,
    IPeopleViewState
  >((store): IPeopleViewState => store.peopleView);

  return (
    <div
      className={`${styles.wrapper} ${selectedPeople.length > 0 ? styles.visible : ""}`}
    >
      <span>{`${selectedPeople.length} items selected`}</span>
      <Button
        text={"Unselect all"}
        callback={() => dispatch(unselectAllPeople())}
      />
      <Button text={"Download"} />
    </div>
  );
};

export default Flyout;
