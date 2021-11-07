import { Redirect } from "react-router-dom";
import Data from "../../data/data.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import './IncomeTrip.css'

function Main() {
    const admin = localStorage.getItem("admin_login");
    const newAdmin = JSON.parse(admin);
    const loginState = JSON.parse(localStorage.getItem("user_login"));
    console.log(loginState);

    return (
        <div>
            {newAdmin?.isAdmin ? (
                <div>
                    <Navbar />
                    <div className="containerIncomeTrip">
                        <div className="divTitleIncome">
                            <h1 className="incomeTrip">Income Trip</h1>
                            <Link to="/addtrip">
                                <button className="btn add-btn btn btnWarning text-light fw-bold">
                                    Add Trip
                                </button>
                            </Link>
                        </div>
                        <div className="container-fluid containerGroup mt-5 d-flex gap-3 flex-wrap ">
                            {Data.map((el) => {
                                let path = `assets/${el.image}`;
                                let linkPath = `/detail-trip/${el.id}`;
                                return (
                                    <div className="container contentContainer rounded mt-3">
                                        <Link to={linkPath}>
                                            <img src={path} alt=""></img>
                                        </Link>
                                        <h3>
                                            {el.day}D/{el.night}N {el.destination}
                                        </h3>
                                        <div className="price-container d-flex justify-content-between">
                                            <p>IDR. {el.price}</p>
                                            <small>{el.country}</small>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <Redirect to="/" />
            )
            }
        </div>
    );
}

export default Main;