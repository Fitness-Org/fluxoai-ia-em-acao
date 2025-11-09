import { TrendingDown, Clock, AlertCircle, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "↓ 50%",
    label: "Toques manuais",
    description: "Redução drástica em tarefas repetitivas"
  },
  {
    icon: Clock,
    value: "↓ 30-60%",
    label: "Tempo de ciclo",
    description: "Processos executados mais rapidamente"
  },
  {
    icon: AlertCircle,
    value: "↓ 20-40%",
    label: "Erros e retrabalho",
    description: "Maior precisão e qualidade"
  },
  {
    icon: DollarSign,
    value: "↓ 25-50%",
    label: "Custo operacional",
    description: "Economia real mensal"
  }
];

const Results = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resultados Comprovados
            </h2>
            {/*<p className="text-xl text-muted-foreground max-w-3xl mx-auto">*/}
            {/*  Métricas reais de empresas que já automatizaram seus processos com a FluxoAI*/}
            {/*</p>*/}
          </div>

          {/* Metrics grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
