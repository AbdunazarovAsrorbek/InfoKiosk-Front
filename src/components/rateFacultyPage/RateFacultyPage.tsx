import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import {
  getFacultyListByIdUnik as OnGetFacultyListByIdUnik,
} from "../../store/faculty/thunk";
import { postRateService as onPostRateService } from "../../store/rate/thunk";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
// import { ChevronLeft } from "lucide-react";
import { Breadcrumb } from "antd";
import "../../sass/style.scss"

export default function rateFacultyPage() {
  const { uniqueId } = useParams();
  const dispatch = useDispatch<any>();
  const location = useLocation();
  const { faculty } = location.state || {};
  console.log(faculty)
  // const navigate = useNavigate();

  const facultyDetail = useSelector((state: any) => state.Faculty.facultyDetail);
  console.log(facultyDetail)
  const [userRating, setUserRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (uniqueId) {
      dispatch(OnGetFacultyListByIdUnik(uniqueId));
    }
  }, [uniqueId, dispatch]);

  const handleSubmit = () => {
    if (!userRating) {
      toast.warning("Iltimos, baho bering!", { autoClose: 2000 });
      return;
    }

    const rateFacultyData = {
      facultyAndCenterId: facultyDetail?.id,
      departmentId: null,
      rate: userRating,
      description: description || null,
      phoneNumber: phoneNumber || null,
    };

    dispatch(onPostRateService(rateFacultyData))
      .unwrap()
      .then(() => {
        toast.success("Baho muvaffaqiyatli yuborildi!", { autoClose: 2000 });
        setUserRating(0);
        setDescription("");
        setPhoneNumber("");
        dispatch(OnGetFacultyListByIdUnik(uniqueId));
      })
      .catch(() => {
        toast.error("Xatolik yuz berdi. Qaytadan urinib ko‘ring!", { autoClose: 2000 });
      });
  };


  return (
    <div className="rateDepartment">
      <Navbar />

      <div className="container">
        <div className="rateDepartment__content">
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
                    Kafedralar va Bo'limlar
                  </Link>
                ),
              },
              {
                title: "Baholash",
              },
            ]}
          />
          <main className="rateDepartment-main">

            <div className="rateDepartment-card">
              <div className="dept-info">
                <h1>{faculty?.name || "Fakultet nomi"}</h1>
              </div>

              <div className="why-rateDepartment">
                <h4>Nega baho berish kerak?</h4>
                <p>
                  Sizning fikringiz orqali fakultet xizmatlari yanada yaxshilanadi.
                  Har bir baho kelajakdagi talabalarga yordam beradi va sifatni oshirishga hissa qo‘shadi.
                </p>
              </div>

              <div className="rateDepartment-form">
                <h2>Baho berish</h2>
                <Rating
                  size={30}
                  allowFraction={false}
                  fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
                  transition
                  onClick={(rate: number) => setUserRating(rate)}
                  initialValue={userRating}
                />

                <input
                  type="tel"
                  placeholder="Telefon raqamingiz (ixtiyoriy)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <textarea
                  placeholder="Izoh (ixtiyoriy)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />


                <button onClick={handleSubmit}>Yuborish</button>
              </div>
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
