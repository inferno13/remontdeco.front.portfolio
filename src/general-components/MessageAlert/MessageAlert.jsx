import React from 'react';
import {Alert} from "react-bootstrap";

const MessageAlert = ({variant,text}) => {
	return (
		<Alert variant={variant} className={"my-2 text-center w-100 p-2"}>
			{text}
		</Alert>
	);
};

export default MessageAlert;
