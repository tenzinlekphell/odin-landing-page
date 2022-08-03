import './App.css';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import QuoteSection from './components/QuoteSection';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoSection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
