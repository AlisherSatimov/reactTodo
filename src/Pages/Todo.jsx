import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({
            type: "DELETE_TODO",
            payload: todo.id,
        });
    };

    const handleSuccess = () => {
        dispatch({
            type: "SUCCESS_TODO",
            payload: todo.id,
        });
    };

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{todo.title}</span>
            <div className="actions d-flex gap-3">
                <button className="btn btn-info" onClick={handleSuccess}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    <i className="fa-solid fa-times"></i>
                </button>
            </div>
        </li>
    );
};

const TodoApp = () => {
    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todo);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;

        if (!title) return alert("Input is required!");

        dispatch({
            type: "ADD_TODO",
            payload: {
                id: crypto.randomUUID(),
                title,
                isCompleted: false,
            },
        });

        e.target.reset();
    };

    return (
        <>
            <h1 className="text-center">Todo App</h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex gap-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Write a todo..."
                    />
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
            <ul className="list-group my-3">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
};

export default TodoApp;
