import "../Styles/Footer.css"
import logo from "../Assets/LogoDARK.svg"

function Footer() {
    return (
        <footer className="footer">

            {/* TOP */}
            <div className="footer-top">

                <div className="footer-col footer-brand">
                    <img src={logo} alt="Oneflow" className="footer-logo" />
                    <p>
                        Headquarters:<br />
                        Hudiksvallsgatan 8<br />
                        113 30 Stockholm, Sweden<br />
                        +46 8 517 297 70
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Why Oneflow</h4>
                    <a>Product tour</a>
                    <a>Smart contracts</a>
                    <a>Built for scale</a>
                    <a>Integrations</a>
                    <a>Customer stories</a>
                </div>

                <div className="footer-col">
                    <h4>Learn</h4>
                    <a>FAQ</a>
                    <a>Onboarding</a>
                    <a>Developers</a>
                    <a>Help Center</a>
                    <a>E-sign guide</a>
                </div>

                <div className="footer-col">
                    <h4>Security</h4>
                    <a>Security Center</a>
                    <a>Reliability</a>
                    <a>Compliance</a>
                    <a>E-signing legality</a>
                    <a>GDPR</a>
                </div>

                <div className="footer-col">
                    <h4>More Oneflow</h4>
                    <a>About us</a>
                    <a>Pricing</a>
                    <a>Partners</a>
                    <a>Blog</a>
                    <a>Careers</a>
                    <a>Contact</a>
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
                <i className="fas fa-earth"></i>
            </div>

        </footer>
    )
}

export default Footer