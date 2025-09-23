// Interface para um item de especialidade
interface Specialty {
  name: string;
  description: string;
  image: string;
}

// Interface para as props do componente Specialties
interface SpecialtiesProps {
  specialties: Specialty[];
}

function Specialties({ specialties }: SpecialtiesProps) {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Pratos típicos preparados com receitas tradicionais e ingredientes selecionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <div key={index} className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-amber-800 mb-2">{item.name}</h3>
                <p className="text-amber-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex justify-center">
                  <a 
                    href="https://wa.me/5515997553222?text=Olá! é da Lanchonete Quevedo? Gostaria de Fazer um Pedido"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    Peça Agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialties;