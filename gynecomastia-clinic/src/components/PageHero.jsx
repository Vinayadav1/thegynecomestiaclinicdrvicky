export default function PageHero({ badge, title, subtitle, badgeColor = 'teal' }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#0a1628' }}>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 opacity-20 filter blur-[80px] rounded-full animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-400 opacity-10 filter blur-[80px] rounded-full animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 opacity-10 filter blur-[80px] rounded-full animate-blob animation-delay-4000" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <div className={`inline-block px-4 py-2 rounded-full mb-6 border ${badgeColor === 'amber' ? 'bg-amber-400/10 border-amber-400/20' : 'bg-teal-500/10 border-teal-500/20'}`}>
            <span className={`font-bold text-sm ${badgeColor === 'amber' ? 'text-amber-400' : 'text-teal-400'}`}>{badge}</span>
          </div>
        )}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">{title}</h1>
        {subtitle && <p className="text-xl text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
