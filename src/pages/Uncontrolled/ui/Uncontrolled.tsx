import {
  Link,
} from "react-router-dom";

const Uncontrolled = () => {

  return (
    <>
      <h2>Uncontrolled</h2>
      <Link to="/">to main</Link>
      <Link to="/Controlled">to controlled</Link>
    </>
  );
};

export default Uncontrolled;
