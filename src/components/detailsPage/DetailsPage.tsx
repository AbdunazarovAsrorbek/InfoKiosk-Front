import { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    //  getDepartmentById as OnGetDepartmentById,
    getDepartmentListByIdUnik as OnGetDepartmentListByIdUnik,
} from "../../store/faculty/thunk";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// import { ChevronLeft } from "lucide-react";
import { Breadcrumb } from "antd";
import "../../sass/style.scss";

export default function DetailsPage() {
    const { uniqueId } = useParams();
    // const navigate = useNavigate();
    const location = useLocation();
    const { faculty } = location.state || {};
    const dispatch = useDispatch<any>();

    console.log(faculty)
    const { departmentDetail } = useSelector((state: any) => state.Faculty);
console.log(departmentDetail)
    useEffect(() => {
        if (uniqueId) {
            dispatch(OnGetDepartmentListByIdUnik(uniqueId));
        }
    }, [uniqueId, dispatch]);

    return (
        <div className="rateDepartment">
            <Navbar />

            <div className="container">
                <div className="rateDepartment__content-main">
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/">Bosh sahifa</Link>,
                            },
                            {
                                title: <Link to="/ratePage">Tuzilma</Link>,
                            },
                            {
                                title: (
                                    <Link
                                        to={`/infoRateDepartment/${faculty.facultyUniqueId}`}
                                        state={{ faculty }}
                                    >
                                         {faculty.name}
                                    </Link>
                                ),
                            },
                            {
                                title: "Batafsil",
                            },
                        ]}
                    />

                    <main className="rateDepartment-main">
                        <div className="rateDepartment-card-main">
                            <div className="dept-info">
                                {/* <h1>{departmentDetail?.facultyName || "Fakultet nomi"}</h1> */}
                                <h3>{departmentDetail?.name || "Kafedra/bo‘lim nomi"}</h3>
                                <p className="short-info">{departmentDetail?.shortInfo}</p>

                            </div>

                                <div
                                    className="dept-content"
                                    dangerouslySetInnerHTML={{ __html: departmentDetail?.content }}
                                />
                         
                        </div>
                        {/* <button onClick={() => navigate(-1)} className="oneClickRate__back-button" style={{ marginTop: "50px" }}>
                        <ChevronLeft size={18} />
                    </button> */}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
