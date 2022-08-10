import Card from './UI/Card';
import CurrencyWidget from './Filters/CurrencyWidget';
import TransfersWidget from './Filters/TransfersWidget';
const TicketsFilter = (props) => {
  return (
    <Card>
      <CurrencyWidget />
      <TransfersWidget />
    </Card>
  );
};

export default TicketsFilter;
