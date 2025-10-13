import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { people } from "../../data/peopleDatas";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../../sass/style.scss"
import { getRectorateByIdList as onGetRectorateByIdList } from "../../store/thunk";

export default function PersonDetails() {
  const { id } = useParams();
  const dispatch = useDispatch<any>();
  const rectorateById = useSelector((state: any) => state.Rectorate.rectorateById);
  const htmlFromApi: string | null = rectorateById?.content ?? "";

  useEffect(() => {
    if (id) {
      dispatch(onGetRectorateByIdList(Number(id)));
    }
  }, [dispatch, id]);

  if (!rectorateById) return <h2 className="peopleData__notFound">Ma’lumot topilmadi</h2>;
  return (
    <div className="peopleData">
      <Navbar />
      <div className="container">
        <div className="peopleData__content">
          <img
            src={
              rectorateById?.imgBase64
                ? `data:image/${rectorateById.imgBase64.startsWith("iVBORw0KGgo") ? "png" : "jpeg"};base64,${rectorateById.imgBase64}`
                : "/images/fallback.png"
            }
            alt={rectorateById?.name || "Not found"}
          />
          <h1>{rectorateById.name}</h1>
          <h1>{rectorateById.position}</h1>
          <h3>{rectorateById.shortInfo}</h3>
          <h3>
            <div dangerouslySetInnerHTML={{ __html: htmlFromApi || "" }} />
          </h3>
          {/* <p>{rectorateById.description}</p> */}

          {/* {person.tasks && (
            <ul>
              {person.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          )} */}

        </div>
      </div>
      <Footer />
    </div >
  );
}
