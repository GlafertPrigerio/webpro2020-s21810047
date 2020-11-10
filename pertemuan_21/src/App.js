//import Header from './components/Header';
import './App.css';
import Card from './Components/Card'
import {person} from './utils/person';

//import Hello from './components/Hello';
//import Content from './components/Content';
//import Nama from './components/Nama';
//import Ttl from './components/Ttl';
//import Alamat from './components/Alamat';


function App() {
  return( 
    <>
   {person.map((item)=> {
     return(
       <Card
        name={item.name}
        institution={ item.institution}
        address = {item.address}
        phoneNumber= {item.phoneNumber}
      />
     );
   })}
   </>
   );
  }


/*
  <Header/>
  <Hello/>
  <Nama/>
  <Alamat/>
  <Ttl/>

  <Content/>
  
  
    </>
  );
} 
*/
export default App;
// keterangan : jsx hanya memiliki 1 komponen yang dikembalikan
