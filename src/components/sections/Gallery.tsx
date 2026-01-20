import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import sportsImg from "@/assets/sports.jpg";

const images = [
  { src: heroCampus, alt: "Campus View", span: "col-span-2 row-span-2" },
  { src: gallery1, alt: "Cultural Festival", span: "" },
  { src: gallery2, alt: "Science Exhibition", span: "" },
  { src: gallery3, alt: "Yoga Session", span: "col-span-2" },
  { src: gallery4, alt: "Library", span: "" },
  { src: sportsImg, alt: "Sports Day", span: "" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Photo Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Life at <span className="text-gradient">Ishakulam</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Glimpses of our vibrant campus life, academic activities, cultural events, 
            and the beautiful moments shared by our students and faculty.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-xl cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-heading font-bold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
