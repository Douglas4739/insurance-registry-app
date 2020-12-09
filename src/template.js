

const loginPage = () => {
    return  (
        <section class='start-page'>
            <h1>I.I.R.</h1>
            <label for='userName'>User Name:</label>
            <input type='text' id='userName' placeholder='Enter User Name...' required />
            <br />
            <label for='password'>Password:</label>
            <input type='text' id='password' placeholder='Enter Password' required />
            <br />
            <button type='submit' id='submit'>Submit</button>
            <button type='button' id='cancel'>Cancel</button>
        </section>);
};

const newUserForm = () => {
    return (
    <form id='newUserInfo'>
        <h1>I.I.R.</h1>
        <section class='newUserForm'>
        <label for='email'>Email:</label>
        <input type='text' id='email' placeholder='Enter Email' required />
        <label for='userName'>User Name:</label>
        <input type='text' id='userName' placeholder='Enter User Name' required />
        <label for='password'>Password:</label>
        <input type='text' id='password' placeholder='Enter Password' required />
        <label for='passwordConfirm'>Confirm Password:</label>
        <input type='text' id='passwordConfirm' placeholder='Confirm Password' required />
        </section>
    </form>);
}


const contentPage = () => {
    return (
        <section class='contentPage'>
            <button type='button' id='addItem'>Add Item</button>
            <label for='minimumCost'>Filter by Cost:</label>
            <select name='minimumCost' id='minimumCost'>
                <option value='null'>Show All</option>
                <option class='minimum' value='100'>$100</option>
                <option class='minimum' value='500'>$500</option>
                <option class='minimum' value='1000'>$1,000</option>
                <option class='minimum' value='2000'>$2,000</option>
                <option class='minimum' value='3000'>$3,000</option>
                <option class='minimum' value='4000'>$4,000</option>
                <option class='minimum' value='5000'>$5,000</option>
                <option class='minimum' value='6000'>$6,000</option>
                <option class='minimum' value='7000'>$7,000</option>
                <option class='minimum' value='8000'>$8,000</option>
                <option class='minimum' value='9000'>$9,000</option>
                <option class='minimum' value='10000'>$10,000</option>
                <option class='minimum' value='20000'>$20,000</option>
                <option class='minimum' value='30000'>$30,000</option>
                <option class='minimum' value='40000'>$40,000</option>
                <option class='minimum' value='50000'>$50,000</option>
                <option class='minimum' value='100000'>$100,000</option>
            </select>
            <section class='items'>
            </section>
            <button type='button' id='logOut'>Log Out</button>
        </section>
    );
}

const itemCardCondensed = () => {
    return (
        <section class='condensedCard'>
            <p>Item Name</p>
            <p>Item Cost</p>
        </section>
    );
}

const itemCardExpanded = () => {
    return (
    <section class='condensedCard'>
        <p>Item Name</p>
        <p>Item Cost</p>
        <p>Item Description</p>
        <p>photo-probably a url link</p>
        <p>policy#</p>
        <button type='button' id='edit'>Edit</button>
        <button type='button' id='delete'>Delete</button>
    </section>  
    );
}

export default { loginPage, newUserForm, contentPage, itemCardCondensed, itemCardExpanded };