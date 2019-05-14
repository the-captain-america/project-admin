import React from 'react';

class PathAuth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        componentDidMount() {
            // locgetItem
            // should this happen here... no this should happen on AppContainer..
        }
    }
    render(){
        return(
            <div>Hi</div>
        )
    }
}
/*

const isAdmin = 'cwWdIPEb3xXRVmnPNiS3k4d7glZ2';


*/

/* Login as Admin */

/* Admin can see all status of users */

/* Admin dashboard */

/* Check if user has permissions and set redux state to isAdmin */

/* Navigate through:

Programs (Alternate plans) -> Sessions (Day 1 etc) --> Exercises (List)
User logs in -> (state persisted)

Deb to upload exercises with images: (flamelink)

*/
