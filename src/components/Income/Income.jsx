import React, { useState, useEffect } from 'react';
import './Income.scss';
import { useBudgets } from '../../Functions/FunctionsContext';
import currencyFormatter from '../../utils';

function Income() {
    const { income, setIncome } = useBudgets();
    const [isIncomeSet, setIsIncomeSet] = useState(!!income);


    useEffect(() => {
        if (income !== '') {
            setIncome(income);
        }
    });

    const handleIncomeSubmit = event => {
        event.preventDefault();
        if (income !== '') {
            setIsIncomeSet(true);
        }
    };

    const handleIncomeChange = event => {
        setIncome(event.target.value);
    };

    const resetIncome = () => {
        setIsIncomeSet(false);
        setIncome('');
    };


    return (
        <section className='income'>
            <h4 className='income__header'>Net Monthly Income:</h4>
            {!isIncomeSet ? (
                <form onSubmit={handleIncomeSubmit} className='income__form'>
                    <input type="number" onChange={handleIncomeChange} className='income__input'/>
                    <button type="submit" className='income__button-add'> Add </button>
                </form>
            ) : (
                <>
                    <h4 className='income__amount'>{currencyFormatter.format(income)}</h4>
                    <button onClick={resetIncome} className='income__button-change'> Change </button>
                </>
            )}
        </section>
    );
}

export default Income;
