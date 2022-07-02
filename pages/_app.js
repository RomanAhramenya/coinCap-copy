
import "../styles/globals.css";
import { Provider } from "react-redux";
import getStore, { store, wrapper } from "../app/store/store";


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp
// export default wrapper.withRedux(MyApp);