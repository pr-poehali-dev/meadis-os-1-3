import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/f0385fec-5067-4222-9658-1a747b4f1ec3.png" 
                alt="Meadis OS Logo" 
                className="w-10 h-10"
              />
              <h1 className="font-display text-2xl font-bold text-gradient">
                MEADIS OS 1.3
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Скачать
              </button>
              <button
                onClick={() => scrollToSection("updates")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Обновления
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="glass-strong text-primary border-primary/30 px-4 py-2">
                Версия 1.3 - Последнее обновление
              </Badge>
              <h2 className="font-display text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">MEADIS OS</span>
                <br />
                <span className="text-white">Система в PowerPoint</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl">
                Новая система под любые задачи, система славиться своим интерфейсом и функционалом!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display text-lg px-8 py-6 rounded-2xl shadow-2xl shadow-primary/30"
                  onClick={() => scrollToSection("download")}
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-strong border-white/20 hover:bg-white/10 font-display text-lg px-8 py-6 rounded-2xl"
                  onClick={() => scrollToSection("updates")}
                >
                  <Icon name="FileText" className="mr-2" size={20} />
                  Что нового
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Layers" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">Дизайн системы</h3>
                      <p className="text-sm text-muted-foreground">Используется дизайн с прозрачными окнами</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Zap" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">Быстродействие</h3>
                      <p className="text-sm text-muted-foreground">Оптимизировано для плавной работы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              <span className="text-gradient">Скачать</span> MEADIS OS 1.3
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящую версию для вашей системы
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass-strong border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Download" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Бета версия</h3>
                  <p className="text-muted-foreground">
                    Включает все функции и приложения системы
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Размер: 90 МБ</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>PowerPoint 2016+</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Windows, macOS</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display text-lg py-6 rounded-xl">
                  Скачать бета версию
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="glass border-white/10 p-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-display font-semibold mb-2">Системные требования</h4>
                  <p className="text-sm text-muted-foreground">
                    Microsoft PowerPoint 2013 или новее, Windows 7+ / macOS 10.12+, 
                    минимум 2 GB RAM, 50 MB свободного места на диске
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="updates" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Журнал <span className="text-gradient">обновлений</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Последние улучшения и новые возможности
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass-strong border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold">1.3</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold">Версия 1.3</h3>
                    <Badge className="glass border-primary/30 text-primary">Текущая</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Bug" className="text-destructive mt-1" size={16} />
                      <p className="text-sm">Неизвестно</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold text-muted-foreground">1.2</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">Версия 1.2</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Plus" className="text-primary mt-1" size={16} />
                      <p className="text-sm">Встроенный UEFI</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Plus" className="text-primary mt-1" size={16} />
                      <p className="text-sm">Новый патч безопасности</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Wrench" className="text-secondary mt-1" size={16} />
                      <p className="text-sm">Новая версия Game Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold text-muted-foreground">1.1</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">Версия 1.1</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Plus" className="text-primary mt-1" size={16} />
                      <p className="text-sm">Новая музыка</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Plus" className="text-primary mt-1" size={16} />
                      <p className="text-sm">Новое приложение Безопасность</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="glass border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MEADIS OS. Создано с использованием PowerPoint
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Документация
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Поддержка
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;