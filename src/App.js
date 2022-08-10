import ticketsData from './store/tickets.json';
import TicketsList from './components/TicketsList';
import Layout from './components/Layout/Layout';
import TicketsFilter from './components/TicketsFilter';

const App = () => {
  const { tickets } = ticketsData;

  return (
    <main>
      <Layout>
        <TicketsFilter />
        <TicketsList items={tickets} />
      </Layout>
    </main>
  );
};

export default App;
