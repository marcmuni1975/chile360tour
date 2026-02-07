import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: "Desarrollo Web Premium",
    description: "Sitios web de alto impacto con tecnologías modernas (Next.js, React) y diseño estético superior.",
    price: "Desde $500",
    icon: "💻"
  },
  {
    title: "Automatización con Python",
    description: "Scripts y herramientas de escritorio para optimizar flujos de trabajo y tareas repetitivas.",
    price: "A medida",
    icon: "🤖"
  },
  {
    title: "Integración de IA",
    description: "Implementación de modelos de lenguaje (LLMs) y soluciones de inteligencia artificial personalizadas.",
    price: "Consultar",
    icon: "🧠"
  },
  {
    title: "Consultoría Técnica",
    description: "Asesoramiento experto para la toma de decisiones tecnológicas y arquitectura de software.",
    price: "$100/hora",
    icon: "wikitam"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-30 pointer-events-none">
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%'
        }}></div>
      </div>

      <header className="mb-16 text-center z-10">
        <h1 className="title-gradient text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          M&M Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Soluciones digitales de vanguardia. Calidad, estética y funcionalidad.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <footer className="mt-20 text-gray-500 text-sm z-10">
        &copy; {new Date().getFullYear()} M&M Services. Creado para Vercel.
      </footer>
    </main>
  );
}
