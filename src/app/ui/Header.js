function Header() {
  return (
    <header>
      <div className="imgDiv">
        <img
          src="/images/torch_xsmall.webp"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <h1>Young Women&apos;s Website</h1>
      <nav>
        {/* <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/survey">Survey</a>
        </p>
        <p>
          <a href="/chat">Chat</a>
        </p>
        <p>
          <a href="/prof">Profile</a>
        </p> */}
      </nav>
    </header>
  );
}

export default Header;
