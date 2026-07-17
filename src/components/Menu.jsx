const services = [
  { num: "01", name: "Chawanmushi", detail: "flan d'œuf soyeux, dashi, yuzu" },
  { num: "02", name: "Hirame", detail: "limande sauvage, kombu, fleur de sel" },
  { num: "03", name: "Akami", detail: "maigre de thon rouge, shoyu maturé" },
  { num: "04", name: "Chutoro", detail: "thon mi-gras, wasabi frais râpé" },
  { num: "05", name: "Hotate", detail: "noix de Saint-Jacques, sudachi" },
  { num: "06", name: "Uni", detail: "oursin, riz au vinaigre rouge" },
  { num: "07", name: "Unagi", detail: "anguille laquée, sansho" },
  { num: "08", name: "Wan", detail: "bouillon clair, saison" },
  { num: "09", name: "Otoro", detail: "ventre de thon, braise binchotan" },
  { num: "10", name: "Tamago", detail: "omelette sucrée, crevette, yamaimo" },
  { num: "11", name: "Miso", detail: "soupe de miso rouge, palourdes" },
  { num: "12", name: "Kanmi", detail: "douceur du moment, thé matcha" },
];

function Menu() {
  return (
    <section className="bg-ink-soft py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-sm tracking-[0.3em] text-laque">LE MENU</p>
          <h2 className="mt-6 text-4xl md:text-5xl text-paper">
            Douze services
          </h2>
          <p className="mt-6 text-paper-muted">
            Le menu change chaque soir. Celui-ci n&apos;est qu&apos;un
            souvenir — le vôtre reste à écrire.
          </p>
        </div>

        <ol className="mt-20">
          {services.map((service) => (
            <li
              key={service.num}
              className="group flex items-baseline gap-6 border-b border-paper/10 py-6 first:border-t"
            >
              <span className="font-display text-lg text-laque">
                {service.num}
              </span>
              <span className="font-display text-2xl text-paper">
                {service.name}
              </span>
              <span className="ml-auto text-right text-sm text-paper-muted">
                {service.detail}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-sm text-paper-muted">
          Menu unique — 180 € par personne, accord saké en supplément.
        </p>
      </div>
    </section>
  );
}

export default Menu;