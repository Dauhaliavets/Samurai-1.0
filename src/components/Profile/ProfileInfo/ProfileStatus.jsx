import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activeEditMode() {
        this.setState({
           editMode: true,
        })
        // this.state.editMode = true;
    }

    deActiveEditMode() {
        this.setState({
            editMode: false,
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }

};

export default ProfileStatus;