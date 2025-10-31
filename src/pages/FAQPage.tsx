import { faqCategories, socialLinks } from "@/lib/constants";
import { HelpCircle, Mail, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gold/30 pt-16">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-6">
              We're Here to Help
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our photography services.
              Can't find what you're looking for? Feel free to reach out!
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gold p-3 rounded-2xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);
                      return (
                        <div
                          key={faqIndex}
                          className="border-2 border-gray-100 rounded-2xl px-6 transition-all"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full text-left py-4 flex items-center justify-between"
                          >
                            <span className="font-semibold text-slate-900 pr-4">
                              {faq.question}
                            </span>
                            <span
                              className={`transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-slate-900 rounded-3xl p-12 text-center text-white shadow-xl">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold/80" />
            <h2 className="text-3xl font-serif font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Our team is ready to answer any
              questions and help you plan the perfect photoshoot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open(socialLinks.whatsapp.link, "_blank")}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
              <button
                onClick={() => (window.location.href = socialLinks.email.link)}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Send us an Email
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
