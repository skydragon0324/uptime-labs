// pages/_app.js
import "../styles/global.css"; // Import global CSS
import { PokemonProvider } from "../context/PokemonContext";
function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  );
}
export default MyApp;
