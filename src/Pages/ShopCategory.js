import React,{useContext} from 'react';
import './CSS/Shopcategory.css';
import {ShopContext} from '../Components/Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

//for redering shopping items based on men,women and kids

const ShopCategory = (props)=> {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexsort'>
         <p>
          <span> Showing 1-12</span> out of 36 products
         </p>
         <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
         </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          //based on the props value(men,women,kids which we are selecting in navbar)
          //it will check with item category value
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  )
}
export default ShopCategory


