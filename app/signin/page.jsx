"use client";
import { useState } from "react";
import { loginFields } from "../forms/formfield";
import FormAction from "../forms/formAction";
import FormExtra from "../forms/formExtra";
import Input from "../components/Input";
import axios from "../api/axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const signinApi = "https://warehouzitserver.onrender.com/api/v1/auth/login";
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignIn() {
    const [signinState, setSigninState] = useState(fieldsState);
	const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSigninState({ ...signinState, [id]: value });
      };

	  const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await signin();
        setIsLoading(false);
        resetForm();
      };

      const resetForm = () => {
        setSigninState(fieldsState);
      };


      async function signin() {
        try {
          const response = await axios.post(signinApi, signinState, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.data;
          console.log(data);
          toast.success("You have successfully signed in");
        } catch (error) {
          console.error(error);
          toast.error("Invalid credentials. Please check your email and password.");
        }
      }

	return (
		<form className="mt-8 space-y-6 w-96 m-auto" onSubmit={handleSubmit}>
			<div className="-space-y-px ">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={signinState[field.id]}
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
            <ToastContainer />
		</form>
	);
}
