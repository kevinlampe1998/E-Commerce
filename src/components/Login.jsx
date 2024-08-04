const Login = () => {
    return (
        <main className="login">
            <h2>Login</h2>
            <form action="/" method="POST">
                <div>
                    <label htmlFor="firstname"></label>Firstname
                    <input type="text" id="firstname" name="firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname"></label>Lastname
                    <input type="text" id="lastname" name="lastname"/>
                </div>
                <div>
                    <label htmlFor="email"></label>Email
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password"></label>Password
                    <input type="password" id="password" name="password"/>
                </div>

                <div>
                    <button onClick={(e) => e.preventDefault()} type="submit">Login</button>
                </div>
            </form>
        </main>
    );
}

export default Login;
