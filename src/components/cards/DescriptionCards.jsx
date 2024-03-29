import React from "react";
import cardImage from "../../assets/images/cardImage.jpg";
import "./Cards.scss";

function DescriptionCard() {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src={cardImage} alt="" />
                    <div className="description">
                        <h4>Project #1</h4>
                        <h3>Modern</h3>
                        <p>As Uber works through a huge amount of internal management turmoil.</p>
                        <button className="btn btn-main">View Project</button>
                    </div>
                </div>

            </div> <div className="col-md-3">
                <div className="card">
                    <img src={cardImage} alt="" />
                    <div className="description">
                        <h4>Project #1</h4>
                        <h3>Modern</h3>
                        <p>As Uber works through a huge amount of internal management turmoil.</p>
                        <button className="btn btn-main">View Project</button>
                    </div>
                </div>

            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src={cardImage} alt="" />
                    <div className="description">
                        <h4>Project #1</h4>
                        <h3>Modern</h3>
                        <p>As Uber works through a huge amount of internal management turmoil.</p>
                        <button className="btn btn-main">View Project</button>
                    </div>
                </div>

            </div><div className="col-md-3">
                <div className="card">
                    <img src={cardImage} alt="" />
                    <div className="description">
                        <h4>Project #1</h4>
                        <h3>Modern</h3>
                        <p>As Uber works through a huge amount of internal management turmoil.</p>
                        <button className="btn btn-main">View Project</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default DescriptionCard;