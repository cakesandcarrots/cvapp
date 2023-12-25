function Geninfo() {
    return (
        < div >
            <form action="get">
                <div className="geninfowrapper">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
                    <br />
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" name="email" id="email" />
                    <br />
                    <label htmlFor="phoneno">Phone No: </label>
                    <input type="tel" name="phoneno" id="phoneno" />
                </div>

            </form>
        </div >

    )
}

export default Geninfo