import { Provider } from "react-redux";
import store from '../redux/store';

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
      )

}

export default App
