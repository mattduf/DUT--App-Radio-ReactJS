import React from 'react';


class Tags extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-singleTag">{this.props.tags}</div>
        );
    }
}

export { Tags }