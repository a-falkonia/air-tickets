import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import filterTickets from './utils/filterTickets';

import TicketsList from './components/TicketsList';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import CurrencyToggle from './components/Filters/CurrencyToggle';
import TransfersCountFilter from './components/Filters/TransfersCountFilter';

import ticketData from './api/tickets.json';
import filtersData from './api/filters.json';

const App = () => {
  const filters = filtersData.filters[0].options; //Needs reworking, filters must not be hardcoded

  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();
  const [currency, setCurrency] = useState({ locale: 'ru-RU', label: 'RUB' });

  useEffect(() => {
    // "Loading" the tickets data
    let data = ticketData.tickets.map((ticket) => ({
      ...ticket,
      id: uuidv4(),
    }));
    setTickets(data);
  }, []);

  useEffect(() => {
    if (selectedFilters) {
      //when filters are loaded and|or changed
      console.log('selected filters:', selectedFilters);
      //filter and update tickets
      console.log(filterTickets(tickets, selectedFilters));
      setFilteredTickets(filterTickets(tickets, selectedFilters));
    }
  }, [selectedFilters, tickets]);

  const filterHandler = (selected) => {
    setSelectedFilters(selected);
  };

  const currencyHandler = (selected) => {
    setCurrency(selected);
    console.log(selected);
  };

  return (
    <main>
      <Layout>
        <Card>
          <CurrencyToggle onCurrencyChange={currencyHandler} />
          <TransfersCountFilter
            options={filters}
            onFiltersChanged={filterHandler}
          />
        </Card>
        <TicketsList tickets={filteredTickets} currency={currency} />
      </Layout>
    </main>
  );
};

export default App;
