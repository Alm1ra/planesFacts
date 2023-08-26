import './Fact.css'
import Card from './Card'

export default function Fact(props) {
    return (
        <Card className="fact-tile">
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Card>
    )
}