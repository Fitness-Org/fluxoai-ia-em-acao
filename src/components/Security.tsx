import { Shield, Eye, FileText, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Conformidade total com a LGPD",
    description: "Todos os dados são tratados conforme as regulamentações brasileiras de proteção de dados."
  },
  {
    icon: Eye,
    title: "Revisão humana nas decisões críticas",
    description: "IA auxilia, mas decisões importantes sempre passam por validação humana."
  },
  {
    icon: FileText,
    title: "Trilha de auditoria e logs",
    description: "Registros completos de todas as operações para total transparência e rastreabilidade."
  },
  {
    icon: Lock,
    title: "Política de dados transparente e ética",
    description: "Seus dados são seus. Controle total sobre como e onde suas informações são processadas."
  }
];

const Security = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Segurança e Conformidade</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              IA com Responsabilidade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toda automação é auditável, segura e supervisionada. Seu negócio protegido em cada etapa.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom emphasis */}
          <div className="mt-12 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-lg font-medium text-foreground">
              Certificações e boas práticas que garantem a segurança da sua operação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
