const Categories = ({ category, filterItems }) => {
    return (
        <div className="btn-container">
            {category.map((item, index) => {
                return (
                    <button
                        type="button"
                        className="btn"
                        key={index}
                        onClick={() => filterItems(item)}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    )
}
export default Categories;
