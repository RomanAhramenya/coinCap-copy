import { Provider } from 'react-redux'
import '../styles/globals.css'
import getStore from './../app/store/store'
function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;