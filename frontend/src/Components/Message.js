import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, message }) => {
    return <Alert variant={variant}>{message}</Alert>;
};

Message.defaultProps = {
    variant: "info",
    message: "default message text: no message has been injected",
};

export default Message;
