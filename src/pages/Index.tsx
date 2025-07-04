import { Brain, Calendar, MessageCircle, Zap, Target, Bot, Instagram, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
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
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Gestão de Mídia Social com IA Integrada</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Social Media com{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                IA integrada
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Conteúdo estratégico + atendimento automatizado = vendas todos os dias.
            </p>

            <p className="text-lg text-slate-400 max-w-5xl mx-auto">
              Transformamos suas redes sociais em um ecossistema de atração, engajamento e conversão — 
              com IA treinada para vender e um conteúdo que posiciona sua marca com autoridade.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Estratégia personalizada</h3>
              <p className="text-slate-400">Para posicionamento e funil de vendas</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Atendimento por IA 24/7</h3>  
              <p className="text-slate-400">Direto no Instagram e WhatsApp</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Relatórios mensais</h3>
              <p className="text-slate-400">Com performance e otimização</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Agendar Consultoria Gratuita
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105">
              Ver Como Funciona a IA
            </Button>
          </div>
        </div>
      </section>

      {/* What is IA Integration Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Não é só social media.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                É automação com estratégia real.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Esse serviço combina a inteligência estratégica de um social media sênior com a eficiência de um Agente de IA treinado para sua marca. 
              Ele produz, responde, filtra, agenda e entrega dados.
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Enquanto você cuida do seu negócio, a IA conversa com os leads e o conteúdo trabalha por você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Planejamento estratégico contínuo</h3>
                <p className="text-slate-600">
                  Diagnóstico de marca, definição de pilares, calendário editorial, análise de persona e funil.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Conteúdo híbrido com IA + humano</h3>
                <p className="text-slate-600">
                  Reaproveitamos seu conteúdo bruto (vídeos, fotos) e combinamos com materiais criados por IA — 
                  tudo com copywriting estratégico e identidade visual aplicada.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Agente de IA integrado ao negócio</h3>
                <p className="text-slate-600">
                  O agente responde comentários, directs e WhatsApp automaticamente. Qualifica leads, envia informações, 
                  agenda reuniões e transfere para o time humano quando necessário.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Como rodamos sua{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                operação de marketing automatizada
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kickoff estratégico (Mês 1)</h3>
                <p className="text-slate-600">
                  Reunião para mapear funil, tom de voz, persona e objetivos da marca. 
                  Entregamos otimização completa da bio, destaques e storytelling visual.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Produção e gestão de conteúdo</h3>
                <p className="text-slate-600">
                  Criamos até 12 posts + 4 sequências de stories por mês. 
                  Utilizamos material do cliente + IA para compor conteúdo de performance com estética profissional.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ativação do Agente IA</h3>
                <p className="text-slate-600">
                  O agente entra em ação no Instagram e WhatsApp. 
                  Responde automaticamente, faz perguntas qualificadoras e agenda via Google Agenda.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoramento e otimização</h3>
                <p className="text-slate-600">
                  Enviamos relatórios mensais com métricas-chave e realizamos 1 reunião mensal de ajustes e performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              IA conectada ao{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                seu dia a dia
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Automatizamos não só o atendimento, mas toda a jornada do lead. 
              Seu Agente de IA é conectado a:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Google Agenda</h3>
              <p className="text-slate-600 text-sm">Agendamento automático</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Google Sheets</h3>
              <p className="text-slate-600 text-sm">Registro automático de leads</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">WhatsApp Business</h3>
              <p className="text-slate-600 text-sm">Continuidade de atendimento</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instagram</h3>
              <p className="text-slate-600 text-sm">Resposta automática</p>
            </div>
          </div>

          <p className="text-lg text-slate-600 font-medium">
            Tudo centralizado, organizado e com performance mensurável.
          </p>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Investimento</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">R$ 1.500</div>
                <div className="text-slate-600 font-medium">Setup inicial</div>
                <div className="text-sm text-slate-500">(pagamento único)</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">R$ 2.997</div>
                <div className="text-slate-600 font-medium">Mensalidade</div>
                <div className="text-sm text-slate-500">Gestão completa</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">6 meses</div>
                <div className="text-slate-600 font-medium">Contrato mínimo</div>
                <div className="text-sm text-slate-500">Para resultados sólidos</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-700 font-medium mb-4">Inclui:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600">Estratégia completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600">Gestão de até 3 redes sociais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600">Agente de IA no Instagram e WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-600">Relatórios mensais e reuniões estratégicas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para automatizar suas redes sociais{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                com inteligência real?
              </span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-xl text-slate-300">
                Chega de perder vendas por falta de resposta ou conteúdo genérico.
              </p>
              <p className="text-xl text-slate-300">
                Com IA + estratégia, suas redes trabalham por você 24/7.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Consultoria Gratuita
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Quero Automatizar Meu Social Media
            </Button>
          </div>
        </div>
      </section>

      {/* Other Social Media Packages Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Outros pacotes de social media{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                que pode te interessar
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essencial Estratégico */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Essencial Estratégico</h3>
                      <p className="text-purple-100">Social media profissional e estratégico</p>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-6">
                    Você envia o conteúdo bruto. Nós transformamos em estratégia, design profissional e copy que converte.
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="flex items-center gap-2 font-semibold text-lg">
                      <Instagram className="w-5 h-5" />
                      Como a Chimitti faz:
                    </h4>
                    <ul className="space-y-2 text-purple-100">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Alinhamento estratégico e otimização completa do perfil</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Calendário editorial mensal com direcionamento estratégico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>12 posts para feed + 4 sequências de stories mensais</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Copywriting profissional com CTAs e hashtags otimizadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Gestão de até 2 redes sociais (Instagram e Facebook)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                    Conhecer Social Media Estratégico
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Impulso IA */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Impulso IA</h3>
                      <p className="text-blue-100">Conteúdo social media gerado por IA</p>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-6">
                    Redes sociais sempre atualizadas com conteúdo estratégico gerado automaticamente pela inteligência artificial.
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="flex items-center gap-2 font-semibold text-lg">
                      <Brain className="w-5 h-5" />
                      Como a Chimitti faz:
                    </h4>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Onboarding estratégico para treinar IA com sua identidade</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Geração automática de 12 posts e 4 stories mensais</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Legendas persuasivas com CTAs e hashtags otimizadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Chatbot de respostas automáticas no Instagram</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>Gestão de 2 redes + relatórios mensais com insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                    Ativar Social Media com IA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
