'use client'
import { useState } from 'react';
import { loginFields } from './forms/formfield';
import FormAction from "./forms/formAction";
import FormExtra from "./forms/formExtra";
import Input from "./components/Input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const HomePage = () => {
	const [loginState, setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }
	return (
	    <form className="mt-8 space-y-6 w-96 m-auto">
        <div className="-space-y-px ">
            {
                fields.map(field=>
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
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Log in"/>

      </form>
	);
};

export default HomePage;
