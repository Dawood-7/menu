const MenuItem = ({ id, title, price, img, desc }) => {
  // console.log(item);
  // const { id, title, price, img, desc } = item;
  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
