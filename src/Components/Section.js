import "../Styles/Section.css"

import companie1 from "../Assets/companie1.svg"
import companie2 from "../Assets/compaine2.svg"
import companie3 from "../Assets/companie3.svg"
import companie4 from "../Assets/companie4.svg"
import companie5 from "../Assets/companie5.svg"
import companie6 from "../Assets/companie6.svg"
import companie7 from "../Assets/companie7.svg"

import frameImg from "../Assets/Frame.svg"
import headerImg from "../Assets/stn-header-img.svg"

function Section() {
    return (
        <div className="section">

            {/* 1-qism */}
            <h2>Join these companies making business flow</h2>

            <div className="stn-imgcard">
                <img src={companie1} alt="" />
                <img src={companie2} alt="" />
                <img src={companie3} alt="" />
                <img src={companie4} alt="" />
                <img src={companie5} alt="" />
                <img src={companie6} alt="" />
                <img src={companie7} alt="" />
            </div>

            {/* 2-qism: text + img yonma-yon */}
            <div className="section-middle">
                <div className="section-text">
                    <h3>Turn signatures into smart contracts</h3>
                    <p>
                        Experience true contract magic by automating the entire contract
                        process — from creating to signing and managing.
                    </p>
                    <button>Take our product tour</button>
                </div>

                <div className="stn-article-img">
                    <img src={frameImg} alt="" />
                </div>
            </div>

            {/* 3-qism */}
            <div className="section-data">
                <div className="stn-header">
                    <ul className="stn-header-ul">
                        <li><a href="#">Create</a></li>
                        <li><a href="#">Collaborate</a></li>
                        <li><a href="#">Sign</a></li>
                        <li><a href="#">Manage</a></li>
                        <li><a href="#">Analyze</a></li>
                        <li><a href="#">Integrate</a></li>
                    </ul>
                </div>

                <div className="stn-hero">
                    <div className="stn-hero-text">
                        <h3>Collaborate</h3>
                        <p>Work together on one version in real-time. No hocus pocus.</p>

                        <div className="stn-list-button">
                            <p><i className="fas fa-check"></i> Edit live</p>
                            <p><i className="fas fa-check"></i> Stay one step ahead</p>
                            <p><i className="fas fa-check"></i> Make fields interactive</p>
                        </div>
                        <button className="learn-btn">Learn more</button>
                    </div>

                    <div className="stn-header-img">
                        <img src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section