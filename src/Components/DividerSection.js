import dstnlogos from "../Assets/Dstnlogos.svg"
import userimgcard1 from "../Assets/usercardimg1.svg"
import userimgcard2 from "../Assets/usercardimg2.svg"
import userimgcard3 from "../Assets/usercardimg3.svg"
import userimgcard4 from "../Assets/usercardimg4.svg"
import box1logo from "../Assets/box1logo.svg"
import box2logo from "../Assets/boxlogos2.svg"
import box4logo from "../Assets/box4logo.svg"
import asideboximg1 from "../Assets/asideboximg1.svg"
import asideboximg2 from "../Assets/asideboximg2.svg"
import "../Styles/DividerSection.css"

function DividerSection() {
    const usercards = [
        {
            img: userimgcard1,
            name: "Mattias Johnson",
            namedata: "Key Account Manager",
            namework: "Sweco",
            title: "With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin can now be spent on selling and closing!",
            button: "Read full story"
        },
        {
            img: userimgcard2,
            name: "Elin Skoglund",
            namedata: "HR Business Partner",
            namework: "Hedin Bil",
            title: "The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.",
            button: "Read full story"
        },
        {
            img: userimgcard3,
            name: "Tor Myhrman",
            namedata: "Head of Indirect Sourcing",
            namework: "Systembolaget",
            title: "From board meeting protocols to GDPR agreements and approval of keycards — Oneflow has removed the pains we weren’t even aware of.",
            button: "Read full story"
        },
        {
            img: userimgcard4,
            name: "Jonatan Larsson",
            namedata: "Head of People",
            namework: "Kundo",
            title: "With Oneflow, it’s very easy to create contracts and templates. Instead of uploading a PDF for signing, we create the contract on the same platform as we sign.",
            button: "Read full story"
        }
    ]

    return (
        <div className="dstn-container">
            <div className="dstn-user-comment">
                <h2>Don’t just take our word for it…</h2>
                <div className="user-content">
                    {usercards.map((item, index) => (
                        <div className="user-card" key={index}>
                            <p>{item.title}</p>
                            <button className="user-btn">{item.button}</button>
                            <div className="user-card-img">
                                <img src={item.img} alt={item.name} />
                                <div className="user-info">
                                    <span className="user-name">{item.name}</span>
                                    <span className="user-role">{item.namedata}</span>
                                    <span className="user-company">{item.namework}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="dstn-logos">
                <div className="logos-text">
                    <h2>Seamless integrations</h2>
                    <p>Integrate your favorite tools with your contract workflow and work wonders.</p>
                    <button>View all integrations</button>
                </div>
                <img src={dstnlogos} alt="Integration logos" />
            </div>

            <div className="dstn-imgs-content">
                <div className="imgs-ctt-header">
                    <h2>And for our next trick…</h2>
                    <button>Visit our blog</button>
                </div>

                <div className="imgs-ctt-hero">
                    <div className="imgs-box1">
                        <div className="box1-text">
                            <button>Article</button>
                            <h2>A Basic Guide on E-signatures and What Makes Them Legally Binding</h2>
                            <span>E-signature | 11 min read</span>
                        </div>
                        <img src={box1logo} alt="E-signature article illustration" />
                    </div>

                    <div className="imgs-box2">
                        <img src={box2logo} alt="Online document signing guide illustration" />
                        <button>Guide</button>
                        <h2>29 documents you can sign online in 2021</h2>
                        <span>Contract automation | 18 min read</span>
                    </div>

                    <div className="imgs-box3">
                        <button>Customer Story</button>
                        <h2>Sweco</h2>
                        <button>Read full story</button>
                    </div>

                    <div className="imgs-box4">
                        <img src={box4logo} alt="Digital sales article illustration" />
                        <button>Article</button>
                        <h2>Master digital sales: How to close deals when you’re not allowed to shake hands</h2>
                        <span>Sales | 6 min read</span>
                    </div>
                </div>
            </div>

            <div className="dstn-aside">
                <h2>More from Oneflow</h2>
                <div className="aside-card-box">
                    <div className="aside-boxs-card">
                        <img src={asideboximg1} alt="One platform for all departments" />
                        <span>One platform. All departments</span>
                        <h2>Create, sign and manage any type of agreement you can think of</h2>
                        <button>Find out more</button>
                    </div>
                    <div className="aside-boxs-card">
                        <img src={asideboximg2} alt="Why Oneflow illustration" />
                        <span>Why Oneflow</span>
                        <h2>Six reasons why teams around the world love the magic of flow</h2>
                        <button>Find out more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DividerSection