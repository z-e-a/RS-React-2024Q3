import {
  Link,
} from "react-router-dom";

const Controlled = () => {

  return (
    <>
      <h2>Controlled</h2>
      <Link to="/">to main</Link>
      <Link to="/uncontrolled">to uncontrolled</Link>
    </>
  );
};

export default Controlled;
