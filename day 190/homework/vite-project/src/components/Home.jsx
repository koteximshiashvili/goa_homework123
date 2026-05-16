import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
        My Home
        <p>react-router გამოიყენება იმისათვის რომ მომხმარებელი როდესაც ნავბარიდან სადმე გადადის ლინკი შეიცვალოს შეგვიძლია ერორებიც კი დავუწეროთ თუ არასწორად არის ჩაწერილი ლინკი. react-routerში გამოიყენება link თაგი რომელსაც უფრო მალე გადაყავს სხვა ლინკზე მომხმარებელი ვიდრე a თაგს.</p>
    </div>
  )
}

export default Home