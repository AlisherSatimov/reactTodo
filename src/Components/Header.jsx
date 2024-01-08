import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <header className="text-bg-primary py-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <button className="btn btn-info" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className="list-unstyled d-flex w-50 justify-content-between align-items-center m-0">
          <li>
            <Link className="text-reset text-decoration-none" to={"/main"}>
              Main home
            </Link>
          </li>
          <li>
            <Link
              className="text-reset text-decoration-none"
              to={"/main/users"}
            >
              Main users
            </Link>
          </li>
          <li>
            <Link
              className="text-reset text-decoration-none"
              to={"/main/products"}
            >
              Main products
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to={"/main/todo"}>
              Main todo <span className="badge bg-info">{todos.length}</span>
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to={"/register"}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
