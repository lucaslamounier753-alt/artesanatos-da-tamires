import Header from "../../../components/Header";
import { demoProducts } from "../../../lib/products";
import Link from "next/link";

export default function Product({ params }) {
  const product = demoProducts.find(p => p.id === params.id);
  if (!product) return <><Header/><main className="section"><h1>Produto não encontrado</h1><Link href="/">Voltar</Link></main></>;
  return <><Header/><main className="section product-page">
    <div className={`product-image big ${product.tone}`}>{product.symbol}</div>
    <div><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p className="lead">{product.description}</p>
    <h3>{product.price ? `R$ ${product.price}` : "Preço será cadastrado no painel"}</h3>
    <label className="field">Cor desejada<input placeholder="Informe a cor" /></label>
    <label className="field">Observações<textarea rows="4" placeholder="Detalhes da encomenda" /></label>
    <button className="primary">Adicionar à sacola</button></div>
  </main></>;
}
