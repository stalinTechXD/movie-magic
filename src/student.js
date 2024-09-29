import React from 'react';

class Student extends React.Component {
    render() {

        return(
            <>
                <h1>hello {this.props.name}</h1>
            </>
        )
    }
}

export default Student;