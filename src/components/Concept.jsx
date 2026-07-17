function Concept() {
  return (
    <section className="relative overflow-hidden bg-ink py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[28rem] leading-none text-paper/[0.1]"
      >
        雫
      </span>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-laque">LE CONCEPT</p>

        <h2 className="mt-6 text-4xl md:text-5xl text-paper">
          S&apos;en remettre au chef
        </h2>

        <p className="mt-8 text-paper-muted leading-loose">
          Omakase, « je m&apos;en remets à vous ». 
          <br />
          Chez Shizuku, il n&apos;y a
          pas de carte. Chaque soir, le chef compose un menu unique de douze
          services, dicté par la marée du matin et la saison. 
          <br />
          Huit places au
          comptoir, face au geste. Rien d&apos;autre.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-5xl text-paper">12</p>
            <p className="mt-2 text-sm text-paper-muted">services</p>
          </div>
          <div>
            <p className="font-display text-5xl text-paper">8</p>
            <p className="mt-2 text-sm text-paper-muted">places au comptoir</p>
          </div>
          <div>
            <p className="font-display text-5xl text-paper">1</p>
            <p className="mt-2 text-sm text-paper-muted">menu, chaque soir</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concept;