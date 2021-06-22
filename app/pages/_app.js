import '../styles/global/class_reset.css';
import '../styles/global/class_app.scss';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp;
