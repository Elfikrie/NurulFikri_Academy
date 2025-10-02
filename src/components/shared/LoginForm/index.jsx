const LoginForm = () => {
    const styles = {
        div: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px",
            margin: "auto",
            padding: "10px",
            border: "1px solid #111",
            borderRadius: "10px"
        },
        input: {
            padding: "10px",
            fontSize: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
        },
        button: {
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px"
        }
    }
    return (
        <div>
            <form style={styles.form}>
                <input style={styles.input} type="text" placeholder="Username"/>
                <input style={styles.input} type="email" placeholder="email" />
                <input style={styles.input} type="password" placeholder="Password"/>
                <button style={styles.button}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;