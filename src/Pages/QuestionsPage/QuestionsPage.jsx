// import { useState } from "react";
import "./QuestionsPage.scss";


function QuestionsPage({generatedId}) {
        return (
            <section className="questions">
                <h1>Welcome!</h1>
                {/* above needs to be passed the first_name from users database */}
                <h4>
                    Let's help you get started by getting some information from
                    you
                </h4>
                <form
                    action="submit"
                    className="questions__form"
                >
                    <label htmlFor="" className="questions__form-label">
                        <h5>What is your Monthly Net Income?</h5>
                        <input
                            type="number"
                            name="net_income"
                            id="net_income"
                            className="questions__form-input"
                        />
                        <p>Net income definition.</p>
                    </label>
                    <label htmlFor="" className="questions__form-label">
                        <h5>Rent/Mortgage</h5>
                        <input
                            type="number"
                            name="housing"
                            id="housing"
                            className="questions__form-input"
                        />
                        <p>Rent/Mortgage definition</p>
                    </label>
                    <label htmlFor="" className="questions__form-label">
                        <h5>Utilities</h5>
                        <input
                            type="number"
                            name="utilities"
                            id="utilities"
                            className="questions__form-input"
                        />
                        <p>Utilities definition</p>
                    </label>
                    <label htmlFor="" className="questions__form-label">
                        <h5>Transportation</h5>
                        <input
                            type="number"
                            name="transportation"
                            id="transportation"
                            className="questions__form-input"
                        />
                        <p>How much are you spending on cars</p>
                    </label>
                    <label htmlFor="" className="questions__form-label">
                        <h5>Entertainment</h5>
                        <input
                            type="number"
                            name="entertainment"
                            id="entertainment"
                            className="questions__form-input"
                        />
                        <p>Going out too much</p>
                    </label>
                    <label htmlFor="" className="questions__form-label">
                        <h5>Food</h5>
                        <input
                            type="number"
                            name="food"
                            id="food"
                            className="questions__form-input"
                        />
                        <p>STOP EATING OUT YOU FATTY</p>
                    </label>
                        <button
                            className="questions__form-button"
                            type="submit"
                        >
                            Submit
                        </button>
                </form>
            </section>
        );
    };

export default QuestionsPage;
