import React from 'react'
import { connect } from 'react-redux'

export const Food = (props) => {
  return (
    <div>
         <body>

<section class="section-intro">
  <header>
   <h1 style="font-size:150px" /> 
   <h1>Famous Food</h1>
  </header>
  <a class="link-to-book" href="shop.html" style="font-size:50px">Shop</a>
   <div class="link-to-book-wrapper">
  
  </div> 
</section>

<section class="about-section">
  <article>

      <h2> What is special in Dhule?</h2>
    
    <p>

      Dhule is well known for purest 'milk and ghee' production, maximum cultivable land and production of groundnut,
       foremost in agro-based industries, leader in wind power generation. In the Sakri Taluka there is the one of Asia's
        Largest Solar projects near Chhadvel Korde village.
    </p>
  </article>
</section>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/rachel-park-hrlvr2ZlUNk-unsplash.jpg" class="d-block w-100" alt="food"/>
    </div>
    <div class="carousel-item">
      <img src="img/lily-banse--YHSwy6uqvk-unsplash.jpg" class="d-block w-100" alt="food" />
    </div>
    <div class="carousel-item">
      <img src="img/brooke-lark-aGjP08-HbYY-unsplash.jpg" class="d-block w-100" alt="food" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>




<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>
    </div>

  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Food)