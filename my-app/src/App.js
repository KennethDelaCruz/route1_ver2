import logo from './logo.svg';
import './App.css';
import {useQuery, gql} from "@apollo/client"

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  function ExchangeRates() {
    const {loading, error, data} = useQuery(EXCHANGE_RATES);
    if(loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
  return (
    <div className="container">
      <button>This button is to test</button>
      <ExchangeRates />
    </div>
  );
}

export default App;
