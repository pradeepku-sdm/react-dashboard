import { RiEmotionHappyLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import "./Pricing.scss";
export const Pricing = () => {
    return (
        <div className="pricing">
            <div className="head">
                <h1>See our pricing</h1>
                <p>You have Free Unlimited Updates and Premium Support on each package.</p>
                <div className="time">
                    <div className="timeTab active">Monthly</div>
                    <div className="timeTab">Yearly</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 m-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="planBox">
                                <p className="plan">STARTER</p>
                                <h1>$59</h1>
                                <ul>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                </ul>
                                <button className="btn btn-dark w-100">Join Now</button>

                            </div>
                        </div> <div className="col-md-4">
                            <div className="planBox">
                                <p className="plan">PREMIUM</p>
                                <h1>$59</h1>
                                <ul>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                    <li><RiEmotionUnhappyLine />2 Team Members</li>
                                </ul>
                                <button className="btn btn-theme w-100">Try Premium</button>

                            </div>
                        </div> <div className="col-md-4">
                            <div className="planBox">
                                <p className="plan">ENTERPRISE</p>
                                <h1>$59</h1>
                                <ul>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                    <li><RiEmotionHappyLine fill="#4FD1C5" />2 Team Members</li>
                                </ul>
                                <button className="btn btn-dark w-100">Join Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}