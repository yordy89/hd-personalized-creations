"use client";

import { useState } from "react";
import { useLanguage } from "@/components/Providers";

export default function QuotePage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    description: "",
    occasion: "",
    budget: "",
    deadline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with email service
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {t.quote.thankYou}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.quote.thankYouDesc}
          </p>
          <a
            href="/"
            className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors inline-block"
          >
            {t.quote.backHome}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {t.quote.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{t.quote.title.split(" ").slice(-1)}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.quote.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.name} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
                placeholder={t.quote.name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.email} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.productType} *
              </label>
              <select
                required
                value={formData.productType}
                onChange={(e) =>
                  setFormData({ ...formData, productType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
              >
                <option value="">{t.quote.selectOption}</option>
                <option value="tumbler">{t.quote.tumbler}</option>
                <option value="snowglobe">{t.quote.snowglobe}</option>
                <option value="set">{t.quote.cupSet}</option>
                <option value="other">{t.quote.other}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.quote.describeIdea} *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors resize-none"
              placeholder={t.quote.describeIdeaPlaceholder}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.occasion}
              </label>
              <select
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({ ...formData, occasion: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
              >
                <option value="">{t.quote.selectOption}</option>
                <option value="birthday">{t.quote.birthday}</option>
                <option value="babyshower">{t.quote.babyShower}</option>
                <option value="wedding">{t.quote.wedding}</option>
                <option value="christmas">{t.quote.christmas}</option>
                <option value="mothersday">{t.quote.mothersDay}</option>
                <option value="gift">{t.quote.generalGift}</option>
                <option value="personal">{t.quote.personalUse}</option>
                <option value="other">{t.quote.otherOccasion}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.quote.deadline}
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.quote.budget}
            </label>
            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800 transition-colors"
            >
              <option value="">{t.quote.selectRange}</option>
              <option value="under30">{t.quote.under30}</option>
              <option value="30-50">$30 - $50</option>
              <option value="50-75">$50 - $75</option>
              <option value="75-100">$75 - $100</option>
              <option value="over100">$100+</option>
              <option value="flexible">{t.quote.flexible}</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 dark:shadow-violet-900/30 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.quote.submitting : t.quote.submit}
            </button>
          </div>

          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            {t.quote.responseTime}
          </p>
        </form>
      </div>
    </div>
  );
}
