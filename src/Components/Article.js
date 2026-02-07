import "../Styles/Article.css"
import articleimg1 from "../Assets/articleimg1.svg"
import articleimg2 from "../Assets/articleimg2.svg"
import articleimg3 from "../Assets/articleimg3.svg"

function Article() {

    const cards = [
        {
            img: articleimg1,
            name: "Forget friction",
            title: "Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.",
            button: "Take the tour"
        },
        {
            img: articleimg2,
            name: "Unleash data",
            title: "Get faster and smarter with automated processes and intelligent insights that unlock the data inside your agreements. Leave behind the limitations of paper and PDFs. Just like that.",
            button: "Take the tour"
        },
        {
            img: articleimg3,
            name: "Take control",
            title: "Know what’s happening in real-time with a complete overview of all your contracts, all in one place. It’s all the visibility and transparency you need, at your fingertips.",
            button: "Take the tour"
        }
    ]

    return (
        <div className="article">
            <h2>The complete platform for smart contracts</h2>

            <div className="article-card">
                {cards.map((card, index) => (
                    <div className="card-box" key={index}>
                        <div className="card-img">
                            <img src={card.img} alt={card.name} />
                        </div>
                        <h3>{card.name}</h3>
                        <p>{card.title}</p>
                        <button>{card.button}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Article;