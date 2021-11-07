import "./Main.css";
import Data from "../../data/data.json";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Main() {

    return (
        <div>
            <h1 className="groupTitle">Group Tour</h1>
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
                <Footer />
            </div>
        </div>
    );
}

export default Main;