import Card from './UI/Card';
import CurrencyWidget from './Filters/CurrencyWidget';
import TransfersWidget from './Filters/TransfersWidget';
const TicketsFilter = (props) => {

  const handleTransfersChanged = (selected) => {
    props.onFilterChanged(selected)
  }

  return (
    <Card>
      <CurrencyWidget />
      <TransfersWidget options={props.filters} onFiltersChanged={handleTransfersChanged} />
    </Card>
  );
};

export default TicketsFilter;
