import React, {Component} from 'react';
import '../App.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cssButtonClass = this.props.disabled?"button borderBlack disabled":"button borderBlack ";
        return (
            <div className={cssButtonClass} onClick={()=>this.props.onclick()}>
                {this.props.display}
            </div>
        );
    }
}

export default Button;