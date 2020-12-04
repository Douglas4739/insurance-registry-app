

const loginPage = () => {
    return ` <h1>I.I.R.</h1>
        <section class='start-page'>
            <label for='userName'>User Name:<label>
            <input type='text' id='userName' placeholder='Enter User Name...' required>
            <br>
            <label for='password'>Password:<label>
            <input type='text' id='password' placeholder='Enter Password' required>
            <br>
            <button type='submit' id='submit'>Submit</button>
            <button type='button' id='cancel'>Cancel</button>
        </section>`;
};

const newUserForm = () => {
    return `<h1>I.I.R.</h1>
    <form id='newUserInfo'>
        <section class='newUserForm'>
        <label for='email'>Email:<label>
        <input type='text' id='email' placeholder='Enter Email' required>
        <label for='userName'>User Name:<label>
        <input type='text' id='userName' placeholder='Enter User Name' required>
        <label for='password'>Password:<label>
        <input type='text' id='password' placeholder='Enter Password' required>
        <label for='passwordConfirm'>Confirm Password:<label>
        <input type='text' id='passwordConfirm' placeholder='Confirm Password' required>
        </section>
    </form>`;
}


export default { loginPage, newUserForm };