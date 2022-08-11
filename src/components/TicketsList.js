import Ticket from "./Ticket/Ticket"
import './TicketsList.module.scss'


const TicketsList = (props) => {
    return (
        <ul>
            {props.items.map(item => <Ticket key={item.id} data={item} />)}
        </ul>
    )
}

export default TicketsList