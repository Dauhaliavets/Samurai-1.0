import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activeEditMode = () => {
        setEditMode(true);
    };

    const deActiveEditMode = () => {
        setEditMode(false);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(status);
    };


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={ activeEditMode }>{props.status || '--------'}hooks</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={ onStatusChange }
                       onBlur={ deActiveEditMode }
                       value={ status }
                       />
            </div>
            }
        </div>
    )

};

export default ProfileStatusWithHooks;