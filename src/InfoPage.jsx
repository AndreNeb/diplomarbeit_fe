import { Link } from "react-router-dom";
import './stylesheets/leftbar/buttons.css';

function RulesPage() {
    return (
        <div className="lol">
            <Link to="/">
                <button className="button-general">Info</button>
            </Link>
        </div>
    );
}

export default RulesPage;