import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <h1>Main page</h1>
      <Link to="/uncontrolled">to uncontrolled</Link>
      <Link to="/controlled">to controlled</Link>
    </>
  );
}

export default App;
