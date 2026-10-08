function Header({ name = "My Journal" }) {
  return (
    <header>
      <p className="eyebrow">A personal blog</p>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;