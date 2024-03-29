import React from "react";
import profile from "../../assets/images/profile.jpg";
import "./Table.scss";


function Table() {
    return (
        <div className="datatable table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">FUNCTION</th>
                        <th scope="col">REVIEW</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">EMPLOYED</th>
                        <th scope="col">ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="img"><img src={profile} alt="" />
                                Esthera Jackson
                            </div>
                        </td>
                        <td>Manager</td>
                        <td>Positive</td>
                        <td>esthera@simmmple.com</td>
                        <td>14/06/21</td>
                        <td>42312</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="img"><img src={profile} alt="" />
                                Esthera Jackson
                            </div>
                        </td>
                        <td>Manager</td>
                        <td>Positive</td>
                        <td>esthera@simmmple.com</td>
                        <td>14/06/21</td>
                        <td>42312</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="img"><img src={profile} alt="" />
                                Esthera Jackson
                            </div>
                        </td>
                        <td>Manager</td>
                        <td>Positive</td>
                        <td>esthera@simmmple.com</td>
                        <td>14/06/21</td>
                        <td>42312</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="img"><img src={profile} alt="" />
                                Esthera Jackson
                            </div>
                        </td>
                        <td>Manager</td>
                        <td>Positive</td>
                        <td>esthera@simmmple.com</td>
                        <td>14/06/21</td>
                        <td>42312</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;