function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto grid max-w-4xl gap-12 px-6 py-20 text-center md:grid-cols-3 md:text-left">
        <div>
          <p className="font-display text-2xl text-paper">Shizuku</p>
          <p className="mt-2 text-sm text-paper-muted">Omakase · 雫</p>
        </div>
        <div>
          <p className="text-sm tracking-[0.2em] text-laque">ADRESSE</p>
          <p className="mt-3 text-sm leading-relaxed text-paper-muted">
            12 rue de l&apos;Encre
            <br />
            1000 Bruxelles
          </p>
        </div>
        <div>
          <p className="text-sm tracking-[0.2em] text-laque">HORAIRES</p>
          <p className="mt-3 text-sm leading-relaxed text-paper-muted">
            Mercredi — dimanche
            <br />
            Deux services : 18h30 · 21h00
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 text-center text-xs text-paper-muted">
        © {year} Shizuku — Site réalisé par {""}
        
        <a
          href="https://suelemarinel.github.io/"
          target="_blank"
          rel="noreferrer"
          className="underline transition-colors hover:text-paper"
        >
          Sue Le Marinel
        </a>
      </div>
    </footer>
  );
}

export default Footer;