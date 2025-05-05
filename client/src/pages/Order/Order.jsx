import React, { useContext, useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../components/DataProvider/DataProvider';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import ProductCard from '../../components/Product/ProductCard';
import classes from "./Order.module.css";

function Order() {
  const [{ user }] = useContext(DataContext);
  const [latestOrder, setLatestOrder] = useState(null);

  useEffect(() => {
    if (!user) {
      setLatestOrder(null);
      return;
    }

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      if (allOrders.length > 0) {
        setLatestOrder(allOrders[0]); //  Only take the most recent order
      } else {
        setLatestOrder(null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <LayOut>
      <div className={classes.order_container}>
        <h2>Your Orders</h2>
        <div className={classes.order_item}>
          {!latestOrder && (
            <div>
              <hr style={{ color: "#bfac40", border: "1.3px solid", margin: "15px" }} />
              <h3 className={classes.empty_order}>
                Oops! You Haven't Purchased Anything Yet
              </h3>
            </div>
          )}

          {latestOrder && (
            <div className={classes.order_items}>
              <hr className={classes.order_item_hr} />
              <p className={classes.id}>Order ID: {latestOrder.id}</p>

              {latestOrder?.data?.basket?.map((product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  flex={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </LayOut>
  );
}

export default Order;
