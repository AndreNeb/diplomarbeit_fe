import { Link } from "react-router-dom";
import '../stylesheets/topbar/topbar.css';
import '../stylesheets/rules/leftbar/buttons.css'
import '../stylesheets/rules/leftbar/leftbar.css'
import '../stylesheets/rules/Build-grid.css'
import '../stylesheets/rules/Rules-overview.css';
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