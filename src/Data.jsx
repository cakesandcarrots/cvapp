function Data(props) {
    if (props.islogged) {
        return <h1>Welcome {props.name}</h1>
    }
    else {
        return <h1>Access Denied</h1>
    }

}

export default Data