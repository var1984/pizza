import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import { useEffect, useState } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";


 function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://6390e8a665ff4183112266c2.mockapi.io/items")
        .then((res) => res.json())
        .then((json) => {    
            setItems(json);
            setIsLoading(false)
        });
        window.scrollTo(0,0)
    }, []);
    return (
        <div className="container">
           <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
          </div>
    )
}

export default Home