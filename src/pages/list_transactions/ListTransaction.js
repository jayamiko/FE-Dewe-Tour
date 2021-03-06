import Navbar from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import TableComp from "../../components/Items/table/Table";
import "./ListTransaction.css";

const ListTransaction = () => {
    return (
        <div className="containerTransaction">
            <Navbar />
            <Container fluid className="list_transaction-container mt-5  ">
                <Container>
                    <TableComp />
                </Container>
            </Container>
            <Footer />
        </div>
    );
};

export default ListTransaction;