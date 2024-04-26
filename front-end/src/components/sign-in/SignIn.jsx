const SignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">User mail</label>
                        <input 
                            type="text" 
                            id="username"
                            placeholder="Write your email"
                            // required
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Write your password"
                            // required
                        />
                    </div>

                    <div className="input-remember">
                        <input 
                        type="checkbox" 
                        id="remember-me"
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-button">Sign In</button>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
                    <a href="./user.html" class="sign-in-button">Sign In</a>
                    <!-- SHOULD BE THE BUTTON BELOW -->
                    <!-- <button class="sign-in-button">Sign In</button> -->
                    <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default SignIn;