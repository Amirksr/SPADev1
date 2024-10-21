import MyNavbar from '../../components/navbar/Navbar';
import { Container } from "react-bootstrap";

import './Panel.css'
function Panel() {
    return(
        <>
            <MyNavbar />
            <Container>
                <h1>Panel page</h1>
            </Container>
        </>
    )
}
export default Panel;