import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { getAccounts, getUser } from '../../services/api';

// Import Redux
import { useDispatch } from 'react-redux';
import { loginUser, infoUser } from '../../store/userSlice';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remenberMe, setRemenberMe] = useState(false);
    const [erreur, setErreur] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await getAccounts(email, password);
            const token = userData.token;
            await dispatch(loginUser(token));
            if (remenberMe) {
                localStorage.setItem("token", token);
            }

            const userInfo = await getUser(token);
            const userinfos = {
                email: userInfo.body.email,
                userName: userInfo.body.userName,
                firstName: userInfo.body.firstName,
                lastName: userInfo.body.lastName,
            };
            await dispatch(infoUser(userinfos));
            navigate("/User");
        } catch (error) {
            console.error("Une erreur est survenu lors de la connexion", error);
            setErreur("Identifiants incorrects");
        }
    };

    const handleRememberMe = (e) => {
        setRemenberMe(e.target.checked);
    };

    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>

                <form onSubmit={handleLogin}>
                    <div className='input-wrapper'>
                        <label htmlFor='userEmail'>User Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=' Your email address'
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-remember'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            checked={remenberMe}
                            onChange={handleRememberMe}
                        />
                        <label htmlFor='rememberMe'>Remember me</label>
                    </div>
                    <Button btnText={"Sign In"} className={"sign-in-button"} />
                </form>
                {erreur && <p className='problemConexion'>{erreur}</p>}
            </section>
        </main>
    );
};

export default SignIn;