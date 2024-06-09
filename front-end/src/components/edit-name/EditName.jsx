import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { infoUserName } from '../../store/userSlice';

import Button from '../button/Button';
import { changeUser } from '../../services/api';

const EditName = () => {
    const navigate = useNavigate();

    const loginStore = useSelector((state) => state.login);
    const storeUserProfil = loginStore.userProfil;
    const dispatch = useDispatch();

    const [newUserName, setNewUserName] = useState(storeUserProfil.userName);
    const token = loginStore.userToken;

    const handleChangeUser = (e) => {
        setNewUserName(e.target.value);
    };

    const handleCancel = () => {
        navigate('/User');
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const updateUserName = await changeUser(newUserName, token);
        if (updateUserName.statue === 200) {
            dispatch(infoUserName(newUserName));
            console.log("Changement du nom d'utilisateur effectué", updateUserName.status);
        } else {
            console.error("Erreur lors du changement du nom d'utilisateur");
        }
    };
    return (
        <main className='main bg-dark'>
            <section className='sign-in-content toogle-edit-name'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Edit user info</h1>

                <form onSubmit={handleSubmitForm} onClick={(event) => event.stopPropagation}>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            onChange={handleChangeUser}
                            placeholder='Enter your new username'
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            value={storeUserProfil.firstName}
                            disabled
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            value={storeUserProfil.lastName}
                            disabled
                        />
                    </div>
                    <Button btnText={'Save'} className={'sign-in-button'}/>
                </form>

                <Button btnText={'Cancel'} onClick={handleCancel} className={'sign-in-button'}/>
            </section>
        </main>
    )
};

export default EditName;