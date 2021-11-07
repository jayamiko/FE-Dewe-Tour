import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import ListTransaction from "../pages/list_transactions/ListTransaction";

function Home() {
    const admin = localStorage.getItem("admin_login");
    const newAdmin = JSON.parse(admin);
    const loginState = JSON.parse(localStorage.getItem("user_login"));
    console.log(loginState);

    return (
        <>
            {
                newAdmin?.isAdmin ? (
                    <>
                        <ListTransaction />
                    </>
                ) : (
                    <div>
                        <Navbar />
                        <Header />
                        <Container fluid className="main">
                            <Main />
                            <Footer />
                        </Container>
                    </div>
                )
            }
        </>
    );
}
export default Home;