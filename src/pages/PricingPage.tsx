import { Check, Download, Sparkles, Camera, Award } from "lucide-react";
import jsPDF from "jspdf";
import { pricingPackages, socialLinks } from "@/lib/constants";

export default function PricingPage() {
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageHeight = doc.internal.pageSize.height;
    const marginBottom = 40;
    const maxY = pageHeight - marginBottom;

    const checkPageBreak = (currentY: number, spaceNeeded: number) => {
      if (currentY + spaceNeeded > maxY) {
        doc.addPage();
        return 40;
      }
      return currentY;
    };

    doc.setFont("Helvetica");
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);

    let yPosition = 40;
    doc.text("NOBIES LENS - PHOTOGRAPHY PACKAGES", 297.5, yPosition, {
      align: "center",
    });
    yPosition += 10;
    doc.setLineWidth(0.5);
    doc.line(40, yPosition, 555, yPosition);
    yPosition += 30;

    pricingPackages.forEach((pkg) => {
      yPosition = checkPageBreak(yPosition, 60 + pkg.features.length * 15);

      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.text(
        `${pkg.name.toUpperCase()} PACKAGE - ${pkg.price}${
          pkg.popular ? " ★ MOST POPULAR" : ""
        }`,
        40,
        yPosition
      );
      yPosition += 10;
      doc.setLineWidth(0.3);
      doc.line(40, yPosition, 555, yPosition);
      yPosition += 10;

      doc.setFontSize(12);
      doc.setFont("Helvetica", "normal");
      doc.text(pkg.description, 40, yPosition);
      yPosition += 20;

      doc.setFontSize(10);
      pkg.features.forEach((feature) => {
        yPosition = checkPageBreak(yPosition, 15);
        doc.text(`- ${feature}`, 50, yPosition);
        yPosition += 15;
      });

      yPosition = checkPageBreak(yPosition, 20);
      yPosition += 10;
      doc.setLineWidth(0.5);
      doc.line(40, yPosition, 555, yPosition);
      yPosition += 30;
    });

    yPosition = checkPageBreak(yPosition, 100);
    doc.setFontSize(14);
    doc.setFont("Helvetica", "bold");
    doc.text("Terms & Conditions", 40, yPosition);
    yPosition += 10;
    doc.setLineWidth(0.3);
    doc.line(40, yPosition, 555, yPosition);
    yPosition += 10;

    const terms = [
      "50% deposit required to secure booking",
      "Final payment due on shoot day",
      "Cancellations within 48 hours are non-refundable",
      "Travel fees may apply for locations beyond 30 miles",
      "All packages include professional editing and color correction",
    ];

    doc.setFontSize(10);
    doc.setFont("Helvetica", "normal");
    terms.forEach((term) => {
      yPosition = checkPageBreak(yPosition, 15);
      doc.text(`- ${term}`, 50, yPosition);
      yPosition += 15;
    });

    yPosition = checkPageBreak(yPosition, 100);
    doc.setFontSize(14);
    doc.setFont("Helvetica", "bold");
    doc.text("CONTACT US", 40, yPosition);
    yPosition += 10;
    doc.setLineWidth(0.3);
    doc.line(40, yPosition, 555, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont("Helvetica", "normal");
    const contactInfo = [
      `Phone: ${socialLinks.phone.text}`,
      `Email: ${socialLinks.email.text}`,
      `Address: ${socialLinks.address.full}`,
      `Visit us online: ${socialLinks.address.website}`,
      `© ${new Date().getFullYear()} Nobies Lens. All rights reserved.`,
    ];

    contactInfo.forEach((info) => {
      yPosition = checkPageBreak(yPosition, 15);
      doc.text(info, 40, yPosition);
      yPosition += 15;
    });

    doc.save("Nobies-Lens-Pricing-Packages.pdf");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-emerald-50/30 pt-16">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Pricing Packages</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-6">
              Choose Your Perfect Package
            </h1>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional photography services tailored to your needs. All
              packages include our commitment to excellence and stunning
              results.
            </p>
            <button
              onClick={generatePDF}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Pricing Guide
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pricingPackages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 ${
                    pkg.popular
                      ? "border-emerald-600 shadow-xl scale-105 bg-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-center pb-8 pt-10 px-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-5xl font-serif font-bold text-slate-900">
                      {pkg.price}
                    </div>
                  </div>
                  <div className="space-y-4 px-6 py-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-emerald-600 p-1 rounded-full mt-0.5 shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 pb-8 px-6">
                    <button
                      className={`w-full py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all text-white bg-emerald-600 hover:bg-emerald-700`}
                      onClick={() =>
                        window.open(
                          `https://wa.me/${socialLinks.whatsapp.text}?text=I'm interested in the ` +
                            pkg.name +
                            " package",
                          "_blank"
                        )
                      }
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
              What's Included in All Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-600 p-4 rounded-2xl inline-block mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Professional Equipment
                </h3>
                <p className="text-gray-600">
                  High-end cameras and lighting for stunning results
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 p-4 rounded-2xl inline-block mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Expert Photographers
                </h3>
                <p className="text-gray-600">
                  Experienced professionals with artistic vision
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 p-4 rounded-2xl inline-block mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600">
                  100% satisfaction or your money back
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need something custom? We offer tailored packages too!
            </p>
            <button
              className="rounded-2xl px-8 py-3 text-lg border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all bg-transparent text-slate-900"
              onClick={() =>
                window.open(
                  `https://wa.me/${socialLinks.whatsapp.text}?text=I'm interested in a custom photography package`,
                  "_blank"
                )
              }
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
