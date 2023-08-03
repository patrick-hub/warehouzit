const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address",
        error:"error"
         
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"  
    }
]

const signupFields=[
    {
        labelText:"First Name",
        labelFor:"firstName",
        id:"firstname",
        name:"firstName",
        type:"text",
        autoComplete:"firstName",
        isRequired:true,
        placeholder:"First Name"   
    },
    {
        labelText:"Last Name",
        labelFor:"lastName",
        id:"lastName",
        name:"lastname",
        type:"text",
        autoComplete:"lastName",
        isRequired:true,
        placeholder:"Last Name"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Phone Number",
        labelFor:"phoneNumber",
        id:"phonenumber",
        name:"phone",
        type:"phone",
        autoComplete:"phone number",
        isRequired:true,
        placeholder:"Phone Number"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm_password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export {loginFields,signupFields}