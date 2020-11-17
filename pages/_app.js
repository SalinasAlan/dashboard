import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styled';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
