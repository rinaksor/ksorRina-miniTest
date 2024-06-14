function header({batchName}) {
  return (
    <header id="header">
      <img src={pnLogo} alt="PN Logo" />
      <h1>Students results for {batchName}</h1>
    </header>
  );
}

export default header;
