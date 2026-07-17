import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1681270543584-8e541a1bb056?q=80&w=800&auto=format&fit=crop",
    alt: "Le chef préparant un plat",
  },
  {
    src: "https://images.unsplash.com/photo-1611519684855-7e9e5ddea991?q=80&w=800&auto=format&fit=crop",
    alt: "Service d'une assiette noire au comptoir",
  },
  {
    src: "https://images.unsplash.com/photo-1611519685019-46269a13fe91?q=80&w=800&auto=format&fit=crop",
    alt: "Céramique blanche présentée en main",
  },
  {
    src: "https://images.unsplash.com/photo-1681270527819-6b97ec33a67f?q=80&w=800&auto=format&fit=crop",
    alt: "Gros plan sur un plat dressé",
  },
  {
    src: "https://images.unsplash.com/photo-1681270496598-13c5365730c8?q=80&w=800&auto=format&fit=crop",
    alt: "Dégustation aux baguettes",
  },
  {
    src: "https://images.unsplash.com/photo-1635452065566-9c89471bb86c?q=80&w=800&auto=format&fit=crop",
    alt: "Boîte en bois garnie de sushis",
  },
];

function Gallery() {
  return (
    <section aria-label="Galerie" className="overflow-hidden bg-ink py-20">
      <div className="marquee flex w-max gap-6">
        {[...photos, ...photos].map((photo, i) => (
          <div
            key={i}
            className="relative h-64 w-96 flex-none overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={i < photos.length ? photo.alt : ""}
              fill
              sizes="384px"
              className="object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;