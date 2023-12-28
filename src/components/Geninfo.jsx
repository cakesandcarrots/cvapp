

function Geninfo({ dataChange }) {

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                dataChange(e.target.name.value, e.target.email.value, e.target.phoneno.value);
            }}>
                <fieldset>
                    <legend>Add General Information</legend>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" />
                    <br />
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" id="email" />
                    <br />
                    <label htmlFor="phoneno">Phone No: </label>
                    <input type="tel" id="phoneno" />
                    <br />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </ >
    );
}

export default Geninfo;
