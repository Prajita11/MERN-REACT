import './Card.css'

function Card(props){
    return(
        <div class="card">
        <img src="https://via.placeholder.com/150" alt="Card image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">{props.title}</h2>
          <p class="card-description">This is a brief description of the card content. It can contain more details about the subject.</p>
          <a href="#" class="card-btn">Read More</a>
        </div>
      </div>
    )
}
export default Card