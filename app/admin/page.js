import Header from "../../components/Header";
export default function Admin() {
  return <><Header/><main className="section admin">
    <span className="eyebrow">Painel administrativo</span><h1>Gestão da loja</h1>
    <p className="lead">Estrutura inicial do painel. Na conexão com o Supabase, esta área terá login e dados reais.</p>
    <div className="admin-grid">
      <div><small>Produtos</small><strong>0 reais</strong><p>Cadastrar fotos, preços, estoque e personalizações.</p><button>Gerenciar produtos</button></div>
      <div><small>Pedidos</small><strong>0</strong><p>Acompanhar pagamento, produção, envio e entrega.</p><button>Ver pedidos</button></div>
      <div><small>Encomendas</small><strong>0</strong><p>Organizar solicitações personalizadas.</p><button>Ver encomendas</button></div>
    </div>
  </main></>;
}
