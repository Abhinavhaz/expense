
// export default ModalForm;
import React, { useContext, useEffect, useState } from 'react';
import FormButtons from '../ButtonsForm/FormButtons';
import { MoneyContext, TransactionsContext } from '../Money&Transaction/Contexts';
import { useSnackbar } from 'notistack';

const ModalForm =({ toggleModal, formType, existingData }) => {
    // const { toggleModal, formType, existingData } = props;
    const [money, setMoney] = useContext(MoneyContext);
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (existingData) {
            updateFormDataWithExistingData();
        }
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        date: new Date().toISOString().split("T")[0],
        category: "",
    });

    const [balanceFormData, setBalanceFormData] = useState({ income: "" });

    const updateFormDataWithExistingData = () => {
        const { name, date, amount, category } = existingData;
        setFormData({
            name: name,
            price: amount,
            date: date,
            category: category
        });
    };

    const handleChange = (evt) => {
        const key = evt.target.name, value = evt.target.value;
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (formType === "Add Balance") {
            handleAddBalance();
        }
        if (formType === "Add Expense") {
            handleAddExpense();
        }
        if (formType === "Edit Expense") {
            handleEditExpense();
        }
        toggleModal();
    };

    const handleAddBalance = () => {
        setMoney({
            ...money,
            balance: money.balance + balanceFormData.income
        });
    };

    const handleAddExpense = () => {
        let newExpense = money.expenses + Number(formData.price);
        let newBalance = money.balance - Number(formData.price);
        if (newBalance < 0) {
            enqueueSnackbar("Out of balance", { variant: 'error' });
        } else {
            let newId = new Date / 1;
            let newTransaction = { ...formData, id: newId };
            setMoney({ balance: newBalance, expenses: newExpense });
            setTransactionData([...transactionData, newTransaction]);
        }
    };

    const handleEditExpense = () => {
        let newExpense = money.expenses + Number(formData.price) - Number(existingData.amount);
        let newBalance = money.balance - Number(formData.price) + Number(existingData.amount);
        if (newBalance < 0) {
            enqueueSnackbar("Out of balance", { variant: 'error' });
        } else {
            const indexOfTransaction = transactionData.findIndex(transaction => existingData.id === transaction.id);
            const updatedTransaction = { ...formData, id: existingData.id };
            transactionData[indexOfTransaction] = updatedTransaction;
            setMoney({ balance: newBalance, expenses: newExpense });
            setTransactionData([...transactionData]);
        }
    };

    const expenseAndEditInput = () => {
        return (
            <div className='formInputsDiv'>
                <input
                    required
                    value={formData.name}
                    className="formInput"
                    onChange={handleChange}
                    placeholder='Title'
                    type='text'
                    name='name'
                    autoFocus
                />
                <input
                    required
                    value={formData.price}
                    className="formInput"
                    onChange={handleChange}
                    placeholder='Price'
                    type='number'
                    name='price'
                />
                <select
                    value={formData.category}
                    className="formInput"
                    onChange={handleChange}
                    placeholder='Select Category'
                    name='category'>
                    <option value={null}>Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input
                    required
                    value={formData.date}
                    className="formInput"
                    onChange={handleChange}
                    placeholder='dd/mm/yyyy'
                    type='date'
                    name='date'
                />
            </div>
        );
    };

    const incomeInputs = () => {
        return (
            <div className='balanceFormInputDiv'>
                <input
                    className="formInput"
                    onChange={e => setBalanceFormData({ income: +e.target.value })}
                    placeholder='Income Amount'
                    type='number'
                    name='income'
                    value={balanceFormData.income}
                    autoFocus
                    required
                />
            </div>
        );
    };

    return (
        <form className='modalForm expensesForm' onSubmit={handleSubmit}>
            {formType === "Add Balance" ? incomeInputs() : expenseAndEditInput()}
            <FormButtons text={formType} toggleModal={toggleModal} />
        </form>
    );
};

export default ModalForm;
