import Icon from "@/components/ui/icon";

const materials = [
  {
    name: "EPDM мембраны",
    benefits: ["Срок службы 25+ лет", "Устойчивость к УФ", "Эластичность"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    name: "Полиуретановые покрытия",
    benefits: [
      "Бесшовное нанесение",
      "Химическая стойкость",
      "Быстрое высыхание",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    name: "Жидкая резина",
    benefits: [
      "Самовыравнивание",
      "Адгезия к любым поверхностям",
      "Экологичность",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
  },
];

const Materials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Современные материалы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Используем только проверенные полимерные составы европейского
            качества
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {material.name}
              </h3>
              <ul className="space-y-3">
                {material.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
