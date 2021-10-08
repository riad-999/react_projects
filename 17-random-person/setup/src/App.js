import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  //states 
  const [loading,setLoading] = useState(true);
  const [person,setPerson] = useState(null);
  const [title,setTitle] = useState('name');
  const [value,setValue] = useState('random');
  //handlers 
  const handleValue = (event) => {
    const attr = event.currentTarget.dataset.attr;
    setTitle(attr);
    setValue(person[attr]);
  }
  //functions
  const getPerson = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {
      dob: { age },
    } = person
    const {
      street: { number, name },
    } = person.location

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }
  //effects
  useEffect(() => {
    getPerson()
  }, [])
  return (
    <main>
      <div className="block bcg-balck">

      </div>
      <div className="block">
        <div className="container">
          <img src={person ? person.image : defaultImage}
           alt="random user" className="user-img"></img>
           <p className="user-title">my {title} is</p>
           <p className="user-value">{value}</p>
           <div className="value-list">

            <button className="icon" data-attr="name"
            onMouseOver={handleValue}><FaUser />
            </button>
            
            <button className="icon" data-attr="email"
            onMouseOver={handleValue}><FaEnvelopeOpen />
            </button>

            <button className="icon" data-attr="age"
            onMouseOver={handleValue}><FaCalendarTimes />
            </button>

            <button className="icon" data-attr="street"
            onMouseOver={handleValue}><FaMap />
            </button>

            <button className="icon" data-attr="phone"
            onMouseOver={handleValue}><FaPhone />
            </button>

            <button className="icon" data-attr="password"
            onMouseOver={handleValue}><FaLock />
            </button>
           </div>
           <button type="button" className="btn" onClick={getPerson}>
             {loading ? "loading..." : 'random user'}
           </button>
        </div>
      </div>
    </main>
  );
}

export default App
