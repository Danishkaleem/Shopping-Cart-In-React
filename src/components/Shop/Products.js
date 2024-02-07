import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "Fantastic Journey",
    description: "Embark on an epic adventure!",
  },
  {
    id: "p3",
    price: 8,
    title: "Cooking Essentials",
    description: "All you need to become a master chef",
  },
  {
    id: "p4",
    price: 15,
    title: "Gardening Guide",
    description: "Grow your own paradise",
  },
  {
    id: "p5",
    price: 12,
    title: "Artistic Inspiration",
    description: "Unleash your creativity",
  },
  {
    id: "p6",
    price: 20,
    title: "Fitness Formula",
    description: "Achieve your health goals",
  },
  {
    id: "p7",
    price: 18,
    title: "Home Decor Handbook",
    description: "Transform your living space",
  },
  {
    id: "p8",
    price: 25,
    title: "DIY Crafts Collection",
    description: "Craft your way to happiness",
  },
  {
    id: "p9",
    price: 30,
    title: "Travel Tales",
    description: "Explore the world through stories",
  },
  {
    id: "p10",
    price: 22,
    title: "Music Masterclass",
    description: "Unlock your musical potential",
  }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
