import ticketsData from './store/tickets.json';
import TicketsList from './components/TicketsList';
import Layout from './components/Layout/Layout';

const App = () => {
  const { tickets } = ticketsData;

  return (
    <main>
      <Layout>
        <TicketsList items={tickets} />
      </Layout>
    </main>
  );
};

export default App;
