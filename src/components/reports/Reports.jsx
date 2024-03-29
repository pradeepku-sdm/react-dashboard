import { FaUserAlt } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import "./Reports.scss";
import Table from "../table/Table";

// const CardData = [
//     {
//         icon: "",
//         dataValue: "2536",
//         title: "Users Active",
//         percent: "15%"
//     }, {
//         icon: "",
//         dataValue: "5462",
//         title: "Click Events",
//         percent: "+124%"
//     }, {
//         icon: "",
//         dataValue: "2340",
//         title: "Purchases",
//         percent: "14%"
//     }, {
//         icon: "",
//         dataValue: "2536",
//         title: "Likes",
//         percent: "90%"
//     },
// ]

export const Report = () => {
    return <div className="reports">
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card_bg">
                            <div className="cardData">
                                <div className="tools">
                                    <div className="icon">
                                        <FaUserAlt fill="#000000" />
                                    </div>
                                    <div className="dropdown">
                                        <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CiMenuKebab />
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tools">
                                    <div className="data">
                                        <h6>2340</h6>
                                        <p className="mb-0">Users Active</p>
                                    </div>
                                    <div className="percent">
                                        <h5 className="mb-0">+15%</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-4 mt-sm-0">
                        <div className="card card_bg">
                            <div className="cardData">
                                <div className="tools">
                                    <div className="icon">
                                        <FaUserAlt fill="#000000" />
                                    </div>
                                    <div className="dropdown">
                                        <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CiMenuKebab />
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tools">
                                    <div className="data">
                                        <h6>2340</h6>
                                        <p className="mb-0">Users Active</p>
                                    </div>
                                    <div className="percent">
                                        <h5 className="mb-0">+15%</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-4">
                        <div className="card card_bg">
                            <div className="cardData">
                                <div className="tools">
                                    <div className="icon">
                                        <FaUserAlt fill="#000000" />
                                    </div>
                                    <div className="dropdown">
                                        <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CiMenuKebab />
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tools">
                                    <div className="data">
                                        <h6>2340</h6>
                                        <p className="mb-0">Users Active</p>
                                    </div>
                                    <div className="percent">
                                        <h5 className="mb-0">+15%</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-4">
                        <div className="card card_bg">
                            <div className="cardData">
                                <div className="tools">
                                    <div className="icon">
                                        <FaUserAlt fill="#000000" />
                                    </div>
                                    <div className="dropdown">
                                        <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CiMenuKebab />
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tools">
                                    <div className="data">
                                        <h6>2340</h6>
                                        <p className="mb-0">Users Active</p>
                                    </div>
                                    <div className="percent">
                                        <h5 className="mb-0">+15%</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row progressBox">
                    <div className="col-12">
                        <div className="spcBtwn">
                            <p className="mb-2">Positive Reviews</p>
                            <p className="mb-2">80%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="spcBtwn">
                            <p className="mb-2">Positive Reviews</p>
                            <p className="mb-2">80%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                    <div className="col-12 mt-4">
                        <div className="spcBtwn">
                            <p className="mb-2">Positive Reviews</p>
                            <p className="mb-2">75%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                    <div className="col-12 mt-4">
                        <div className="spcBtwn">
                            <p className="mb-2">Positive Reviews</p>
                            <p className="mb-2">100%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="spcBtwn gap ">
                            <p className="mb-0 flex-1">More than 1,500,000 developers used Creative Tim's products and over 700,000 projects were created.</p>
                            <button className="btn btn-dark flex-grow">VIEW ALL REVIEWS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Table />
            </div>
        </div>
    </div>
}