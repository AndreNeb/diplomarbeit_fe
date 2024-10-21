import * as Imports from '../components/Imports';
import HiddenHeader from "../components/HiddenHeader";
import { ConstVariables } from '../components/ConstVariables';

function DocumentPage() {
    {/*hier können dann die zu importierenden Const importiert werden*/}
    const {

    } = ConstVariables(); // Verwende den Hook hier

    return (

        <body>
        <Imports.Header/>
        <HiddenHeader/>
        <div className="lol">
            <Imports.Link to="/">
                <button className="button-general-leftbar" style={{marginTop: "60px"}}>Document</button>
            </Imports.Link>
        </div>
        </body>
    );
}

export default DocumentPage;