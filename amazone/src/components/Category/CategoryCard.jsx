import classes from './CategoryCard.module.css'

function CategoryCard({data}) {
  return (
    <div className={classes.catagoryCard}>
      <a href="#">
        <div className={classes.catagoryCard__content}>
          <h2>{data.title}</h2>
        </div>
        <div className={classes.catagoryCard__image}>
          <img src={data.imgLink} alt="" />
        </div>
          <p>Shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard
