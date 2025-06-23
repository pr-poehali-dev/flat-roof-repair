import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Получите бесплатную консультацию
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15
              минут
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <p className="font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-gray-400">Круглосуточно</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <p className="font-semibold">info@roofrepair.ru</p>
                  <p className="text-gray-400">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Москва и область</p>
                  <p className="text-gray-400">Выезд на объект бесплатно</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Бесплатная диагностика кровли
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input
                  placeholder="Телефон"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Площадь кровли (м²)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input
                  placeholder="Тип здания"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Описание проблем: протечки, трещины, вздутия..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3">
                <Icon name="Calendar" className="mr-2" />
                Заказать выезд специалиста
              </Button>
              <p className="text-center text-sm text-gray-400">
                Выезд на объект и составление сметы — бесплатно
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
