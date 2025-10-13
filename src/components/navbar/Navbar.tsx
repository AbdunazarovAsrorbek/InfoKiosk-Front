import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AiFillHome, AiOutlineStar } from "react-icons/ai"
import { HiOutlineGlobeAlt } from "react-icons/hi2"
import { HiOutlineMenu, HiOutlineX, HiOutlineClipboardList } from "react-icons/hi"
import logo from "../../assets/img/logo.png"
import "../../sass/style.scss"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__content-left">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <p>
                                Muhammad al-Xorazmiy nomidagi Toshkent Axborot
                                Texnologiyalar Universiteti
                            </p>
                        </Link>
                    </div>

                    <div className={`navbar__content-right ${isOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <HiOutlineClipboardList className="icon" />
                                <NavLink to="/applicationOrg">Qabulga yozilish</NavLink>
                            </li>
                            <li>
                                <HiOutlineGlobeAlt className="icon" />
                                <NavLink to="/tuit">tuit.uz</NavLink>
                            </li>
                            <li>
                                <AiOutlineStar className="icon" />
                                <NavLink to="/ratePage">baholash</NavLink>
                            </li>
                            <li>
                                <AiFillHome className="icon" />
                                <NavLink to="/">bosh sahifa</NavLink>
                            </li>
                        </ul>
                    </div>

                    <button
                        className="navbar__toggle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>
        </div>
    )
}
