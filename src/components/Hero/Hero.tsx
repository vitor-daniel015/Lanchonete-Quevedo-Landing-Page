import { Phone } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>
        
        {/* Overlay com gradiente decorativo */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-amber-900/20 backdrop-blur-sm"></div>
      </div>
          
 

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Container principal */}
        <div className="rounded-3xl p-8 md:p-12 mx-4">
          {/* Decoração do título */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-pulse-glow"></div>
            <div className="w-32 h-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent rounded-full animate-pulse-glow"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 drop-shadow-lg animate-fade-in-up">
            <span className="gradient-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
              Quevedo's
            </span>
            <br />
            <span className="text-white text-glow">Lanchonete</span>
          </h1>
          
          {/* Linha decorativa abaixo do título */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-40 h-0.5 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full mx-3"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
            <div className="w-40 h-0.5 bg-gradient-to-l from-yellow-300 to-amber-400 rounded-full mx-3"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{animationDelay: '0.3s'}}>
            Sabores autênticos do interior paulista em Capela do Alto.
            Pamonha, sopa de milho e delícias caipiras feitas com carinho.
          </p>
          
          {/* Elementos decorativos entre texto e botões */}
          <div className="flex justify-center items-center mb-8">
            <div className="mx-4 flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://wa.me/5515997553222?text=Olá! é da Lanchonete Quevedo? Gostaria de Fazer um Pedido" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2 hover-lift"
            >
              <img src="/images/whatsapp.png" alt="WhatsApp" className="h-5 w-5 group-hover:animate-shake" />
              WhatsApp
            </a>
            <a 
              href="tel:+5515997553222"
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2 hover-lift"
            >
              <Phone className="h-5 w-5 group-hover:animate-shake" />
              Ligue Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;