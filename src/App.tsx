import EventsPage from './modules/events/page';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';

const App = () => {
  return (
    <main style={{
      padding: "1rem",
      maxWidth: "900px",
      margin: "0 auto",
    }}>
      <Header />
      <EventsPage />
      <Footer />
    </main>

  )
}

export default App