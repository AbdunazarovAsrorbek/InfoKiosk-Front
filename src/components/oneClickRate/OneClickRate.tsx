import { useDispatch, useSelector } from "react-redux";
import { getFacultyList as onGetFacultyList } from "../../store/faculty/thunk";
import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import "../../sass/style.scss";
import { useNavigate, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export default function OneClickRate() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const facultyList = useSelector(
        (state: any) => state.Faculty.facultyList || {}
    );
    console.log(facultyList)
    useEffect(() => {
        dispatch(onGetFacultyList());
    }, [dispatch]);

    return (
        <div className="oneClickRate">
            <div className="container">

                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/">Bosh sahifa</Link>,
                        },
                        {
                            title: "Tuzilma",
                        },
                    ]}
                />


                <div className="oneClickRate__content">
                    {/* Fakultetlar */}
                    <div className="oneClickRate__row">
                        {facultyList?.facultyRateData?.map((item: any) => (
                            <div className="oneClickRate__col" key={item.id}>
                                <div
                                    className="oneClickRate__card"
                                    onClick={() =>
                                        navigate(`/infoRateDepartment/${item.facultyUniqueId}`, {
                                            state: { faculty: item },
                                        })
                                    }
                                >
                                    <h1>
                                        {item.name}
                                        <span className="oneClickRate__rating">
                                            <Rating
                                                className="rating-stars"
                                                size={22}
                                                initialValue={item.averageRate}  
                                                allowFraction                    
                                                readonly
                                                transition
                                            />
                                        </span>
                                    </h1>
                                    <p>Umumiy ovozlar soni: {item.rateCount}</p>
                                    <p>Umumiy o‘rtacha reyting: {item.averageRate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
