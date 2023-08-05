import './App.css';
import Hero from './components/Hero'
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles/styles';


function App() {
  return (
    <ThemeProvider theme={theme} >
{/* maxWidth="lg"  className='bg-black/95 s  h-screen !max-w-screen '  */}
      <div className="all bg-black/95 h-screen">
      <Container className=''>
          <Hero/>
      </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;