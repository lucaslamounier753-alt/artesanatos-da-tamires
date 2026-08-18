import Link from "next/link";
export default function ProductCard({ product }) {
  return <article className="product-card">
    <div className={`product-image ${product.tone}`}>{product.symbol}</div>
    <div className="product-info">
      <small>{product.category}</small>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-bottom">
        <strong>{product.price ? `R$ ${product.price}` : "Valor a definir"}</strong>
        <Link className="small-btn" href={`/produto/${product.id}`}>Ver peça</Link>
      </div>
    </div>
  </article>
}
