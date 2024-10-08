import { Link } from 'react-router-dom'
import './Home.css'
import Button from './assets/Button'
import Card from './assets/Card'

function Home(){

    return (
       <>
        <nav className="navbar">
        <div className="container">
            <a href="#" className="brand">My Website</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <Button haha="home" huhu="1"/>    
    <Card title="home page"/>

    <div className="main-content">
        <div className="container">
            <h1 style={{color: 'purple' , backgroundColor :'yellow'}}>Welcome to My Website</h1>
            <p>This is a simple page with a navbar and some content in the middle.</p>
            <p>You can customize this template to fit your needs. Happy coding!</p>
        </div>
    </div>
       </>
    )
}

export default Home