import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { getDepartmentById as OnGetDepartmentById } from "../../store/faculty/thunk";
import { postRateMobile as onPostRateMopostRateMobile } from "../../store/rate/thunk";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
import "../../sass/style.scss"

export default function MobileRateDepartment() {
    const { id } = useParams();
    const dispatch = useDispatch<any>();
    const { departmentDetail } = useSelector((state: any) => state.Faculty);

    const [userRating, setUserRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    useEffect(() => {
        if (id) {
            dispatch(OnGetDepartmentById(Number(id)));
        }
    }, [id, dispatch]);

    const handleSubmit = () => {
        if (!userRating) {
            toast.warning("Iltimos, baho bering!", { autoClose: 2000 });
            return;
        }

        const rateDepartmentData = {
            departmentId: Number(id),
            rate: userRating,
            description: description || null,
            phoneNumber: phoneNumber || null,
        };

        dispatch(onPostRateMopostRateMobile(rateDepartmentData))
            .unwrap()
            .then(() => {
                toast.success("Baho muvaffaqiyatli yuborildi!", { autoClose: 2000 });
                setUserRating(0);
                setDescription("");
                setPhoneNumber("");
                dispatch(OnGetDepartmentById(Number(id)));
            })
            .catch(() => {
                toast.error("Xatolik yuz berdi. Qaytadan urinib ko‘ring!", { autoClose: 2000 });
            });
    };


    return (
        <div className="rateDepartment">
            <Navbar />

            <main className="rateDepartment-main">
                <div className="rateDepartment-card">
                    <div className="dept-info">
                        <h1>{departmentDetail?.facultyName || "Fakultet nomi"}</h1>
                        <h3>{departmentDetail?.name || "Kafedra/bo‘lim nomi"}</h3>
                        <p>
                            Kiberxavfsizlik fakulteti sifatidagi vazifamiz kiberxavfsizlik bo‘yicha
                            mutaxassislarning keyingi avlodiga raqamli aktivlarni himoya qilish va
                            paydo bo‘layotgan kibertahdidlardan himoya qilish uchun zarur bo‘lgan bilim,
                            ko‘nikma va malaka bilan ta’minlashdan iborat.
                        </p>
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
            </main>

            <Footer />
        </div>
    );
}
