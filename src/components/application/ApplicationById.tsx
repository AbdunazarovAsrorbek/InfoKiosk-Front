import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  sendApplicationList as onSendApplicationList,
} from "../../store/application/thunk";
import {
  getRectorateByIdList as onGetRectorateByIdList
} from "../../store/thunk";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Breadcrumb } from "antd";
import "../../sass/style.scss";
import { toast } from "react-toastify";

export default function ApplicationById() {
  const { id } = useParams();
  const dispatch = useDispatch<any>();

  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const rectorateById =  useSelector((state: any) => state.Rectorate.rectorateById);
console.log(rectorateById)
  useEffect(() => {
    if (id) {
      dispatch(onGetRectorateByIdList(Number(id)));
    }
  }, [dispatch, id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !id) {
      alert("Iltimos barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const data = {
      fullName,
      description,
      phoneNumber,
      rektorQabulId: Number(id), // id ni to‘g‘ridan-to‘g‘ri yuboryapmiz
    };

    dispatch(onSendApplicationList(data))
      .unwrap()
      .then(() => {
        toast("Arizangiz muvaffaqiyatli yuborildi!");
        setFullName("");
        setDescription("");
        setPhoneNumber("");
      })
      .catch((err: any) => {
        console.error(err);
        alert("Xatolik yuz berdi!");
      });
  };

  return (
    <div className="rateDepartment">
      <Navbar />

      <div className="container" style={{ paddingTop: "30px" }}>
        <Breadcrumb
          items={[
            { title: <Link to="/">Bosh sahifa</Link> },
            { title: "Qabulga yozilish" },
          ]}
        />

        <main className="rateDepartment-main">
          <form className="application-form" onSubmit={handleSubmit}>
            <h3>Qabulga yozilish</h3>

            {/* Avvalgi select o‘rniga tanlangan rektor nomini chiqaramiz */}
            {rectorateById && (
              <p>
                <strong>Qabul qiluvchi:</strong> {rectorateById.name}
              </p>
            )}

            <input
              type="text"
              placeholder="F.I.O"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              type="text"
              placeholder="+998 90 123 45 67"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <textarea
              placeholder="Izoh (ixtiyoriy)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Yuborish</button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}
