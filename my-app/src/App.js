import POKEMON_LIST from "./query/pokemon-list.js"
import {useQuery} from "@apollo/client"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import BotNavigation from './components/BotNavigation.jsx'

function App() {

  function Render() {
    return (

      <BotNavigation />

    )
  }

  function Pokemon() {
    const {loading, error, data} = useQuery(POKEMON_LIST);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>;
    console.log(data)
    return (
      <p>This is a test</p>
    )
  }


  return Render()
  // return (
  //   <div className="container">
  //     <button>This button is to test</button>
  //     <ExchangeRates />
  //   </div>
  // );
}

export default App;
