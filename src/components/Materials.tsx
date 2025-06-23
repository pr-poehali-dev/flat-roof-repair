import Icon from "@/components/ui/icon";

const materials = [
  {
    name: "Жидкая резина EPDM",
    benefits: [
      "Бесшовное покрытие",
      "Самовыравнивание",
      "Адгезия к любым поверхностям",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    technology: "Холодное нанесение",
  },
  {
    name: "PVC мембраны",
    benefits: [
      "Термосварные швы",
      "Устойчивость к УФ",
      "Механическая прочность",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    technology: "Механическое крепление",
  },
  {
    name: "Полиуретановые системы",
    benefits: [
      "Быстрое отверждение",
      "Химическая стойкость",
      "Эластичность при -40°C",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    technology: "Напыление",
  },
];

const Materials = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Передовые полимерные материалы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Используем только сертифицированные материалы ведущих европейских
            производителей
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {material.technology}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{material.name}</h3>
                <ul className="space-y-3">
                  {material.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-green-400 mr-3 flex-shrink-0"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
