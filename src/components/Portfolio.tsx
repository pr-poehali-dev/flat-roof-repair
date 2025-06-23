import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Торговый центр, 2000 м²",
    description: "Полная гидроизоляция без остановки работы",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    area: "2000 м²",
    duration: "5 дней",
  },
  {
    title: "Жилой комплекс, 1500 м²",
    description: "Ремонт кровли 12-этажного дома",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    area: "1500 м²",
    duration: "3 дня",
  },
  {
    title: "Производственный цех, 3000 м²",
    description: "Восстановление кровли склада",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    area: "3000 м²",
    duration: "7 дней",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 успешно выполненных проектов по всей России
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-blue-600 font-semibold">
                    <Icon name="Square" size={16} className="mr-2" />
                    {project.area}
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Eye" className="mr-2" />
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
