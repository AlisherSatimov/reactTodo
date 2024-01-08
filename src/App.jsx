import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/Main";
import TodoApp from "./Pages/Todo";

function App() {
  // const [count, setCount] = useState(0);
  // const settings = useMemo(
  //   () => JSON.parse(localStorage.getItem("settings") || "{}"),
  //   []
  // );

  // const changeSettings = useCallback(() => {
  //   // localStorage.setItem("settings", {})
  // }, []);

  // useEffect(() => {
  //   console.log(settings);
  //   changeSettings();
  //   return () => {};
  // }, [settings, changeSettings]);

  return (
    <>
      <Routes>
        <Route path="/main" element={<MainLayout />}>
          <Route path="/main" element={<h1>Home</h1>} />
          <Route path="/main/users" element={<h1>Users</h1>} />
          <Route path="/main/products" element={<h1>Products</h1>} />
          <Route path="/main/todo" element={<TodoApp />} />
          <Route
            path="*"
            element={
              <h1>
                NOT FOUND from layout <Link to="/main">Back to main</Link>
              </h1>
            }
          />
        </Route>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Sign up</h1>} />
        <Route
          path="*"
          element={
            <h1>
              NOT FOUND <Link to="/main">Back to main</Link>
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
