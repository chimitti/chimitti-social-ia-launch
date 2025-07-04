
import { Instagram, Calendar, MessageCircle, Zap, Target, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 mb-8">
              <Instagram className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Social Media + Inteligência Artificial</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Social Media estratégica com{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                IA e Automação
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Sua operação de marketing nas redes sociais funcionando no automático — 
              com inteligência artificial, estratégia profissional e resultados mensuráveis.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-pink-500/25">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Conteúdo Estratégico</h3>
              <p className="text-slate-400">Copy, design e posicionamento profissional</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Atendimento por IA</h3>  
              <p className="text-slate-400">Agentes inteligentes que respondem, filtram e vendem</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Automação Integrada</h3>
              <p className="text-slate-400">Instagram, WhatsApp e sistema de vendas conectados</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Ver Pacotes Social Media
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105">
              Atendimento IA no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Social Media{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Potencializada por IA
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa metodologia exclusiva integra estratégia de redes sociais com 
              automação inteligente para resultados exponenciais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-pink-500/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Estratégia Social Media</h3>
                <p className="text-slate-600">
                  Planejamento estratégico de conteúdo, identidade visual e posicionamento para 
                  Instagram, Facebook e outras redes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Treinamento IA</h3>
                <p className="text-slate-600">
                  Configuração de agentes inteligentes com o DNA da sua marca para atendimento 
                  automatizado e geração de conteúdo.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Automação Completa</h3>
                <p className="text-slate-600">
                  Integração entre redes sociais, WhatsApp, agenda e CRM para um fluxo 
                  automatizado de leads até vendas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Essencial Estratégico */}
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Essencial Estratégico</h3>
                    <p className="text-purple-100">Social media profissional e estratégico</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg">
                  Você envia o conteúdo bruto. Nós transformamos em estratégia, design profissional e copy que converte.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-purple-100">
                    <Instagram className="w-5 h-5 text-pink-200" />
                    <span className="font-medium">Como a Chimitti faz:</span>
                  </div>
                  
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full mt-2 flex-shrink-0"></span>
                      Alinhamento estratégico e otimização completa do perfil
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full mt-2 flex-shrink-0"></span>
                      Calendário editorial mensal com direcionamento estratégico
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full mt-2 flex-shrink-0"></span>
                      12 posts para feed + 4 sequências de stories mensais
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full mt-2 flex-shrink-0"></span>
                      Copywriting profissional com CTAs e hashtags otimizadas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full mt-2 flex-shrink-0"></span>
                      Gestão de até 2 redes sociais (Instagram e Facebook)
                    </li>
                  </ul>
                </div>
                
                <Button className="bg-white text-purple-600 hover:bg-purple-50 w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Conhecer Social Media Estratégico
                </Button>
              </CardContent>
            </Card>

            {/* Impulso IA */}
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-cyan-600 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Impulso IA</h3>
                    <p className="text-blue-100">Conteúdo social media gerado por IA</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg">
                  Redes sociais sempre atualizadas com conteúdo estratégico gerado automaticamente pela inteligência artificial.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-100">
                    <Bot className="w-5 h-5 text-cyan-200" />
                    <span className="font-medium">Como a Chimitti faz:</span>
                  </div>
                  
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></span>
                      Onboarding estratégico para treinar IA com sua identidade
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></span>
                      Geração automática de 12 posts e 4 stories mensais
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></span>
                      Legendas persuasivas com CTAs e hashtags otimizadas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></span>
                      Chatbot de respostas automáticas no Instagram
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></span>
                      Gestão de 2 redes + relatórios mensais com insights
                    </li>
                  </ul>
                </div>
                
                <Button className="bg-white text-blue-600 hover:bg-blue-50 w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Ativar Social Media com IA
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para revolucionar seu{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Social Media com IA?
              </span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-xl text-slate-300">
                Pare de perder tempo com redes sociais que não vendem.
              </p>
              <p className="text-xl text-slate-300">
                Implemente IA e automação que trabalham 24/7 pelo seu negócio.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Revolucionar Social Media
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Consultoria Gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
