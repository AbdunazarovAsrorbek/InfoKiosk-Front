import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import RatePage from "../pages/ratePage/RatePage"
import RateFacultyPage from "../components/rateFacultyPage/RateFacultyPage";
import RateDepartmentPage from "../components/rateDepartmentPage/RateDepartmentPage";
import InfoRateDepartment from "../components/infoRateDepartment/InfoRateDepartment";
import TuitPage from "../components/tuitPage/TuitPage";
import { ToastContainer } from "react-toastify";
import DetailsPage from "../components/detailsPage/DetailsPage";
import PeopleData from "../components/peopleData/PeopleData";
import ApplicationOrg from "../components/application/ApplicationOrg";
import ApplicationById from "../components/application/ApplicationById";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tuit" element={<TuitPage />} />
                <Route path="/ratePage" element={<RatePage />} />
                <Route path="/infoRateDepartment" element={<InfoRateDepartment />} />
                <Route path="/infoRateDepartment/:id" element={<InfoRateDepartment />} />
                <Route path="/rateFacultyPage/:uniqueId" element={<RateFacultyPage />} />
                <Route path="/rateDepartmentPage/:uniqueId" element={<RateDepartmentPage />} />
                <Route path="/detailsPage/:uniqueId" element={<DetailsPage />} />
                <Route path="/person/:id" element={<PeopleData />} />


                <Route path="/applicationOrg" element={<ApplicationOrg />} />
                <Route path="/applicationById/:id" element={<ApplicationById />} />


            </Routes>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" autoClose={3000}
                style={{ margin: "90px 30px" }}

            />
        </>
    );
};

export default AppRoutes;