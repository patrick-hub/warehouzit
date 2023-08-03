"use client";
import { useState } from "react";
import { signupFields } from "../forms/formfield";
import FormAction from "../forms/formAction";
import Terms from "../forms/terms";
import Input from "../components/Input";
import axios from "../api/axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const regApi = "https://warehouzitserver.onrender.com/api/v1/auth/register";
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
	const [signupState, setSignupState] = useState(fieldsState);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		await register();
		setIsLoading(false);
		resetForm();
	};

	const resetForm = () => {
		setSignupState(fieldsState);
	};

	async function register() {
		try {
			const { confirm_password, ...signupData } = signupState;

			if (signupData.password !== confirm_password) {
				toast.error("Password and Confirm Password do not match.");
				return;
			}

			const response = await axios.post(regApi, signupData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.data;
			console.log(data);
			toast.success("You have successfully registered");
		} catch (error) {
			console.error(error);
			toast.error("Some error has occured");
		}
	}

	return (
		<form className="mt-8 space-y-6 w-96 m-auto" onSubmit={handleSubmit}>
			<div className="">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={signupState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
					/>
				))}
				<Terms />
				{
					<FormAction
						handleSubmit={handleSubmit}
						isLoading={isLoading}
						text={"Register"}
					/>
				}
				<ToastContainer />
			</div>
		</form>
	);
}
