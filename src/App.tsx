import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
// 1. Importamos todos los iconos necesarios
import { 
  Menu, Github, ArrowDown, Code2, Cpu, Coffee, Palette, 
  Database, Terminal, BookOpenText, FolderGit2, Briefcase, 
  Building2, DatabaseZap, TerminalSquare, Cable, ArrowUpRight, 
  Mail, Instagram, RefreshCw, Globe, 
  Sun,
  Moon
} from "lucide-react";

import { translations, type Language, type TranslationKeys } from './data/translations';
import { useScrollTheme } from './hooks/useScrollTheme';

// Definimos el tipo para las props que reciben texto traducido
interface ComponentProps {
  t: TranslationKeys;
}

// Props específicas para el Navbar que necesita controlar el idioma
interface NavbarProps extends ComponentProps {
  setLang: (lang: Language) => void;
  currentLang: Language;
}

const Navbar = ({ t }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-(--color-bg-1)/80 border-b border-(--color-text-6)/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <a href="#hero" className="text-2xl font-bold tracking-tighter theme-text-1 hover:opacity-80 transition-opacity">
              GV<span className="theme-text-2">.</span>
            </a>
          </div>

          {/* */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#hero" className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors">
                {t.nav_home}
              </a>
              <a href="#about" className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors">
                {t.nav_about}
              </a>
              <a href="#skills" className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors">
                {t.nav_skills}
              </a>
              <a href="#career" className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors">
                {t.nav_career}
              </a>
              <a href="#contact" className="px-4 py-2 rounded-full border border-(--color-text-1) theme-text-1 font-semibold hover:bg-(--color-text-1) 
               transition-all">
                {t.nav_contact}
              </a>
            </div>
          </div>

          {/* */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md theme-text-main hover:text-white focus:outline-none"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full theme-bg-2 border-b border-(--color-text-6) shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-(--color-bg-1)" onClick={() => setIsOpen(false)}>
              {t.nav_home}
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-(--color-bg-1)" onClick={() => setIsOpen(false)}>
              {t.nav_about}
            </a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-(--color-bg-1)" onClick={() => setIsOpen(false)}>
              {t.nav_skills}
            </a>
            <a href="#career" className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-(--color-bg-1)" onClick={() => setIsOpen(false)}>
              {t.nav_career}
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-(--color-bg-1)" onClick={() => setIsOpen(false)}>
              {t.nav_contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ t }: ComponentProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-(--color-text-6) rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <p className="theme-text-2 font-mono text-lg tracking-wider">
            {t.hero_greeting}
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight theme-text-1 leading-none">
            GERARDO
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold theme-text-5 opacity-90">
            Bug Maker.
          </h2>
          <p className="text-lg md:text-xl theme-text-main max-w-lg mx-auto md:mx-0 leading-relaxed opacity-80">
            {t.hero_desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3 rounded-lg theme-bg-2 theme-text-1 font-bold border border-(--color-text-1) hoverhover:bg-(--color-text-1)r:text-[var(--color-bg-1)] transition-all text-center">
              {t.hero_btn_contact}
            </a>
            <a href="https://github.com/Gmatiasvc" target="_blank" className="px-8 py-3 rounded-lg border border-(--color-text-6) theme-text-6 hover:bg-(--color-text-6) hover:text-(--color-bg-1) transition-all flex items-center justify-center gap-2">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative group">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-(--color-text-3) rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute inset-0 theme-bg-2 rounded-2xl overflow-hidden shadow-2xl">
              {/* Ajusta la ruta de la imagen según corresponda, si está en public usa /img/... */}
              <img src="/img/important.png" alt="Profile" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 theme-text-6" />
      </div>
    </section>
  );
};

const About = ({ t }: ComponentProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-5xl font-bold theme-text-1">
              {t.about_title}
            </h2>
            <div className="h-1 w-20 theme-bg-2"></div>
            <p className="theme-text-3 font-mono text-sm uppercase tracking-widest mt-4">
              {t.about_badge}
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="theme-bg-2 p-8 rounded-2xl border-l-4 border-(--color-text-2) shadow-lg hover:shadow-2xl transition-all duration-500">
              <p className="text-lg leading-loose theme-text-main opacity-90">
                <span>{t.about_desc_1}</span>
                <br /><br />
                <span>{t.about_desc_2}</span>
                <br /><br />
                <span>{t.about_desc_3}</span>
                <br /><br />
                <span className="theme-text-5 font-semibold">{t.about_edu_label}</span>
                <span> {t.about_edu_text}</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg border border-(--color-text-6)/20">
                <span className="block text-3xl font-bold theme-text-2">3+</span>
                <span className="text-xs theme-text-6 uppercase">{t.stat_years}</span>
              </div>
              <div className="text-center p-4 rounded-lg border border-(--color-text-6)/20">
                <span className="block text-3xl font-bold theme-text-3">10+</span>
                <span className="text-xs theme-text-6 uppercase">{t.stat_projects}</span>
              </div>
              <div className="text-center p-4 rounded-lg border border-(--color-text-6)/20">
                <span className="block text-3xl font-bold theme-text-4">100%</span>
                <span className="text-xs theme-text-6 uppercase">{t.stat_linux}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = ({ t }: ComponentProps) => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-5xl font-bold mb-6 theme-text-1">
          {t.skills_title}
        </h2>
        <p className="max-w-2xl mx-auto mb-16 theme-text-main text-lg opacity-80">
          {t.skills_desc}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <SkillCard icon={<Code2 className="w-8 h-8 mx-auto mb-2 theme-text-1" />} name="Python" color="border-[var(--color-text-1)]" />
          <SkillCard icon={<Cpu className="w-8 h-8 mx-auto mb-2 theme-text-2" />} name="C++" color="border-[var(--color-text-2)]" />
          <SkillCard icon={<Coffee className="w-8 h-8 mx-auto mb-2 theme-text-3" />} name="Java" color="border-[var(--color-text-3)]" />
          <SkillCard icon={<Palette className="w-8 h-8 mx-auto mb-2 theme-text-4" />} name="Tailwind" color="border-[var(--color-text-4)]" />
          <SkillCard icon={<Palette className="w-8 h-8 mx-auto mb-2 theme-text-6" />} name="React" color="border-[var(--color-text-6)]" />
          <SkillCard icon={<Database className="w-8 h-8 mx-auto mb-2 theme-text-5" />} name="MySQL" color="border-[var(--color-text-5)]" />
          <SkillCard icon={<Terminal className="w-8 h-8 mx-auto mb-2 theme-text-6" />} name="Bash/Linux" color="border-[var(--color-text-6)]" />
          <SkillCard icon={<BookOpenText className="w-8 h-8 mx-auto mb-2 theme-text-3" />} name={t.skill_english} color="border-[var(--color-text-3)]" />
        </div>
      </div>
    </section>
  );
};

// Pequeño componente auxiliar para evitar repetir código en Skills
const SkillCard = ({ icon, name, color }: { icon: React.ReactNode, name: string, color: string }) => (
  <div className={`group px-6 py-4 rounded-xl theme-bg-2 border ${color} card-hover cursor-default`}>
    {icon}
    <span className="font-bold theme-text-main">{name}</span>
  </div>
);

const Career = ({ t }: ComponentProps) => {
  return (
    <section id="career" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <h2 className="text-5xl font-bold theme-text-1 mb-4">{t.career_title}</h2>
          <p className="theme-text-main text-xl opacity-80 max-w-2xl">{t.career_desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <ProjectCard 
            icon={<FolderGit2 className="w-16 h-16 theme-text-6 opacity-50" />}
            title="Portafolio Personal"
            desc={t.proj_1_desc}
            tags={['HTML', 'JS', 'Tailwind']}
            link="https://github.com/Gmatiasvc/lenty-sunflower"
            linkText={t.view_repo}
            bgColor="bg-[var(--color-text-6)]/10"
          />
          {/* Project 2 */}
          <ProjectCard 
            icon={<Briefcase className="w-16 h-16 theme-text-4 opacity-50" />}
            title="A&D sitio web"
            desc={t.proj_2_desc}
            tags={['React', 'Tailwind']}
            link="https://aydlegal.vercel.app"
            linkText={t.view_site}
            bgColor="bg-[var(--color-text-4)]/10"
          />
           {/* Project 3 */}
           <ProjectCard 
            icon={<Building2 className="w-16 h-16 opacity-50" />}
            title="Arq. Pajares portafolio"
            desc={t.proj_3_desc}
            tags={['HTML', 'JS', 'Tailwind']}
            link="https://valentinapajares.vercel.app"
            linkText={t.view_site}
            bgColor="bg-[var(--color-white)]/10"
          />
          {/* Project 4 */}
          <ProjectCard 
            icon={<DatabaseZap className="w-16 h-16 theme-text-3 opacity-50" />}
            title="NoSQL Java DB"
            desc={t.proj_4_desc}
            tags={['Java', 'Backend']}
            link="https://github.com/Gmatiasvc/orchid-bank"
            linkText={t.view_repo}
            bgColor="bg-[var(--color-text-3)]/10"
          />
          {/* Project 5 */}
          <ProjectCard 
            icon={<TerminalSquare className="w-16 h-16 theme-text-2 opacity-50" />}
            title="Tetris C++ Clone"
            desc={t.proj_5_desc}
            tags={['C++', 'Game Dev']}
            link="https://github.com/Gmatiasvc/young-sprout"
            linkText={t.view_repo}
            bgColor="bg-[var(--color-text-2)]/10"
          />
           {/* Project 6 */}
           <ProjectCard 
            icon={<Cable className="w-16 h-16 theme-text-3 opacity-50" />}
            title="Client-Server Java infra"
            desc={t.proj_6_desc}
            tags={['Java', 'Backend', 'SQL']}
            link="https://github.com/Gmatiasvc/oak-reserves"
            linkText={t.view_repo}
            bgColor="bg-[var(--color-text-3)]/10"
          />
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para Projectos
const ProjectCard = ({ icon, title, desc, tags, link, linkText, bgColor }: any) => (
  <div className="theme-bg-2 rounded-2xl overflow-hidden border border-(--color-text-6)/30 card-hover flex flex-col h-full">
    <div className={`h-48 w-full ${bgColor} flex items-center justify-center`}>
      {icon}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-2 theme-text-1">{title}</h3>
      <p className="text-sm theme-text-main opacity-70 mb-4 flex-1">{desc}</p>
      <div className="flex gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2 py-1 rounded theme-bg-1 theme-text-4 border border-(--color-text-4)/30">{tag}</span>
        ))}
      </div>
      <a href={link} className="inline-flex items-center gap-2 theme-text-5 hover:underline font-medium mt-auto">
        <span>{linkText}</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const Contact = ({ t }: ComponentProps) => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold theme-text-1 mb-2">{t.contact_title}</h2>
            <h3 className="text-2xl font-medium theme-text-2">{t.contact_subtitle}</h3>
          </div>

          <p className="theme-text-main text-lg opacity-80 leading-relaxed">
            {t.contact_desc}
          </p>

          <div className="space-y-4">
            <ContactLink href="mailto:gmatiasvc@hotmail.com" icon={<Mail />} title="Email me" text="gmatiasvc@hotmail.com" />
            <ContactLink href="https://github.com/Gmatiasvc" icon={<Github />} title="GitHub" text="@Gmatiasvc" />
            <ContactLink href="https://www.instagram.com/gerarditochiquitito/" icon={<Instagram />} title="Instagram" text="@gerarditochiquitito" />
          </div>
        </div>

        <div className="theme-bg-2 p-8 rounded-3xl shadow-2xl border border-(--color-text-6)/20">
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium theme-text-5 mb-2">{t.form_email}</label>
              <input type="email" id="email" placeholder="tu@email.com" className="w-full px-4 py-3 rounded-lg bg-(--color-bg-1) border border-(--color-text-6) text-white focus:outline-none focus:ring-2 focus:ring-(--color-text-5) transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium theme-text-5 mb-2">{t.form_subject}</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg bg-(--color-bg-1) border border-(--color-text-6) text-white focus:outline-none focus:ring-2 focus:ring-(--color-text-5) transition-all appearance-none">
                  <option>{t.opt_general}</option>
                  <option>{t.opt_freelance}</option>
                  <option>{t.opt_job}</option>
                </select>
              </div>
              <div>
                <label htmlFor="loc" className="block text-sm font-medium theme-text-5 mb-2">{t.form_location}</label>
                <select id="loc" className="w-full px-4 py-3 rounded-lg bg-(--color-bg-1) border border-(--color-text-6) text-white focus:outline-none focus:ring-2 focus:ring-(--color-text-5) transition-all appearance-none">
                  <option>Perú</option>
                  <option>Latam</option>
                  <option>Global</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium theme-text-5 mb-2">{t.form_message}</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-(--color-bg-1) border border-(--color-text-6) text-white focus:outline-none focus:ring-2 focus:ring-(--color-text-5) transition-all resize-none"></textarea>
            </div>

            <div className="flex gap-4 pt-2">
              <button type="submit" className="flex-1 py-3 px-6 rounded-lg theme-bg-1 theme-text-4 font-bold border border-(--color-text-4) hover:bg-(--color-text-4) hover:text-(--color-bg-1) transition-all">
                {t.form_btn_send}
              </button>
              <button type="reset" className="px-6 rounded-lg theme-text-6 border border-(--color-text-6) hover:bg-(--color-text-6) hover:text-(--color-bg-1) transition-all">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ href, icon, title, text }: any) => (
  <a href={href} className="flex items-center gap-4 p-4 rounded-xl theme-bg-2 border border-(--color-text-6)/20 hover:border-(--color-text-6) transition-colors group">
    <div className="p-3 rounded-full bg-(--color-bg-1) theme-text-6 group-hover:theme-text-1 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-sm opacity-60 theme-text-main">{title}</p>
      <p className="font-medium theme-text-main">{text}</p>
    </div>
  </a>
)

const Footer = ({ t }: ComponentProps) => {
  return (
    <footer id="footer" className="py-12 border-t border-(--color-text-6)/20 theme-bg-1">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold theme-text-1">Gerardo Venegas</h3>
          <p className="theme-text-main opacity-60 mt-2">
            {t.footer_text}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm theme-text-main opacity-80">
          <p>gmatiasvc@hotmail.com</p>
          <p>Trujillo, Perú</p>
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Componente para seleccionar idioma (Reemplaza a Lang y LangBtn)
const LanguageSwitcher = ({ setLang }: { setLang: (l: Language) => void, currentLang: Language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    setLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-50">
      {/* Botón flotante para abrir menú */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-white text-(--color-bg-1) shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-(--color-bg-1)"
      >
        <Globe className="w-6 h-6" />
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 mb-4 rounded-xl overflow-hidden shadow-2xl theme-bg-2 border border-(--color-text-6)/20 min-w-37.5">
          <div className="flex flex-col p-2 space-y-1">
            <LangOption flag="🇪🇸" name="Español" onClick={() => handleLangChange('es')} />
            <LangOption flag="🇺🇸" name="English" onClick={() => handleLangChange('en')} />
            <LangOption flag="🇮🇹" name="Italiano" onClick={() => handleLangChange('it')} />
            <LangOption flag="🇫🇷" name="Français" onClick={() => handleLangChange('fr')} />
            <LangOption flag="🇨🇳" name="中文" onClick={() => handleLangChange('cn')} />
            <LangOption flag="🇯🇵" name="日本語" onClick={() => handleLangChange('jp')} />
            <LangOption flag="🇧🇷" name="Português" onClick={() => handleLangChange('pt')} />
          </div>
        </div>
      )}
    </div>
  );
};

const LangOption = ({ flag, name, onClick }: any) => (
  <button onClick={onClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-(--color-text-6)/10 theme-text-main hover:theme-text-6 transition-colors text-left">
    <span className="text-xl">{flag}</span>
    <span className="font-medium">{name}</span>
  </button>
);

function App() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];
  const { currentTheme, toggleTheme } = useScrollTheme();

  return (
    <div className="">
      <Navbar t={t} currentLang={lang} setLang={setLang} />
      
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Career t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />

      {/* Botón Flotante de Tema */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-10 right-10 z-50 p-4 rounded-full bg-white text-(--color-bg-1) shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-(--color-bg-1) cursor-pointer"
        aria-label="Toggle Theme"
      >
         {currentTheme === 'dark' ? <Sun className="h-6 w-6"/> : <Moon className="h-6 w-6"/> }
      </button>

      {/* Selector de Idioma Flotante */}
      <LanguageSwitcher setLang={setLang} currentLang={lang} />
      <Analytics/>
    </div>
  );
}

export default App;