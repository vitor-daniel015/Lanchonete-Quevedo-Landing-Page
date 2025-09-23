function About() {
  return (
    <section className="relative py-12 my-8 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      
      {/* Padrão decorativo */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.6'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-4 left-10 text-4xl animate-float opacity-30 pointer-events-none" style={{animationDelay: '0s'}}>🌽</div>
      <div className="absolute top-8 right-16 text-3xl animate-float opacity-30 pointer-events-none" style={{animationDelay: '1s'}}>🍃</div>
      <div className="absolute bottom-4 left-20 text-2xl animate-float opacity-30 pointer-events-none" style={{animationDelay: '2s'}}>⭐</div>
      <div className="absolute bottom-6 right-10 text-3xl animate-float opacity-30 pointer-events-none" style={{animationDelay: '0.5s'}}>✨</div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="glass-effect rounded-2xl p-8 mx-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 animate-pulse-glow">
            Tradição e Sabor
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
            <div className="w-32 h-1 bg-gradient-to-l from-amber-400 to-yellow-500 rounded-full"></div>
          </div>
          <p className="text-lg text-amber-800 font-medium leading-relaxed">
            Há anos servindo as melhores comidas típicas de Capela do Alto. Nossa lanchonete
            é um pedacinho do interior paulista, onde cada prato é preparado com ingredientes
            frescos e muito amor pela tradição culinária caipira.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <span className="text-2xl animate-bounce-gentle pointer-events-none" style={{animationDelay: '0s'}}>🥘</span>
            <span className="text-2xl animate-bounce-gentle pointer-events-none" style={{animationDelay: '0.2s'}}>🌽</span>
            <span className="text-2xl animate-bounce-gentle pointer-events-none" style={{animationDelay: '0.4s'}}>🥛</span>
            <span className="text-2xl animate-bounce-gentle pointer-events-none" style={{animationDelay: '0.6s'}}>🍰</span>
          </div>
        </div>
      </div>
      
      {/* Decoração nas bordas */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl opacity-20 animate-float pointer-events-none">🌾</div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-6xl opacity-20 animate-float pointer-events-none" style={{animationDelay: '1s'}}>🌾</div>
    </section>
  );
}

export default About;