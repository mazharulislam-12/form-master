import { useEffect } from "react";
import { useRef } from "react";

const RefFrom = () => {

    const nameRaf = useRef(null)
    const emailRaf = useRef(null)
    const passwordRaf = useRef(null)

    useEffect( () =>{
        nameRaf.current.focus();

    } ,[])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRaf.current.value)
        console.log(emailRaf.current.value)
        console.log(passwordRaf.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRaf} type="text" name="name" />
                <br />
                <input ref={emailRaf} defaultValue={'abc@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRaf} type="password" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;