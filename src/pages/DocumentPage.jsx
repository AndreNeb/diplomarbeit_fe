import * as Imports from '../components/Imports';
function DocumentPage() {
    return (

        <body>
        <Imports.Header/>
        <Imports.HiddenHeader/>
        <div className="lol">
            <Imports.Link to="/">
                <button className="button-general-leftbar">Document</button>
            </Imports.Link>
            <Imports.Link to="/">
                <button className="button-general-leftbar" style={{marginTop: "60px"}}>Document</button>
            </Imports.Link>
        </div>
        </body>
    );
}

export default DocumentPage;