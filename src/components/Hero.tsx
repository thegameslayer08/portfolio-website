'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #0d1f38 0%, #13294B 60%, #1a3a6b 100%)'}}>
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white animate-pulse-subtle">
          Capital for Your Deals
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#c8d6e8'}}>
          Secure $5M in growth capital from UIF. We partner with experienced independent sponsors to acquire and scale businesses.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="text-white px-8 py-3 rounded-lg transition transform hover:scale-105 font-semibold" style={{backgroundColor: '#E84A27'}}>
            Apply Now
          </button>
          <button className="border-2 text-white px-8 py-3 rounded-lg transition hover:bg-white/10 font-semibold" style={{borderColor: '#c8d6e8', color: '#c8d6e8'}}>
            Vetting Process
          </button>
        </div>
      </div>
    </section>
  );
}
