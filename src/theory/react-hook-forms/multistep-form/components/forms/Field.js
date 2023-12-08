import React from "react";

const Field = ({children, label, error}) => {
    const id = getChildId(children);

    return (
        <div className="col-sm-12 mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            {children}
            {error && <small className="error">{error.message}</small>}
        </div>
    );
};

const getChildId = (children) => {
    const child = React.Children.only(children)
    if('id' in child?.props) {
        return child.props.id
    }
}

export default Field;