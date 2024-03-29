import "./Transactions.scss";

export const Transactions = () => {
    return <div className="row">
        <div className="col-md-6">
            <div className="trans">
                <div className="transHeader">
                    <h1>Your Transactions</h1>
                    <div className="date">23 - 30 March 2021</div>
                </div>
                <div className="transItemBox">
                    <div className="item">
                        <div className="details">
                            <div className="icon">
                                -
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                    <div className="item">
                        <div className="details">
                            <div className="icon">
                                -
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                    <div className="item">
                        <div className="details">
                            <div className="icon success">
                                +
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value success">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> <div className="col-md-6">
            <div className="trans">
                <div className="transHeader">
                    <h1>Revenus</h1>
                    <div className="date">23 - 30 March 2021</div>
                </div>
                <div className="transItemBox">
                    <div className="item">
                        <div className="details">
                            <div className="icon">
                                -
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                    <div className="item">
                        <div className="details">
                            <div className="icon">
                                -
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                    <div className="item">
                        <div className="details">
                            <div className="icon success">
                                +
                            </div>
                            <div>
                                <p className="name">Netflix</p>
                                <p className="time">26 March 2021, at 13:45 PM</p>
                            </div>
                        </div>
                        <div className="value success">
                            <h4>- $2500</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}