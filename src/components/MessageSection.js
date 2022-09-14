import React from "react";

const MessageSection = (props) => {
	return (
		<section className="row message-section">
            <div className="col-10 offset-1 form-wrapper row">
                <h2 className="text-center col-10">{props.primary}</h2>
                <p className="col-10">{props.secondary}</p>
            </div>            
        </section>
	);
};

export default MessageSection;
