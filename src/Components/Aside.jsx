import { useDispatch, useSelector } from "react-redux";

const Aside = () => {
  const show = useSelector((store) => store.settings.showSidebar);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <aside
    id="main-sidebar"
      className={`position-fixed top-0 start-0 bottom-0 bg-info p-3 text-end ${
        show ? "show" : ""
      }`}
    >
      <button className="btn btn-primary" onClick={toggleSidebar}>
        <i className="fa-solid fa-times"></i>
      </button>
    </aside>
  );
};

export default Aside;
