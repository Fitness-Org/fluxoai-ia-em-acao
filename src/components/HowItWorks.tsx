import { Search, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico e Mapeamento",
    description: "O cliente apresenta seus processos; a FluxoAI analisa fluxos, gargalos e dados para identificar onde a IA traz ganho real."
  },
  {
    icon: Zap,
    title: "Piloto de 30 dias",
    description: "Automatizamos um processo selecionado e medimos resultados concretos — redução de até 50% no trabalho manual."
  },
  {
    icon: TrendingUp,
    title: "Escala",
    description: "Após o piloto validado, expandimos as automações para outros setores e etapas da operação."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso diferencial é aplicar IA com propósito — somente onde ela gera eficiência, velocidade e retorno mensurável.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (except for last item on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-lg text-primary font-medium bg-primary/5 inline-block px-6 py-3 rounded-lg">
              Preço por resultado — você só paga pelo que funciona
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
