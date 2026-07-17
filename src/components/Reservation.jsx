function Reservation() {
  return (
    <section className="bg-ink py-32">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-laque">RÉSERVER</p>

        <h2 className="mt-6 text-4xl md:text-5xl text-paper">
          Huit places, un soir
        </h2>

        <p className="mt-8 text-paper-muted leading-loose">
          Deux services par soirée, du mercredi au dimanche — 18h30 et 21h00.
          Les réservations ouvrent le premier jour de chaque mois, pour le
          mois suivant.
        </p>

        <a
          href="tel:+32473468044"
          className="mt-12 rounded-lg inline-block bg-laque px-10 py-4 text-sm tracking-widest text-paper transition-colors hover:bg-laque-bright"
        >
          RÉSERVER PAR TÉLÉPHONE
        </a>

        <p className="mt-6 text-sm text-paper-muted">
          +32 4 73 46 80 44 — du mardi au samedi, 14h–17h
        </p>
      </div>
    </section>
  );
}

export default Reservation;