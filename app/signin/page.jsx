"use client";
import { useState } from "react";
import { loginFields } from "../forms/formfield";
import FormAction from "../forms/formAction";
import FormExtra from "../forms/formExtra";
import Input from "../components/Input";

const regApi = "https://warehouzitserver.onrender.com/api/v1/auth/register";
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignIn() {
	const [loginState, setLoginState] = useState(fieldsState);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isRequired && value.trim() === "") {
			return <p className="pt-2 text-red-600">This field is required</p>;
		}
		setIsLoading(true);
		await login();
		setIsLoading(false);
	};


	async function login() {
		try {
			const response = await axios.post(regApi, loginState, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.data;
			console.log(data);
			toast.success("You have successfully Logged In");
		} catch (error) {
			console.error(error);
			toast.error("Some error has occured");
		}
	}

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
			<FormAction handleSubmit={handleSubmit} isLoading={isLoading} text="Log in" />
		</form>
	);
}
