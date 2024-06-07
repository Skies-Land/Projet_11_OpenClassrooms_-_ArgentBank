import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Importation du tableau du fichier JSON
import Accounts from '../../data/accounts.json'; 
// Importation du composant
import Account from '../account/Account';

import Button from '../button/Button';

const User = () => {
    const username = useSelector(state =>(state.login.userProfil.userName))
    
    const navigate = useNavigate();
    const handleEditUser = (e) => {
        e.preventDefault();
        navigate('/editUser');
    };

    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1 className="title">Welcome back {username}</h1>
                <Button 
                    className={"edit-button"}
                    btnText={"Edit Name"}
                    onClick={handleEditUser}>
                </Button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Accounts.map((account, index) => (
                <Account 
                    key={"account"+index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};

export default User;