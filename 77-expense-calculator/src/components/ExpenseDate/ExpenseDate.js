import './ExpenseDate.css'

export default function ExpenseDate({ date }) {
    let newDate = new Date(date)
    const month = newDate.toLocaleString('en-US', { month: 'long' });
    const day = newDate.toLocaleString('en-US', { day: '2-digit' });
    const year = newDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}