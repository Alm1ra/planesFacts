import './Fact.css'

export default function Fact(props) {
    return (
        <div className="fact-tile">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}