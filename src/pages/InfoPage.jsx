import { Link } from "react-router-dom";
import '../stylesheets/rules/leftbar/buttons.css';

function RulesPage() {
    return (
        <div className="lol">
            <Link to="/">
                <button className="button-general-leftbar">Info</button>
            </Link>
        </div>
    );
}

export default RulesPage;
