import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ремонт кровли
            <span className="block text-orange-400">без демонтажа</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Современные полимерные материалы для надёжного ремонта плоских крыш.
            Экономия до 70% времени и средств.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
