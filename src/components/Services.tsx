import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Droplets",
    title: "Жидкая резина",
    description:
      "Бесшовное полимерное покрытие с самовыравнивающимися свойствами",
  },
  {
    icon: "Shield",
    title: "PVC мембраны",
    description:
      "Высокопрочные термопластичные мембраны для долговечной защиты",
  },
  {
    icon: "Layers",
    title: "EPDM системы",
    description: "Эластомерные мембраны с гарантией до 25 лет эксплуатации",
  },
  {
    icon: "Zap",
    title: "Полиуретановые покрытия",
    description: "Быстротвердеющие составы для экстренного ремонта кровли",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Полимерные технологии ремонта
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Революционные материалы для восстановления кровли без демонтажа
            старого покрытия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Icon name={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
