
const SetateFulForm = () => {

    const handleSubmit = e =>{

    }

    return (
        <div onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default SetateFulForm;