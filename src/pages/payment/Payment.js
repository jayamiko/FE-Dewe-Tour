import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Payment.css";
import Footer from "../../components/Footer/Footer";
import TripCard from "../../components/Trip_Card/TripCard";
import Image from "../../img/ss.png";
import Data from "../../data/data.json";
import ModalComp from "../../components/Items/modal/Modal";

function Payment() {
    const params = useParams();
    const detail = `${Data[params.id - 1]?.day}D/${Data[params.id - 1]?.night}N
  ${Data[params.id - 1]?.destination}`;
    return (
        <div>
            <Navbar />
            <Container fluid className="payment-container mt-5 ">
                <ModalComp />
                <TripCard
                    image={Image}
                    detail={detail}
                    day={Data[params.id - 1]?.day}
                    night={Data[params.id - 1]?.night}
                    title="upload payment proof"
                />
                <Footer />
            </Container>
        </div>
    );
}

export default Payment;