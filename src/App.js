import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import filterTickets from './utils/filterTickets';

import TicketsList from './components/TicketsList';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import CurrencyWidget from './components/Filters/CurrencyWidget';
import TransfersWidget from './components/Filters/TransfersWidget';

import ticketData from './api/tickets.json';
import filtersData from './api/filters.json';

const App = () => {
  const filters = filtersData.filters[0].options; //Needs reworking, filters must not be hardcoded

  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();

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

  return (
    <main>
      <Layout>
        <Card>
          <CurrencyWidget />
          <TransfersWidget options={filters} onFiltersChanged={filterHandler} />
        </Card>
        <TicketsList items={filteredTickets} />
      </Layout>
    </main>
  );
};

export default App;
