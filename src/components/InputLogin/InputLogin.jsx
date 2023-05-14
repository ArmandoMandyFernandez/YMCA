import "./InputLogin.scss";

function InputLogin() {
    return (
        <div className="field">
            <label htmlFor="" className="field__label">
                <input type="email" name="email" className="field__input" />
            </label>
            <label htmlFor="" className="field__label">
                <input
                    type="password"
                    name="password"
                    className="field__input"
                />
            </label>
        </div>
    );
}
export default InputLogin;
