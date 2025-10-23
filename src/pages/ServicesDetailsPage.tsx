import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, MessageCircle, Check, Sparkles } from "lucide-react";
import { serviceData, socialLinks } from "@/lib/constants";
import type { ServiceType } from "@/types";

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? serviceData[serviceId as ServiceType] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-5">
      {/* Back Button */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={service.images[0] || "/placeholder.svg"}
            alt="Service Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {service.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-pink-600/0 group-hover:from-blue-600/40 group-hover:to-pink-600/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Pricing Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(service.pricing).map(([key, pkg]) => (
              <div
                key={key}
                className={`rounded-3xl p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  key === "professional"
                    ? "bg-linear-to-br from-emerald-50 to-teal-50 border-emerald-300 shadow-lg"
                    : "bg-white border-gray-200"
                }`}
              >
                {key === "professional" && (
                  <div className="inline-block bg-linear-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-slate-900 mb-4">
                  {pkg.price}
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-700 font-semibold">{pkg.hours}</p>
                  <p className="text-gray-700 font-semibold">{pkg.photos}</p>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${
                        socialLinks.whatsapp.text
                      }?text=I'm interested in the ${
                        pkg.name
                      } package for ${service.title.replace("&", "and")}`,
                      "_blank"
                    )
                  }
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    key === "professional"
                      ? "bg-linear-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700"
                      : "bg-gray-100 text-slate-900 hover:bg-gray-200"
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-linear-to-br from-gray-50 to-pink-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 md:p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 transition-colors"
              >
                <div className="bg-linear-to-br from-emerald-600 to-teal-600 p-2 rounded-lg shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-white -mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Ready to Book?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and book your
            session. We're excited to capture your special moments!
          </p>
          <button
            onClick={() => window.open(socialLinks.whatsapp.link, "_blank")}
            className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}
