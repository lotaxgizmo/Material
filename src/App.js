import './App.css';
import Hero from './components/Hero'
import Whychoose from './components/Whychoose'
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles/styles';


function App() {
  return (
    <ThemeProvider theme={theme} >
{/* maxWidth="lg"  className='bg-black/95 s  h-screen !max-w-screen '  */}
      <div className="all borders bordder-red-100d  h-fit overflow-clip">
      <Container className=''>
          {/* <Hero/> */}
          <Whychoose/>
      </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
