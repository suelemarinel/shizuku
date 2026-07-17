import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-7xl md:text-8xl text-paper">Shizuku</h1>
        <p className="mt-4 text-sm tracking-[0.3em] text-paper-muted">
          OMAKASE · 雫
        </p>
        <div className="mt-8 h-[3px] w-12 bg-laque" />
        <p className="mt-8 max-w-md text-paper-muted leading-relaxed">
          Douze services au comptoir.
        <br />
          Une soirée, un chef, le geste juste.
        </p>
      </div>
    </section>
  );
}

export default Hero;