import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Error 404! Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
