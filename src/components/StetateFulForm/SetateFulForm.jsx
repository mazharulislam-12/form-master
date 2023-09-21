import { useState } from "react";

const SetateFulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email, password, name)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }


    return (
        <div onSubmit={handleSubmit}>
            <input
                onChange={handleNameChange}
            type="text" name="name" />
            <br />
            <input
                onChange={handleEmailChange}
            type="email" name="email" id="" />
            <br />

            <input
                onChange={handlePasswordChange}
            type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default SetateFulForm;