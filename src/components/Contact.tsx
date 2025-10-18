import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/eradz" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chidiebere-andrew-anagu-5850b2237" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/chidiebereanagu" },
    { icon: Mail, label: "Email", href: "mailto:anaguchidiebere@gmail.com" }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 mb-8"
            asChild
          >
            <a href="mailto:anaguchidiebere@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </a>
          </Button>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Chidiebere Andrew. Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
