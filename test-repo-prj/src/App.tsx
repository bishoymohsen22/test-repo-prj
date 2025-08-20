import { useState } from 'react';


const breads = ['brown bread', 'white bread', 'milk bread', 'sugar-free bread'];
const sauces = ['mayo', 'ketchup', 'mustard', 'hot sauce', 'ranch', 'sriracha', 'chilli garlic'];
const mains = ['beef', 'chicken', 'mutton'];


function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function App() {
  const [sandwich, setSandwich] = useState([
    {
      bread: getRandom(breads),
      sauce: getRandom(sauces),
      main: getRandom(mains),
    },
  ]);
  const makeNewSandwich = () => {
    setSandwich([
      {
        bread: getRandom(breads),
        sauce: getRandom(sauces),
        main: getRandom(mains),
      },
      
    ]);
    
  }
//  const handlecreate =()=>{
   // setSandwich(sandwich.concat({bread:getRandom(breads),sauce:getRandom(sauces),main: getRandom(mains)}))
//  }
    
  const containerStyle = {
    width: '100%',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    alignItems: 'flex-start'
  };


  return (
    <div style={{
      width:'100%',
      display:'flex',
      backgroundColor:'red'
    }}>
      <div style={containerStyle}>
        
        <p id="text">sandwiches. </p>
        <div id="sandwich-list"></div>
        <p>Bread: {sandwich[0].bread}</p>
        <p>Sauce: {sandwich[0].sauce}</p>
        <p>Main Ingredient: {sandwich[0].main}</p>
        <button onClick={makeNewSandwich}>Make New Sandwich</button>
       
      </div>
    </div>

  );
}

export default App;

