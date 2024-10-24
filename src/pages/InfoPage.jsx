import * as Imports from '../components/Imports';
import {ConstVariables} from '../components/ConstVariables';

function RulesPage() {
    {/*hier können dann die zu importierenden Const importiert werden*/}
    const {

    } = ConstVariables(); // Verwende den Hook hier

    return (
        <body>
        <Imports.Header/>
        <Imports.HiddenHeader/>
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
