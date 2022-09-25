import react from "react";
import Header from "./components/Header/index";
import GlobalStyle from "./components/styles/global";
import { ThemeProvider } from "styled-components";
import light  from "./components/styles/themes/light";
import dark from "./components/styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import { Home } from "./pages/Home/";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";

const App = () => {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark: light);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Home />
      <AboutMe />
      <Contact />
    </div>
    </ThemeProvider>
   
  );
};


export default App;
