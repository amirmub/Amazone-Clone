import { Link } from 'react-router-dom'
import classes from './CategoryCard.module.css'

function CategoryCard({data}) {
  console.log(data);
  
  return (
    <div className={classes.catagoryCard}>
      <Link to={`/category/${data.name}`}>
        <div className={classes.catagoryCard__content}>
          <h2>{data.title}</h2>
        </div>
        <div className={classes.catagoryCard__image}>
          <img src={data.imgLink} alt="" />
        </div>
          <p>Shop now</p>
      </Link>
    </div>
  )
}

export default CategoryCard
