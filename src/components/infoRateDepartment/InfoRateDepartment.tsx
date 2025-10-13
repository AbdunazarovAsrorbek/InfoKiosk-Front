import { useLocation, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import "../../sass/style.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getDepartmentList as onGetDepartmentList } from "../../store/faculty/thunk";
import { Breadcrumb } from "antd";
// import { ChevronLeft } from "lucide-react";

export default function InfoRateDepartment() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const faculty = location.state?.faculty;
    console.log(faculty)
    const departmentList = useSelector(
        (state: any) => state.Faculty?.departmentList || {}
    );
    console.log(departmentList)

    useEffect(() => {
        if (faculty?.id) {
            dispatch(onGetDepartmentList({ facultyId: faculty.id }));
        }
    }, [dispatch, faculty]);

    if (!faculty) {
        return (
            <div className="container">
                <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                    Fakultet ma’lumoti topilmadi
                </h2>
                {/* <button onClick={() => navigate(-1)} className="oneClickRate__back-button">
                    <ChevronLeft size={18} />
                </button> */}
            </div>
        );
    }

    return (
        <div className="infoRateDepartment">
            <Navbar />

            {/* asosiy content */}
            <div className="infoRateDepartment-main container">
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/">Bosh sahifa</Link>,
                        },
                        {
                            title: <Link to="/ratePage">Tuzilma</Link>,
                        },
                        {
                            title: faculty.name,
                        },
                    ]}
                />



                <div className="oneClickRate__content">
                    <div className="oneClickRate__row" style={{ marginTop: "30px" }}>
                        <div className="oneClickRate__col">
                            <div className="oneClickRate__card">
                                <h1>
                                    {faculty.name}
                                    <span style={{ marginLeft: "12px" }}>
                                        <Rating size={20} initialValue={faculty.averageRate} allowFraction readonly transition />
                                    </span>
                                </h1>
                                <p>Umumiy ovozlar soni: {faculty.rateCount}</p>
                                <p>Umumiy o‘rtacha reyting: {faculty.averageRate}</p>

                                {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <p>Umumiy o‘rtacha reyting: {faculty.averageRate}</p>

                                    <button
                                        onClick={() =>
                                            navigate(`/rateFacultyPage/${faculty.facultyUniqueId}`, {
                                                state: { faculty },
                                            })
                                        }
                                        className="oneClickRate__card-main-btn"
                                    >
                                        Baholash
                                    </button>
                                </div> */}
                            </div>
                            {/* <button onClick={() => navigate(-1)} className="oneClickRate__back-button">
                                <ChevronLeft size={18} />
                            </button> */}
                        </div>

                    </div>

                    <div className="oneClickRate__row-main" style={{ marginTop: "30px" }}>
                        {!departmentList?.departmentRates?.length ? (
                            <p style={{ fontSize: "26px", textAlign: "center" }}>
                                Bo‘limlar topilmadi
                            </p>
                        ) : (
                            departmentList.departmentRates.map(
                                (dep: any, i: number) => (
                                    <div className="oneClickRate__col-main" key={i}>
                                        <div className="oneClickRate__card-main">
                                            <h1>
                                                {dep.name}
                                                <span style={{ marginLeft: "12px" }}>
                                                    <Rating
                                                        size={20}
                                                        initialValue={dep.averageRate}
                                                        allowFraction
                                                        readonly
                                                        transition
                                                    />
                                                </span>
                                            </h1>
                                            <p>Ovozlar soni: {dep.rateCount}</p>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                <p>O‘rtacha reyting: {dep.averageRate}</p>
                                                <div className="oneClickRate__card-main-div">
                                                    <button
                                                        onClick={() =>
                                                            navigate(`/detailsPage/${dep.departmentUniqueId}`, {
                                                                state: { department: dep, faculty },
                                                            })
                                                        }
                                                        className="oneClickRate__card-main-btn"
                                                    >
                                                        Batafsil
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            navigate(`/rateDepartmentPage/${dep.departmentUniqueId}`, {
                                                                state: { department: dep, faculty },
                                                            })
                                                        }
                                                        className="oneClickRate__card-main-btn"
                                                    >
                                                        Baholash
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )))}
                    </div>
                </div>
            </div>

            {/* footer doim pastda turadi */}
            <Footer />
        </div>
    );
}

