import "../Styles/Footer.css"
import logo from "../Assets/LogoDARK.svg"

function Footer() {
    return (
        <footer className="footer">

            {/* TOP */}
            <div className="footer-top">

                <div className="footer-col footer-brand">
                    <img src={logo} alt="Oneflow logo" className="footer-logo" />
                    <p>
                        Headquarters:<br />
                        Hudiksvallsgatan 8<br />
                        113 30 Stockholm, Sweden<br />
                        +46 8 517 297 70
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Why Oneflow</h4>
                    <a href="#">Product tour</a>
                    <a href="#">Smart contracts</a>
                    <a href="#">Built for scale</a>
                    <a href="#">Integrations</a>
                    <a href="#">Customer stories</a>
                </div>

                <div className="footer-col">
                    <h4>Learn</h4>
                    <a href="#">FAQ</a>
                    <a href="#">Onboarding</a>
                    <a href="#">Developers</a>
                    <a href="#">Help Center</a>
                    <a href="#">E-sign guide</a>
                </div>

                <div className="footer-col">
                    <h4>Security</h4>
                    <a href="#">Security Center</a>
                    <a href="#">Reliability</a>
                    <a href="#">Compliance</a>
                    <a href="#">E-signing legality</a>
                    <a href="#">GDPR</a>
                </div>

                <div className="footer-col">
                    <h4>More Oneflow</h4>
                    <a href="#">About us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Partners</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="footer-divider"></div>

            {/* CTA */}
            <div className="footer-cta">
                <div>
                    <h2>Get in the flow</h2>
                    <p>
                        Send, track and sign your contracts free for the rest<br />
                        of your life. No trickery.
                    </p>
                </div>

                <button>Get Oneflow free</button>
            </div>

            <div className="footer-divider"></div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <span>Login</span>
                <span>Privacy</span>
                <span>Cookie statement</span>
                <i className="fas fa-earth" aria-hidden="true"></i>
            </div>

        </footer>
    )
}

export default Footer