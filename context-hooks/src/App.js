import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Form from './Form';
import NavBar from './NavBar';
import PageContent from './PageContent';

function App() {
  return (
    <div>

      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <NavBar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>

    </div>
  );
}

export default App;
