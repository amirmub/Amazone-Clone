import React, { useContext, useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../components/DataProvider/DataProvider';
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import ProductCard from '../../components/Product/ProductCard';
import classes from "./Order.module.css"

function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <LayOut>
      <div className={classes.order_container}>
        <h2>Your Orders</h2>
        <div className={classes.order_item}>
          {
            orders?.length === 0 && 
           <div>
             <hr style={{color:"#bfac40", border : "1.3px solid",margin:"15px"}} />
             <h3 className={classes.empty_order}>Oops! You Don't Have Order Yet</h3>
           </div>
          }
          {
            orders?.map((eachOrder,i)=>{
              return(
              <div key={i}  className={classes.order_items}>
            <hr style={{color:"#bfac40", border : "1.3px solid"}} />
           <p className={classes.id}>Order ID : {eachOrder?.id}</p>
                  {
                    eachOrder?.data?.basket?.map((order)=>{
                      return(
                        <ProductCard
                         flex ={true}
                         data ={order}
                         key={order.id}
                        />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </LayOut>
  );
}

export default Order;
