import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import "./Calender.scss";

const localizer = momentLocalizer(moment)

const Calender = (props) => (
    <div>
        <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    </div>
)

export default Calender;