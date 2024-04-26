const EditName = () => {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h2>Edit Name</h2>

            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">First Name</label>
                    <input 
                        type="text" 
                        id="username"
                        placeholder="Write your first name"
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Last Name</label>
                    <input 
                        type="text" 
                        id="password"
                        placeholder="Write your last name"
                    />
                </div>

                <button className="sign-in-button">Save</button>
                <button className="sign-in-button">Cancel</button>
            </form>
        </section>
    );
};

export default EditName;