import React, { useState, type CSSProperties } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, AppBar,Toolbar,Box, Container, Typography,} from '@mui/material';

import Paper from '@mui/material/Paper';


const breads = ['brown bread', 'white bread', 'milk bread', 'sugar-free bread'];
const sauces = ['mayo', 'ketchup', 'mustard', 'hot sauce', 'ranch', 'sriracha', 'chilli garlic'];
const mains = ['beef', 'chicken', 'mutton'];


function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function HomePage() {
  return (
  <div>
  <h2>Welcome to the Home Page</h2>
  <img src="/cover1.jpg" alt="wallpapper" width="500" height="500"style={{display:"block",margin:"0 auto"}}></img>

  </div>
)

}

function AboutPage() {
  return (
  <div>
  <h2>This is the About Page</h2>
  <img src="/cover2.jpg" alt="wallpapper" width="500" height="500"style={{display:"block",margin:"0 auto"}}></img>
</div>
);
}

function MakeSandwichPage() {
  const [sandwich, setSandwich] = useState({
    bread: getRandom(breads),
    sauce: getRandom(sauces),
    main: getRandom(mains),
  });

  const makeNewSandwich = () => {
    setSandwich({
  
      bread: getRandom(breads),
      sauce: getRandom(sauces),
      main: getRandom(mains),
    });
  };

  const containerStyle: CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <img src="/coverr.jpg" alt="wallpapper" width="300" height="300"></img>
             <h3>Your Random Sandwich</h3>
            <p><strong>Bread:</strong> {sandwich.bread}</p>
      <p><strong>Sauce:</strong> {sandwich.sauce}</p>
      <p><strong>Main:</strong> {sandwich.main}</p>
         
        
      
     
      <Button variant="contained" onClick={makeNewSandwich}>
        Create Sandwich
      </Button>
    </div>
  );
}


function App() {
  return (
    <Router>
      
      
      <div    style={{
          padding: '20px',
          fontFamily: 'Arial',
          minHeight: '100vh',
          backgroundImage: 'url(D:\my photos\cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <nav style={{ marginBottom: '20px' }}>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
 <Paper elevation={0} />
<Paper />
<Paper elevation={3} />
            
            <React.Fragment>
            
      <AppBar position="fixed">
        <Toolbar>{'make your sandwich'}</Toolbar>
      <AppBar position="fixed">
  <Toolbar style={{ display: "flex", gap: "20px" }}>
    <Link to="/" style={{ fontSize: "20px", color: "white", textDecoration: "none" }}>
      Home
    </Link>
    <Link to="/about" style={{ fontSize: "20px", color: "white", textDecoration: "none" }}>
      About
    </Link>
    <Link to="/make-sandwich" style={{ fontSize: "20px", color: "white", textDecoration: "none" }}>
      Make Sandwich
    </Link>
  </Toolbar>
</AppBar>
           
      </AppBar>
      <Toolbar />
    </React.Fragment>
   
    
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/make-sandwich" element={<MakeSandwichPage />} />
        </Routes>
        
             <Box component="footer" sx={{ py: 3, px:75, mt: "auto", backgroundColor: "#11a6d7ff" ,  textAlign: "center"}}>
      <Container maxWidth="sm"
      >
        <Typography variant="body1">the footer</Typography>
      </Container>
    
    </Box>

    
      </div>

      

    </Router>
  );
}

export default App;
/*{sandwich.map(sandwich =>{
              return(
                <div>
                   <p><strong>Bread:</strong> {sandwich.bread}</p>
      <p><strong>Sauce:</strong> {sandwich.sauce}</p>
      <p><strong>Main:</strong> {sandwich.main}</p>
                </div>
              )
             })}*/