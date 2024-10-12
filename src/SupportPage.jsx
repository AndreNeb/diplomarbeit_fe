import { Link } from "react-router-dom";
import './stylesheets/leftbar/buttons.css';

function RulesPage() {
    return (
        <div className="lol">
            <Link to="/">
                <button className="button-general">Support</button>
            </Link>
        </div>
    );
}

export default RulesPage;