import React from "react";
import logo from './logo.svg'
import Customer from './component/Customer'
import './App.css'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '황태환',
  'birthday': '950318',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김민우',
  'birthday': '940318',
  'gender': '남자',
  'job': '노예?'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '송창섭',
  'birthday': '940318',
  'gender': '남자',
  'job': '리더'
}
]

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />)
      })}
    </div>

  );
}

export default App;
