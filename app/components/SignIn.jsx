"use client";
import { useState } from "react";
import { loginFields } from "../forms/formfield";
import FormAction from "../forms/formAction";
import FormExtra from "../forms/formExtra";
import Input from "../components/Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignIn() {
	const [loginState, setLoginState] = useState(fieldsState);

	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isRequired && value.trim() === "") {
			return <p className="pt-2 text-red-600">This field is required</p>;
		}
		return null;
	};


	return (
		<form className="mt-8 space-y-6 w-96 m-auto" onSubmit={handleSubmit}>
			<div className="-space-y-px ">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={loginState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
						error={field.error}
					/>
				))}
			</div>

			<FormExtra />
			<FormAction handleSubmit={handleSubmit} text="Log in" />
		</form>
	);
}
