import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore"
import StoreContext from "./contexts/storeContexts";
import { Provider } from "react-redux";
import BugsRedux from "./components/BugsRedux";
import BugsReduxFunctional from "./components/BugsReduxFunctional";

const store = configureStore()

// function App() {
//   return (
//     <div>
//       <StoreContext.Provider value={store}>
//         <Bugs />
//       </StoreContext.Provider>
//     </div>
//   );
// }

// using react-redux library

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Bugs /> */}
        {/* <BugsRedux/> */}
        <BugsReduxFunctional />
      </Provider>
    </div>
  );
}

export default App;
