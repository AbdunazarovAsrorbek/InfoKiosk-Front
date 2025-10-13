import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react";

export default function TuitPage() {
    const navigate = useNavigate()

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <button
                onClick={() => navigate(-1)}
                style={{
                    position: "absolute",
                    top: "30px",
                    right: "40px",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#182B49",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",

                }}
            >
                <ChevronLeft size={25} />
            </button>

            <iframe
                src="https://tuit.uz"
                title="tuit"
                style={{ flex: 1, border: "none" }}
            />
        </div>
    )
}
