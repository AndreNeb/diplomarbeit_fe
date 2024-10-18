import { Link } from "react-router-dom";
import '../stylesheets/topbar/topbar.css';
import '../stylesheets/Rules/leftbar/buttons.css'
import '../stylesheets/Rules/leftbar/leftbar.css'
import '../stylesheets/Rules/Build-grid.css'
import '../stylesheets/Rules/Rules-overview.css';
function RulesPage() {
    return (
        <div className="lol">
            <Link to="/">
                <button className="button-general-leftbar">Document</button>
            </Link>
        </div>
    );
}

export default RulesPage;
