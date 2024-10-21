import * as Imports from '../components/Imports';
import HiddenHeader from "../components/HiddenHeader";

function RulesPage() {
    return (
        <body>
        <Imports.Header/>
        <HiddenHeader/>
        <div className="lol">
            <Imports.Link to="/">
                <button className="button-general-leftbar">Info</button>
            </Imports.Link>
            <Imports.Link to="/">
                <button className="button-general-leftbar" style={{marginTop: "60px"}}>Info</button>
            </Imports.Link>
        </div>
        </body>
    );
}

export default RulesPage;
