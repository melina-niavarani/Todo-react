function Calender() {
    const currentDate = () => {
        const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        const current = new Date();
        const date = `${current.getDate()}
                    ${month[current.getMonth()]}`;
        return date;
    }
    return (
        <div className="info">
            <div className="date-holder">
                <div className="date">{ currentDate() }</div>
            </div>
        </div>
    )
}

export default Calender