import React, {Component} from 'react';
import Pageheader from "./Pageheader";


class Students extends Component {

    render(){
        return(
            <React.Fragment>
            <Pageheader/>
            <div className="content">
                <h1>About</h1>
            </div>
            </React.Fragment>
        )
    }
}

export default Students;