"use client";
import { useEffect, useState } from "react";
import { signupFields } from "../forms/formfield";
import FormAction from "../forms/formAction";
import Terms from "../forms/terms";
import Input from "../components/Input";
import axios from "../api/axios";

const regApi = "https://warehouzitserver.onrender.com/api/v1/auth/register";
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
	const [signupState, setSignupState] = useState(fieldsState);
    const [error, setError] = useState(null);


	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });

        const handleSubmit = async (e) => {
            e.preventDefault();
            await register();
          };
        

          async function register() {
            try {
              const response = await axios.post(regApi, signupState, {
                headers: {
                  "Content-Type": "application/json", 
                },
              });
              const data = await response.json();
              console.log(data);
            } catch (error) {
              console.error(error);
              setError("An error occurred while registering. Please try again later.");
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
				<FormAction handleSubmit={handleSubmit} text="Register" />
			</div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
		</form>
	);
}
