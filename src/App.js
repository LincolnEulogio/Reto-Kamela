import { useState,Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Button from './components/button';

const App = () => {
  const [userData,setUserData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [activeUser,setActiveUser] = useState(false);
  const [activeLink,setActiveLink] = useState(0);

  const onClickHandler = () => {
    setActiveLink(0);
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then((response) => {
      console.log(response.data.results);
      setUserData(response.data.results);
    }).catch((error) => {
      console.log(error);
      setLoading(true);
    }).finally(() => {
      setLoading(false);
      setActiveUser(true);
    })
  }

  const icons = [
    'fas fa-user ',
    'fas fa-envelope',
    'fas fa-calendar-alt',
    'fas fa-map-marker',
    'fas fa-phone',
    'fas fa-lock',
  ];

  const PhraseGenerator = ({user}) => {
    const phrases = [
      `Hola mi nombre es ${user.name.first} ${user.name.last}`,
      `Mi correo es ${user.email}`,
      `Mi cumpleaños es es ${user.dob.date.slice(0,10)}`,
      `Mi pais es ${user.location.country}`,
      `Mi telefono es ${user.phone}`,
      `Mi contraseña es ${user.login.password}`,
    ];
    return <h3> {phrases[activeLink]} </h3>
  }

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  }


  return (
    <div className="App">
      <h1 className="titulo__app">Bienvenido a la Interfaz de Usuarios</h1>
      <Button isActive = {activeUser} clicked = {onClickHandler}  />
      {loading ? (
        <h3>Cargando!!!</h3>

      ):(
        <div className="app__user">
          {userData.map((user,index) => {
            return (
              <Fragment key={user.cell}>
                <img src={user.picture.large} alt="#" />
                <PhraseGenerator user = {user} />
                <div className="app__icons">
                  {icons.map((icon,index) => {
                    return (
                      <i className={icon} key={index} onMouseEnter={()=>activeLinkHandler(index)}
                      ></i>
                    )
                  })}
                </div>
              </Fragment>
              
            )
          })}
        </div>
        
      )}
      
    </div>
    
  );
  
}



export default App;

