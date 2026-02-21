export default function Home() {
  return (
    <div className="text-center py-32">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
        Monetize Your Empty Tables
      </h1>

      <p className="text-neutral-400 mb-10 text-lg">
        Turn empty capacity into predictable revenue.
      </p>

      <a
        href="/pricing"
        className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl text-xl transition"
      >
        Start Free Trial
      </a>
    </div>
  );
}