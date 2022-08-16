import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import filterTickets from './utils/filter';

import Header from './components/Layout/Header';
import Logo from './components/UI/Logo';
import Main from './components/Layout/Main';
import Sideblock from './components/Layout/Sideblock';
import Content from './components/Layout/Content';

import Card from './components/UI/Card';
import TicketsList from './components/TicketsList';
import NoTicketFound from './components/Ticket/NoTicketFound';
import CurrencySwitcher from './components/CurrencySwitcher';
import Filters from './components/Filters';

import ticketData from './api/tickets.json';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();
  const [currency, setCurrency] = useState({ locale: 'ru-RU', label: 'RUB' });

  useEffect(() => {
    // "Fetching" tickets data
    const data = ticketData.tickets.map((ticket) => ({
      ...ticket,
      id: uuidv4(),
    }));
    setTickets(data);
  }, []);

  useEffect(() => {
    if (selectedFilters) {
      //when filters are loaded and|or changed
      //filter and update tickets
      setFilteredTickets(filterTickets(tickets, selectedFilters));
    }
  }, [selectedFilters, tickets]);

  const filterHandler = (selected) => {
    setSelectedFilters(selected);
  };

  const currencyHandler = (selected) => {
    setCurrency(selected);
  };

  return (
    <>
      <Header>
        <a href='/'>
          <Logo />
        </a>
      </Header>
      <Main>
        <Sideblock>
          <Card>
            <CurrencySwitcher onCurrencyChange={currencyHandler} />
            <Filters onFiltersChanged={filterHandler} />
          </Card>
        </Sideblock>
        <Content>
          {filteredTickets.length > 0 && (
            <TicketsList tickets={filteredTickets} currency={currency} />
          )}
          {filteredTickets.length === 0 && <NoTicketFound />}
        </Content>
      </Main>
    </>
  );
};

export default App;
