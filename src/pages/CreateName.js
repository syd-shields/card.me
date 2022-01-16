import { useNavigate } from "react-router";
import Nav from "../compontents/Nav";
import "./styles/pages.css";

function CreateName() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Nav />
      <div className="create-name">
        <div className="add-username">
          <h2>Add Your Username</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              navigate("/create-card");
            }}
          >
            <input type="text" placeholder="username"></input>
            <button type="submit">Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateName;
