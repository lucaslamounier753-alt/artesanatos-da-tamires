import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { demoProducts } from "../lib/products";

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <div>
          <span className="eyebrow">Feito à mão, pensado para encantar</span>
          <h1>Carinho que floresce em cada detalhe.</h1>
          <p>Flores, buquês, lembranças e criações personalizadas com haste de chenille.</p>
          <div className="actions"><a className="primary" href="#produtos">Conhecer produtos</a><a className="secondary" href="#personalizados">Personalizar</a></div>
        </div>
        <div className="hero-art"><div>✿</div><span>Peças únicas, do seu jeito.</span></div>
      </section>

      <section className="features">
        <div><b>01</b><strong>Escolha</strong><p>Veja modelos e inspirações.</p></div>
        <div><b>02</b><strong>Personalize</strong><p>Cores, detalhes e mensagens.</p></div>
        <div><b>03</b><strong>Receba</strong><p>Acompanhe até a entrega.</p></div>
      </section>

      <section className="section" id="produtos">
        <span className="eyebrow">Vitrine</span><h2>Algumas criações</h2>
        <p className="lead">A estrutura está pronta para receber os produtos reais pelo painel administrativo.</p>
        <div className="grid">{demoProducts.map(p => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="custom" id="personalizados">
        <div><span className="eyebrow">Sua ideia, nossa criação</span><h2>Quer algo personalizado?</h2><p>O cliente poderá escolher tipo de peça, cores, quantidade e deixar observações.</p></div>
        <div className="fake-form"><label>Tipo de peça<select><option>Buquê</option><option>Flor individual</option><option>Lembrancinha</option></select></label><label>Cor principal<input placeholder="Ex.: rosa, lilás..." /></label><label>Observação<textarea rows="3" placeholder="Conte como imagina a peça" /></label><button className="primary">Solicitar orçamento</button></div>
      </section>

      <section className="section about" id="sobre"><div className="about-art">✿</div><div><span className="eyebrow">Sobre</span><h2>Artesanatos da Tamires</h2><p>Um espaço para transformar materiais simples em presentes afetivos, delicados e personalizados.</p></div></section>
    </main>
    <footer><strong>Artesanatos da Tamires</strong><span>© 2026 • Feito com carinho.</span></footer>
  </>;
}
