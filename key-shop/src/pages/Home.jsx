import '../App.css';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';

function Home({addToCart}) {
  const products=[
    {
       name:'Cartoon Key Chain',
       description:'Colorful and Cute Design',
       price:'$99',
       image:img2,
    },
    {
       name:'Name Key Chain',
       description:'Customized with your name',
       price:'$149',
       image:img3,
    },
    {
       name:'Lather Key Chain',
       description:'Premium and classy Look',
       price:'$199',
       image:img4,
    },
  ]
  return (
    <div className= "app">
    {/*hero section */}
      <section className = "hero">
        <div className ="heroText">
            <h2>Beautiful Key Chain for Every Style </h2>
            <p>
              Explore Stylish cute and Customized key Chains
               for yourslef and Family and your Friends.
            </p>
            <button>Shop Now</button>
        </div>
        <div>
          <img src = {img1} />
        </div>
      </section>
      {/* products section*/}
      <section className ="products">
        <h2>Popular Key Chains</h2>
        <div className ="productGrid">
       { products.map((product,index)=>{
        return(
          <div className ="card">
             <div className ="imageBox">
              <img src ={product.image}  height="150" width="180"/>
             </div>
             <h3>{product.name}</h3>
             <p>{product.description}</p>
             <strong>{product.price}</strong>
             <br/>
             <button className ="cartBtn" onClick={addToCart}>Add to Cart</button>
          </div>
        )
          
       })
       }
          
        </div>
      </section>
      {/*about section */}
      <section className ="about">
       <h2>Why you chose us?</h2>
       <p>
        We provide affordable , durable and nice degines, perfect for gifting an daily uses.
       </p>
      </section>
    </div>
  );
}

export default Home;