import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code is my passion"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Pixel-perfect implementations with attention to detail"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions for the best user experience"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a fullstack developer with a passion for creating innovative digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <item.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            With several years of experience in web development, I specialize in building modern,
            responsive web applications using cutting-edge technologies. I'm passionate about
            creating seamless user experiences and writing clean, efficient code. Whether it's
            frontend magic with React or backend wizardry with Node.js, I love bringing ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
