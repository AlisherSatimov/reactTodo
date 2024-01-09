import { Outlet } from "react-router-dom";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Aside />
            <div className="container py-3">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
