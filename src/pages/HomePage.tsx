import type React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
} from "lucide-react";
import {
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa";
import {
  categories,
  services,
  testimonials,
  allPhotos,
  socialLinks,
  heroImages,
} from "@/lib/constants";
import type { PhotoCategory } from "@/types";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [currentCategory, setCurrentCategory] = useState<PhotoCategory>("all");

  const filteredPhotos = allPhotos.filter((photo) =>
    photo.category.includes(currentCategory)
  );
  const displayPhotos = filteredPhotos.slice(0, 11);

  const openPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const goToPrevious = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const goToNext = () => {
    if (
      selectedPhotoIndex !== null &&
      selectedPhotoIndex < displayPhotos.length - 1
    ) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "Escape") {
      closePhoto();
    }
  };

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section id="home" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              Capturing Life's
              <span className="block text-gold font-normal">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Professional photography services that transform fleeting moments
              into timeless memories through artistic vision and technical
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="md:col-span-2">
              <img
                src={heroImages[0]}
                alt="Hero image 1"
                className="w-full h-[400px] md:h-[512px] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <img
                src={heroImages[1]}
                alt="Hero image 2"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <img
                src={heroImages[2]}
                alt="Hero image 3"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gold/20 to-teal-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold mb-3">About Us</h2>
              <div className="space-y-4 text-gray-600">
                <h4 className="text-3xl text-slate-900 md:text-4xl font-bold mb-3">
                  Our Story
                </h4>
                <p>
                  At Nobies Lens, we believe that every moment tells a story
                  worth preserving. Founded with a passion for capturing life's
                  most precious moments, we've dedicated ourselves to creating
                  timeless images that evoke emotion and preserve memories.
                </p>
                <p>
                  Our journey began with a simple camera and a dream to freeze
                  time in its most beautiful form. Today, we're proud to serve
                  individuals and corporations, bringing artistic vision and
                  technical excellence to every shoot.
                </p>

                <h4 className="text-3xl text-slate-900 md:text-4xl font-bold mb-3 pt-2">
                  Our Vision
                </h4>
                <p className="flex flex-col gap-2">
                  To be the premier photography studio recognized for
                  transforming ordinary moments into extraordinary visual
                  narratives. We strive to push creative boundaries while
                  maintaining the authenticity and emotion that makes each
                  photograph uniquely powerful.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gold mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gold mb-1">5</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gold mb-1">
                    10k+
                  </div>
                  <div className="text-sm text-gray-600">Photos Captured</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImages[3]}
                alt="About Us"
                className="w-full h-[600px] object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive photography services tailored to capture your unique
              moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 md:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] border-2 border-gray-100 text-left hover:border-gold"
                >
                  <div
                    className={`bg-linear-to-br ${service.color} p-4 rounded-2xl inline-block mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  <Link to={`/service/${service.id}`}>
                    <Button className="mt-4 md:w-fit w-full bg-gold hover:bg-gold text-white">
                      <span>Info Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-16 md:py-24 px-4 bg-linear-to-br from-gray-50 to-gold/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600">
              A glimpse of our finest work
            </p>
          </div>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={(value) =>
              setCurrentCategory(value as PhotoCategory)
            }
          >
            <TabsList className="gap-2 grid w-full grid-cols-4 bg-white shadow-lg rounded-2xl md:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={`rounded-xl text-xs md:text-sm capitalize ${
                    category === "corporate" || category === "creative"
                      ? "hidden md:block"
                      : ""
                  }`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={currentCategory} className="mt-5">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {displayPhotos.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => openPhoto(index)}
                    className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer border-4 border-white shadow-lg"
                  >
                    <img
                      src={photo.url || "/placeholder.svg"}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-linear-to-br from-blue-600/0 to-pink-600/0 group-hover:from-blue-600/40 group-hover:to-pink-600/40">
                      <Camera className="w-8 md:w-10 h-8 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}

                <div
                  onClick={() =>
                    window.open(socialLinks.instagram.link, "_blank")
                  }
                  className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 border-4 border-white shadow-lg"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <Instagram className="w-12 md:w-16 h-12 md:h-16 text-white mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white text-sm md:text-xl font-bold mb-1 md:mb-2">
                      View More
                    </p>
                    <p className="text-white/90 text-xs md:text-sm">
                      Follow us on Instagram
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-24 bg-linear-to-br from-gray-50 to-pink-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gold"></div>
            <p className="text-xl text-gray-600">
              What our clients say about us
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 transition-shadow duration-300 bg-white border-2 border-gray-100 shadow-lg rounded-3xl hover:shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-gray-700">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 bg-linear-to-br from-gold/20 to-teal-50/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Let's capture your special moments together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4 p-4 md:p-6 bg-white rounded-3xl border-2 border-gold/30 shadow-md">
                <div className="bg-gold p-3 rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {socialLinks.address.addr1}
                    <br />
                    {socialLinks.address.addr2} - {socialLinks.address.city},{" "}
                    {socialLinks.address.zip}
                    <br />
                    {socialLinks.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 md:p-6 bg-white rounded-3xl border-2 border-gold/30 shadow-md">
                <div className="bg-gold p-3 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">
                    Phone
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {socialLinks.phone.text}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 md:p-6 bg-white rounded-3xl border-2 border-gold/30 shadow-md">
                <div className="bg-gold p-3 rounded-2xl shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">
                    Email
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {socialLinks.email.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 md:mb-6">
                Connect With Us
              </h3>
              <button
                onClick={() => window.open(socialLinks.whatsapp.link, "_blank")}
                className="w-full flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-3 md:py-4 rounded-2xl hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold"
              >
                <MessageCircle className="w-5 md:w-6 h-5 md:h-6" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={() =>
                  window.open(socialLinks.instagram.link, "_blank")
                }
                className="w-full flex items-center justify-center space-x-3  text-white px-6 py-3 md:py-4 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl hover:from-purple-600 hover:to-pink-600"
              >
                <Instagram className="w-5 md:w-6 h-5 md:h-6" />
                <span>Follow on Instagram</span>
              </button>

              <button
                onClick={() => window.open(socialLinks.linkedin.link, "_blank")}
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 md:py-4 rounded-2xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold"
              >
                <Linkedin className="w-5 md:w-6 h-5 md:h-6" />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closePhoto}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <button
            onClick={closePhoto}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedPhotoIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          <img
            src={displayPhotos[selectedPhotoIndex].url || "/placeholder.svg"}
            alt={`Portfolio ${selectedPhotoIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />

          {selectedPhotoIndex < displayPhotos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <p className="text-white text-sm">
              {selectedPhotoIndex + 1} / {displayPhotos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
