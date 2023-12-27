import React from "react";

function TextArea({ label, id }: InputProps) {
	return (
		<div className="form-input">
			<label htmlFor={id}>{label}</label>
			<textarea name={id} id={id} />
		</div>
	);
}

export default TextArea;
