"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement">Peças feitas à mão • Personalizações sob encomenda</div>
    <header>
      <Link href="/" className="brand"><b>AT</b><span><strong>Artesanatos</strong><small>da Tamires</small></span></Link>
      <button className="menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "open" : ""}>
        <Link href="/">Início</Link><Link href="/#produtos">Produtos</Link>
        <Link href="/#personalizados">Personalizados</Link><Link href="/#sobre">Sobre</Link>
        <Link href="/admin">Admin</Link>
      </nav>
      <button className="bag">Sacola <span>0</span></button>
    </header>
  </>;
}
