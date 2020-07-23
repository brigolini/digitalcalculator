import React, {Component} from 'react';
import '../App.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"button borderBlack"} onClick={()=>this.props.onclick()}>
                {this.props.display}
            </div>
        );
    }
}

export default Button;