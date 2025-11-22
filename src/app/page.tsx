const highlights = [
  {
    title: "وادي السند",
    description:
      "أقدم الحضارات في الهند التي ازدهرت بين 3300 و1300 قبل الميلاد، واشتهرت بالتخطيط العمراني المتقن."
  },
  {
    title: "الفيدا والديانة",
    description:
      "ظهور النصوص الفيدية التي أرست أُسس الفلسفة الهندوسية والطقوس الروحية في شبه القارة."
  },
  {
    title: "العلم والفلك",
    description:
      "إسهامات مبكرة في الرياضيات والطب والفلك، بما في ذلك مفهوم الصفر وأنظمة العد العشرية."
  }
];

const timeline = [
  {
    era: "حضارة هارابا",
    period: "3300 – 1300 ق.م",
    detail: "شبكات صرف متطورة، تجارة مزدهرة، ونظام كتابي لم يُفك بالكامل حتى اليوم."
  },
  {
    era: "العصر الفيدي",
    period: "1500 – 500 ق.م",
    detail: "تدوين تراث شفهي هائل في نصوص الفيدا وأوبانيشاد، وتطور اللغة السنسكريتية."
  },
  {
    era: "الإمبراطوريات الكلاسيكية",
    period: "321 ق.م – 550 م",
    detail: "سلالة موريان ثم جوبتا، وازدهار الفن البوذي في سانتشي وأجانتا."
  },
  {
    era: "العصر الذهبي",
    period: "القرنان الرابع والخامس",
    detail:
      "ابتكارات في الفلك (أريابهاتا) والطب (سوشروتا)، ونظام جامعي في نالاندا جذب طلاباً من آسيا."
  }
];

const resources = [
  {
    name: "دليل اليونسكو لتراث الهند",
    href: "https://whc.unesco.org/en/statesparties/in",
    description: "خريطة تفاعلية للمواقع الأثرية والمسجلة في قائمة التراث العالمي."
  },
  {
    name: "مكتبة بودلبورن الرقمية",
    href: "https://digital.bodleian.ox.ac.uk/collections/india/",
    description: "مخطوطات وفنون تصويرية نادرة من الفترات الفيدية والجرائدية."
  },
  {
    name: "مشروع النصوص السنسكريتية",
    href: "https://sanskritdocuments.org/",
    description: "نسخ رقمية للنصوص الفلسفية والشعرية مترجمة إلى الإنجليزية."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ancient-pattern">
      <section className="relative isolate overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 bg-gradient-to-br from-indigo-200/60 via-sand-50 to-transparent blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 text-center md:gap-14">
          <span className="mx-auto rounded-full border border-sand-200 bg-white/70 px-5 py-2 text-sm text-sand-600 shadow-sm backdrop-blur">
            رحلة بصرية إلى أعماق التاريخ
          </span>
          <h1 className="text-4xl font-display font-semibold tracking-tight text-sand-900 md:text-6xl">
            الهند القديمة: حضارة تنبض بالحكمة والجمال
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-sand-700">
            شاهد فيلماً وثائقياً مصوراً بعناية يأخذك في جولة عبر معابد، مدن، وعلوم الحضارة الهندية
            القديمة، مع ملخصات معرفية تدعم كل مشهد.
          </p>
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-sand-200 shadow-2xl shadow-indigo-200/30">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/8PAjxdixb90"
              title="Ancient India Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display font-semibold text-sand-900 md:text-4xl">
            محطات مفصلية في مسيرة الحضارة
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sand-700">
            جدول زمني مختصر يضيء أبرز التحولات الثقافية والعلمية التي شكلت هوية الهند القديمة عبر
            آلاف السنين.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((entry) => (
            <article
              key={entry.era}
              className="group rounded-3xl border border-sand-100 bg-white/80 p-6 text-right shadow-lg shadow-sand-200/30 transition hover:-translate-y-1 hover:border-sand-300 hover:bg-white"
            >
              <header className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-xl font-display font-semibold text-sand-800">{entry.era}</h3>
                <span className="rounded-full bg-sand-100 px-3 py-1 text-xs text-sand-600">
                  {entry.period}
                </span>
              </header>
              <p className="text-sand-700">{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand-100/80 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-display font-semibold text-sand-900 md:text-4xl">
              لمحات منسية تستحق التأمل
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-sand-700">
              بعد مشاهدة الفيلم، استكشف هذه الومضات المعرفية التي تقدم قصصاً فرعية تعزز فهمك
              للثقافة الهندية القديمة.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-sand-200 bg-white/80 p-6 text-right shadow-md shadow-sand-300/40 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-display text-sand-800">{item.title}</h3>
                <p className="mt-4 text-sand-700 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-sand-200 bg-white/90 p-10 shadow-2xl shadow-indigo-200/40">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-display font-semibold text-sand-900 md:text-4xl">
              استكشف أكثر مع موارد موثوقة
            </h2>
            <p className="mt-3 text-base text-sand-700">
              مصادر أكاديمية ورقمية مفتوحة تساعدك على الغوص أعمق في دراسات الهند القديمة وحضاراتها.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between rounded-2xl border border-sand-100 bg-sand-50/70 p-6 text-right transition hover:border-sand-300 hover:bg-sand-50 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-lg font-display text-sand-800">{resource.name}</h3>
                  <p className="mt-3 text-sm text-sand-700 leading-relaxed">{resource.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center justify-end text-sm text-sand-600">
                  فتح الرابط ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-sand-900 py-10 text-center text-sand-100">
        <p className="text-sm">
          صُممت هذه التجربة لإبراز جمال الهند القديمة وتعزيز الفضول المعرفي لدى المشاهد العربي.
        </p>
      </footer>
    </main>
  );
}
