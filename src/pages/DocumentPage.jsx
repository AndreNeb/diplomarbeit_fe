import {Link} from "react-router-dom";
import '../stylesheets/topbar/topbar.css';
import '../stylesheets/rules/leftbar/buttons.css'
import '../stylesheets/rules/leftbar/leftbar.css'
import '../stylesheets/rules/Build-grid.css'
import '../stylesheets/rules/Rules-overview.css';
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Header";

function DocumentPage() {
    return (

        <body>
        <Header/>
        <HiddenHeader/>
        <div className="lol">
            <Link to="/">
                <button className="button-general-leftbar" style={{marginTop: "60px"}}>Document</button>
            </Link>
        </div>
        </body>
    );
}

export default DocumentPage;