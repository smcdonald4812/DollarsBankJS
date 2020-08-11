import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user:[]
        }
    }
    render() {
        console.log(this.props);
        return(
            <div>
                <div className="container mr-auto" style={{ marginTop: "100px"}}>
                    <h3>Hello {this.props.user.firstname}!</h3>
                    <p>Welcome to the Dollars Bank demo app. Hope you enjoy your experience!</p>
                </div>
            </div>
        );
    }
}

export default Home;