import Home from "./Home/Home";
import NavBar from "./Nav/NavBar";


export default function Root() {
    return (
        <NavBar>
            <Home />
        </NavBar>
    );
}