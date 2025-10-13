import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  sendApplicationList as onSendApplicationList,
  getRektorQabulList as onGetRektorQabulList,
} from "../../store/application/thunk";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Breadcrumb } from "antd";
import "../../sass/style.scss";
import { toast } from "react-toastify";

export default function ApplicationOrg() {
  const dispatch = useDispatch<any>();

  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rektorQabulId, setRektorQabulId] = useState<number | null>(null);

  const rektorQabulList = useSelector(
    (state: any) => state.Application?.rektorQabulList || []
  );

  useEffect(() => {
    dispatch(onGetRektorQabulList());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !rektorQabulId) {
      alert("Iltimos barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const data = {
      fullName,
      description,
      phoneNumber,
      rektorQabulId,
    };

    dispatch(onSendApplicationList(data))
      .unwrap()
      .then(() => {
        toast("Arizangiz muvaffaqiyatli yuborildi!");
        setFullName("");
        setDescription("");
        setPhoneNumber("");
        setRektorQabulId(null);
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

            {/* Rektor qabul select */}
            <select
              value={rektorQabulId ?? ""}
              onChange={(e) => setRektorQabulId(Number(e.target.value))}
            >
              <option value="" disabled>
                Rektor qabulini tanlang
              </option>
              {rektorQabulList?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <button type="submit">Yuborish</button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}
