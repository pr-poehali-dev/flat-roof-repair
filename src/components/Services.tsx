import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Shield",
    title: "Гидроизоляция без демонтажа",
    description:
      "Полимерные мембраны устраняют протечки без снятия старого покрытия",
  },
  {
    icon: "Wrench",
    title: "Восстановление швов",
    description: "Герметизация стыков и примыканий современными составами",
  },
  {
    icon: "Clock",
    title: "Быстрый монтаж",
    description: "Работы выполняются в 3-5 раз быстрее традиционных методов",
  },
  {
    icon: "Award",
    title: "Гарантия 15 лет",
    description: "Официальная гарантия на все виды работ и материалы",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для ремонта и восстановления кровли
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} size={32} className="text-blue-600" />
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
