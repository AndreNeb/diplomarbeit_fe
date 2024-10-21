import { Link } from "react-router-dom";
import '../stylesheets/rules/leftbar/buttons.css';
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Header";

function RulesPage() {
    return (
        <body>
        <Header/>
        <HiddenHeader/>
        <div className="lol">
            <Link to="/">
                <button className="button-general-leftbar" style={{marginTop: "60px"}}>Info</button>
            </Link>
        </div>
        </body>
    );
}

export default RulesPage;
