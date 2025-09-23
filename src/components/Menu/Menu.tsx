// Interfaces para os itens do cardápio
interface MenuItem {
  name: string;
  description: string;
  image?: string; // Propriedade opcional para imagem
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

// Interface para as props do componente Menu
interface MenuProps {
  menuItems: MenuCategory[];
}

function Menu({ menuItems }: MenuProps) {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Cardápio Completo
          </h2>
          <p className="text-lg text-amber-700">
            Conheça todos os nossos sabores autênticos
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-3xl font-bold font-serif text-amber-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Imagem do item (se disponível) */}
                  {item.image && (
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-amber-800 mb-2">{item.name}</h4>
                    <p className="text-amber-600 mb-4">{item.description}</p>
                    
                    <div className="flex justify-center mt-4">
                      <a 
                        href={`https://wa.me/5515997553222?text=Olá! Gostaria de fazer um pedido de ${item.name}`}
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
        ))}
      </div>
    </section>
  );
}

export default Menu;