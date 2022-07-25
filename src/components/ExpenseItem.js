import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022,7,13);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = '244.24';

  return (
    <div className='expense-item'>
      <div className='date'>{expenseDate.toISOString()}</div>
      <div className='description'>
        <h2 className='title'>{expenseTitle}</h2>
        <div className='price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
