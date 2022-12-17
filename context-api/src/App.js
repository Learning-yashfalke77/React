import Navbar from "./Navbar";
import './App.css';
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProviderss } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// Context provides a way to pass data through the component tree without having to pass props down manually 
// at every level.



function App() {
  return (
    <div className="App">

      <ThemeProviderss>     {/*  using context api    */}
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProviderss>

    </div>
  );
}

export default App;
