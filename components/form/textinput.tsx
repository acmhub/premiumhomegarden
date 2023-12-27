import React from "react";

function TextInput({ type, label, id, defaultValue, onChange }: InputProps) {
	return (
		<div className="form-input">
			<label htmlFor={id}>{label}</label>
			<input type={type || "text"} name={id} id={id} />
		</div>
	);
}

export default TextInput;
