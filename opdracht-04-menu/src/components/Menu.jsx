const Menu = ({id, title, category, price, img, desc}) => {
    return ( 
        <>
        <section className="menuitem" key={id}>
            <div >
                <img src={img}/>
                <h2>{title}</h2>
                <h4>{category}</h4>
                <h3>€{price}</h3>
                <p>{desc}</p>
            </div>
        </section>
        </>
    );
}
 
export default Menu;