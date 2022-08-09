import Ticket from "./Ticket/Ticket"
import './TicketsList.module.scss'
import { v4 as uuidv4 } from "uuid";


const TicketsList = (props) => {
    return (
        <ul>
            {props.items.map(item => <Ticket key={uuidv4()} data={item} />)}
        </ul>
    )
}

export default TicketsList