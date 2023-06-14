

const Item = ({id, title, img, description, price, stock}) => {

return (
  <article>
    <h2>{title}</h2>
    <picture>
      <img src="{img}" alt={title} />
    </picture>
    <p>Descripción: {description}</p>
    <p>Precio: $ {price}</p>
    <p>Stock: {stock}</p>
    <button>Ver detalle</button>
  </article>
)


}