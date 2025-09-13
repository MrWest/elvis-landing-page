import React, { useEffect, useState, useRef } from "react";
// It's recommended to use a package manager, but for this environment, we'll add GSAP via a script tag.

// 1. Centralización de Textos (Traducciones) - ACTUALIZADO
const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_metodologia: "Metodología",
    nav_evidencia: "Evidencia",
    nav_arquitecto: "El Arquitecto",
    nav_contacto: "Contacto",
    hero_kicker: "Forjando el Legado",
    hero_title1_lines: [
      "Las soluciones de ayer",
      "no resolverán los",
      "desafíos de la",
      "próxima década."
    ],
    hero_title2_lines: [
      "¿Está construyendo un",
      "sistema para sobrevivir,",
      "o un legado para",
      "<em>trascender?</em>"
    ],
    hero_subtitle: "El potencial sin una arquitectura de impacto es solo una oportunidad desperdiciada.",
    hero_cta: "Descubra la Arquitectura del Legado",
    metodologia_title: "Nuestra Metodología: La Arquitectura de Legado",
    metodologia_p: "La confianza se construye sobre la claridad. Nuestra metodología es un proceso transparente y colaborativo, diseñado para que líderes de organizaciones, iniciativas de desarrollo y ventures tecnológicas transformen la incertidumbre en una hoja de ruta estratégica. Cada fase está orientada a construir una capacidad distintiva y un impacto sostenible en el tiempo.",
    metodologia_book_title: "Dosier Estratégico: El Protocolo de Arquitectura de Legado",
    metodologia_cta: "Descargar Dosier",
    fase1_title: "Fase 1 — Arquitectura de Impacto",
    fase1_p: "Un análisis profundo para definir el 'norte estratégico' y construir un blueprint claro y de bajo riesgo para su iniciativa.",
    fase2_title: "Fase 2 — Motor de Ejecución",
    fase2_p: "La implementación de un sistema de gestión ágil que potencia a su equipo para obtener resultados tangibles y medibles.",
    fase3_title: "Fase 3 — Orquestación del Legado",
    fase3_p: "La transformación de la nueva capacidad interna de su organización en un impacto sostenible y duradero.",
    evidencia_title: "Nuestra Filosofía en Acción",
    evidencia_p: "Cada proyecto es la materialización de nuestra filosofía. No se trata de una lista de logros, sino de la evidencia de un proceso de transformación. Los siguientes casos ilustran cómo la arquitectura de sistemas se aplica a diferentes tipos de desafíos complejos.",
    conexa_title: "CONEXA: Iniciativa de Desarrollo Internacional",
    conexa_p: "Arquitectura de la estrategia y el sistema tecnológico para un consorcio global de universidades y ONGs, creando un ecosistema digital de impacto social a escala nacional.",
    ceic_title: "Proyectos CEIC: Consultoría Estratégica y Captación de Fondos",
    ceic_p: "Actuación como consultor para una institución académica, estructurando proyectos de alto impacto que lograron la validación y financiación de entidades de prestigio como FULLBRIGHT y ERASMUS+.",
    cardiozono_title: "Clínica Cardiozono: Gestión de Infraestructura a Gran Escala",
    cardiozono_p: "Liderazgo en la gestión y diseño de un proyecto de infraestructura a gran escala (Clínica hospitalaria de tercer nivel de más de 29 Ha de área constructiva), con manejo integral de complejidades técnicas, regulatorias y de stakeholders para asegurar la entrega.",
    arquitecto_title: "El Arquitecto de Legado",
    arquitecto_p: "Mi enfoque integra dos disciplinas: la visión de un arquitecto de sistemas, que diseña ecosistemas complejos, y la pericia de un maestro artesano, que se responsabiliza personalmente de la calidad de la ejecución. Actúo como un socio de confianza para líderes de naciones, organizaciones internacionales y corporaciones que buscan transformaciones fundamentales. Juntos, no solo resolvemos problemas; diseñamos el futuro.",
    arquitecto_subtitle: "Su visión. Nuestra colaboración. Su legado.",
    arquitecto_subtext: "Cada legado comienza con un primer trazo.",
    arquitecto_cta: "Iniciar el Diseño de su Legado",
    footer_copyright_part1: "© 2025 Elvis Pozo — Arquitectura de Legado | Potenciado por ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Volver arriba ↑",
    popup_title: "Iniciar una Conversación",
    popup_subtitle: "Un legado no se construye por casualidad, se diseña. Este es el primer paso para trazar el suyo.",
    form_email_label: "Correo Electrónico",
    form_email_placeholder: "Su correo electrónico",
    form_subject_label: "Asunto",
    form_subject_placeholder: "Asunto del mensaje",
    form_message_label: "Mensaje",
    form_message_placeholder: "Describa su desafío u oportunidad...",
    form_cta: "Enviar Mensaje",
    lang_popup_title: "Idioma",
  },
  en: {
    nav_inicio: "Home",
    nav_metodologia: "Methodology",
    nav_evidencia: "Evidence",
    nav_arquitecto: "The Architect",
    nav_contacto: "Contact",
    hero_kicker: "Crafting The Legacy",
    hero_title1_lines: [
      "Yesterday's solutions",
      "won't solve",
      "tomorrow's",
      "challenges."
    ],
    hero_title2_lines: [
      "Are you building a",
      "system to survive,",
      "or a legacy to",
      "<em>transcend?</em>"
    ],
    hero_subtitle: "Potential without an architecture for impact is just a wasted opportunity.",
    hero_cta: "Discover the Legacy Architecture",
    metodologia_title: "Our Methodology: The Legacy Architecture",
    metodologia_p: "Trust is built on clarity. Our methodology is a transparent and collaborative process, designed for leaders of organizations, development initiatives, and tech ventures to transform uncertainty into a strategic roadmap. Each phase is geared towards building a distinctive capability and a sustainable, long-term impact.",
    metodologia_book_title: "Strategic Dossier: The Legacy Architecture Protocol",
    metodologia_cta: "Download Dossier",
    fase1_title: "Phase 1 — Impact Architecture",
    fase1_p: "A deep analysis to define the 'strategic north' and build a clear, low-risk blueprint for your initiative.",
    fase2_title: "Phase 2 — Execution Engine",
    fase2_p: "The implementation of an agile management system that empowers your team to achieve tangible, measurable results.",
    fase3_title: "Phase 3 — Legacy Orchestration",
    fase3_p: "The transformation of your organization's new internal capabilities into a sustainable and lasting impact.",
    evidencia_title: "Our Philosophy in Action",
    evidencia_p: "Each project is the materialization of our philosophy. This is not a list of accomplishments, but evidence of a transformation process. The following cases illustrate how systems architecture is applied to different types of complex challenges.",
    conexa_title: "CONEXA: International Development Initiative",
    conexa_p: "Architecture of the strategy and technological system for a global consortium of universities and NGOs, creating a national-scale digital ecosystem for social impact.",
    ceic_title: "CEIC Projects: Strategic Consulting and Fundraising",
    ceic_p: "Acting as a consultant for an academic institution, structuring high-impact projects that achieved validation and funding from prestigious entities like FULBRIGHT and ERASMUS+.",
    cardiozono_title: "Cardiozono Clinic: Large-Scale Infrastructure Management",
    cardiozono_p: "Leadership in the management and design of a large-scale infrastructure project (a third-level hospital clinic of more than 29 Ha of constructive area), with comprehensive handling of technical, regulatory, and stakeholder complexities to ensure delivery.",
    arquitecto_title: "The Legacy Architect",
    arquitecto_p: "My approach integrates two disciplines: the vision of a systems architect, who designs complex ecosystems, and the expertise of a master craftsman, who takes personal responsibility for the quality of execution. I act as a trusted partner for leaders of nations, international organizations, and corporations seeking fundamental transformations. Together, we don't just solve problems; we design the future.",
    arquitecto_subtitle: "Your vision. Our collaboration. Your legacy.",
    arquitecto_subtext: "Every legacy begins with a first stroke.",
    arquitecto_cta: "Begin The Design of Your Legacy",
    footer_copyright_part1: "© 2025 Elvis Pozo — Legacy Architecture | Powered by ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Back to top ↑",
    popup_title: "Start a Conversation",
    popup_subtitle: "A legacy isn't built by chance, it's designed. This is the first step to chart yours.",
    form_email_label: "Email Address",
    form_email_placeholder: "Your email address",
    form_subject_label: "Subject",
    form_subject_placeholder: "Subject of the message",
    form_message_label: "Message",
    form_message_placeholder: "Describe your challenge or opportunity...",
    form_cta: "Send Message",
    lang_popup_title: "Language",
  },
  pt: {
    nav_inicio: "Início",
    nav_metodologia: "Metodologia",
    nav_evidencia: "Evidência",
    nav_arquitecto: "O Arquiteto",
    nav_contacto: "Contato",
    hero_kicker: "Tecendo o Legado",
    hero_title1_lines: [
      "As soluções de ontem",
      "não resolverão os",
      "desafios da",
      "próxima década."
    ],
    hero_title2_lines: [
      "Está a construir um",
      "sistema para sobreviver,",
      "ou um legado para",
      "<em>trascender?</em>"
    ],
    hero_subtitle: "O potencial sem uma arquitetura de impacto é apenas uma oportunidade desperdiçada.",
    hero_cta: "Descubra a Arquitetura do Legado",
    metodologia_title: "A Nossa Metodologia: A Arquitetura de Legado",
    metodologia_p: "A confiança constrói-se sobre a clareza. A nossa metodologia é um processo transparente e colaborativo, concebido para que líderes de organizações, iniciativas de desenvolvimento e ventures tecnológicas transformem a incerteza num roteiro estratégico. Cada fase está orientada para construir uma capacidade distinta e um impacto sustentável ao longo do tempo.",
    metodologia_book_title: "Dossiê Estratégico: O Protocolo de Arquitetura de Legado",
    metodologia_cta: "Descargar Dossiê",
    fase1_title: "Fase 1 — Arquitetura de Impacto",
    fase1_p: "Uma análise profunda para definir o 'norte estratégico' e construir um blueprint claro e de baixo risco para a sua iniciativa.",
    fase2_title: "Fase 2 — Motor de Execução",
    fase2_p: "A implementação de um sistema de gestão ágil que potencia a sua equipa para obter resultados tangíveis e mensuráveis.",
    fase3_title: "Fase 3 — Orquestração do Legado",
    fase3_p: "A transformação da nova capacidade interna da sua organização num impacto sustentável e duradouro.",
    evidencia_title: "A Nossa Filosofia em Ação",
    evidencia_p: "Cada projeto é a materialização da nossa filosofia. Não se trata de uma lista de conquistas, mas da evidência de um processo de transformação. Os casos seguintes ilustram como a arquitetura de sistemas é aplicada a diferentes tipos de desafios complexos.",
    conexa_title: "CONEXA: Iniciativa de Desenvolvimento Internacional",
    conexa_p: "Arquitetura da estratégia e do sistema tecnológico para um consórcio global de universidades e ONGs, criando um ecossistema digital de impacto social em escala nacional.",
    ceic_title: "Projetos CEIC: Consultoria Estratégica e Captação de Recursos",
    ceic_p: "Atuação como consultor para uma instituição acadêmica, estruturando projetos de alto impacto que alcançaram validação e financiamento de entidades de prestígio como FULLBRIGHT e ERASMUS+.",
    cardiozono_title: "Clínica Cardiozono: Gestão de Infraestrutura em Grande Escala",
    cardiozono_p: "Liderança na gestão e design de um projeto de infraestrutura em grande escala (clínica hospitalar de terceiro nível com mais de 29 ha de área construída), com gestão integral de complexidades técnicas, regulatórias e de stakeholders para garantir a entrega.",
    arquitecto_title: "O Arquiteto de Legado",
    arquitecto_p: "A minha abordagem integra duas disciplinas: a visão de um arquiteto de sistemas, que projeta ecossistemas complexos, e a perícia de um mestre artesão, que se responsabiliza pessoalmente pela qualidade da execução. Atuo como um parceiro de confiança para líderes de nações, organizações internacionais e corporações que procuram transformações fundamentais. Juntos, não apenas resolvemos problemas; desenhamos o futuro.",
    arquitecto_subtitle: "A sua visão. A nossa colaboração. O seu legado.",
    arquitecto_subtext: "Cada legado começa com um primeiro traço.",
    arquitecto_cta: "Iniciar o Design do seu Legado",
    footer_copyright_part1: "© 2025 Elvis Pozo — Arquitetura de Legado | Potenciado por ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Voltar ao topo ↑",
    popup_title: "Iniciar uma Conversa",
    popup_subtitle: "Um legado não se constrói por acaso, é desenhado. Este é o primeiro passo para traçar o seu.",
    form_email_label: "Endereço de E-mail",
    form_email_placeholder: "Seu endereço de e-mail",
    form_subject_label: "Assunto",
    form_subject_placeholder: "Assunto da mensagem",
    form_message_label: "Mensagem",
    form_message_placeholder: "Describa seu desafio ou oportunidade...",
    form_cta: "Enviar Mensagem",
    lang_popup_title: "Idioma",
  }
};

const Preloader = React.forwardRef((_, ref) => {
    const { preloaderRef, circleRef, nameRef, nameMaskRef } = ref;
    return (
        <div ref={preloaderRef} className="preloader">
            <div ref={circleRef} className="preloader-circle"></div>
            <div ref={nameMaskRef} className="preloader-name-mask">
                <span ref={nameRef}>Elvis Pozo</span>
            </div>
        </div>
    );
});

Preloader.displayName = 'Preloader';


export default function LandingMain() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLangPopupVisible, setIsLangPopupVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to English as per requirements

  const t = translations[language];

  // Refs for animation targets
  const preloaderRef = useRef();
  const circleRef = useRef();
  const nameRef = useRef();
  const nameMaskRef = useRef();
  const headerRef = useRef();
  const title1Ref = useRef();
  const title2Ref = useRef();
  const kickerRef = useRef();
  const leadRef = useRef();
  const ctaRef = useRef();
  const contentRef = useRef();
  const vSeparatorRef = useRef(); // Ref for the target line

  const imageUrls = {
    elvis: "/images/elvis-pozo.png",
    portadaLibro: "/images/portada_libro.png",
    conexaLogo: "https://placehold.co/80x80/404040/FBF9F6?text=CONEXA",
    ceicIcon: "https://placehold.co/80x80/999999/1A202C?text=CEIC",
    cardiozonoLogo: "https://placehold.co/80x80/f5f5f5/1A202C?text=CZ",
  };

  // --- EFFECTS ---
  
  // Load GSAP script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // Detect browser language ONCE on initial load
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = userLang.split('-')[0];
    if (['es', 'en', 'pt'].includes(initialLang)) {
        setLanguage(initialLang);
    }
  }, []); 

  // Main animation timeline
  useEffect(() => {
    if (!isScriptLoaded || !window.gsap) return;
    
    const gsap = window.gsap;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
      gsap.set(contentRef.current, { autoAlpha: 1 });
      return;
    }
    
    const runAnimation = async () => {
        await document.fonts.ready;

        if (!vSeparatorRef.current || !nameRef.current || !title1Ref.current || !title2Ref.current) return;

        // Make content visible to measure
        gsap.set(contentRef.current, { visibility: 'visible', opacity: 0 });
        
        const separatorRect = vSeparatorRef.current.getBoundingClientRect();
        const textRect = nameRef.current.getBoundingClientRect();
        
        gsap.set(contentRef.current, { visibility: 'hidden' });

        const navLinks = gsap.utils.toArray('nav a, nav .nav-button');
        
        const finalX = separatorRect.left + (separatorRect.width / 2);
        const finalYCenter = separatorRect.top + (separatorRect.height / 2);

        const isMobile = window.innerWidth <= 768;
        
        // Mobile: Transform to horizontal line
        if (isMobile) {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsLoading(false);
                    gsap.set(contentRef.current, { autoAlpha: 1 });
                }
            });

            tl.set(circleRef.current, {
                width: '120px',
                height: '120px',
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 1,
                opacity: 1
            })
            .set(nameMaskRef.current, {
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50,
                width: textRect.width + 'px',
                height: textRect.height + 'px'
            })
            .to(circleRef.current, {
                scale: 0,
                duration: 0.8,
                ease: "power2.inOut"
            })
            .to(nameRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")
            .to(circleRef.current, {
                width: '8px',
                height: '8px',
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            })
            .to(circleRef.current, {
                width: '60px',
                height: '2px',
                duration: 0.6,
                ease: "power2.inOut"
            })
            .to(preloaderRef.current, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            // Desktop: Transform to vertical line
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsLoading(false);
                    gsap.set(contentRef.current, { autoAlpha: 1 });
                }
            });

            tl.set(circleRef.current, {
                width: '120px',
                height: '120px',
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 1,
                opacity: 1
            })
            .set(nameMaskRef.current, {
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50,
                width: textRect.width + 'px',
                height: textRect.height + 'px'
            })
            .to(circleRef.current, {
                scale: 0,
                duration: 0.8,
                ease: "power2.inOut"
            })
            .to(nameRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")
            .to(circleRef.current, {
                width: '8px',
                height: '8px',
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            })
            .to(circleRef.current, {
                left: finalX + 'px',
                top: finalYCenter + 'px',
                xPercent: -50,
                yPercent: -50,
                duration: 1.2,
                ease: "power2.inOut"
            })
            .to(circleRef.current, {
                width: '1px',
                height: separatorRect.height + 'px',
                duration: 0.6,
                ease: "power2.inOut"
            })
            .to(preloaderRef.current, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    runAnimation();
  }, [isScriptLoaded]);

  // Scroll animations
  useEffect(() => {
    if (!isScriptLoaded || !window.gsap || isLoading) return;
    
    const gsap = window.gsap;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [isScriptLoaded, isLoading]);

  // Language change handler
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setIsLangPopupVisible(false);
    setIsMobileMenuOpen(false);
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // LinkedIn icon component
  const LinkedInIcon = () => (
    <a href="https://linkedin.com/in/elvispozo" target="_blank" rel="noopener noreferrer" className="linkedin-link">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.5" />
        <g fill="currentColor" transform="scale(0.375) translate(20, 20.5)">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </g>
      </svg>
    </a>
  );

  const ContactPopup = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose} aria-label="Cerrar formulario">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2>{t.popup_title}</h2>
          <p className="muted">{t.popup_subtitle}</p>
          <form 
            action="https://formspree.io/f/elvispozo@eurekagc.com"
            method="POST" 
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="email">{t.form_email_label}</label>
              <input id="email" type="email" name="email" placeholder={t.form_email_placeholder} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.form_subject_label}</label>
              <input id="subject" type="text" name="subject" placeholder={t.form_subject_placeholder} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.form_message_label}</label>
              <textarea id="message" name="message" placeholder={t.form_message_placeholder} rows="5" required></textarea>
            </div>
            <button type="submit" className="cta">{t.form_cta}</button>
          </form>
        </div>
      </div>
    );
  };
  
  const LanguagePopup = ({ isVisible, onClose, onSelect }) => {
    if (!isVisible) return null;
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content lang-popup" onClick={(e) => e.stopPropagation()}>
           <button className="close-button" onClick={onClose} aria-label="Cerrar selector de idioma">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2>{t.lang_popup_title}</h2>
          <div className="lang-options">
            <button 
              onClick={() => onSelect('en')}
              className={language === 'en' ? 'active' : ''}
            >
              English
            </button>
            <button 
              onClick={() => onSelect('es')}
              className={language === 'es' ? 'active' : ''}
            >
              Español
            </button>
            <button 
              onClick={() => onSelect('pt')}
              className={language === 'pt' ? 'active' : ''}
            >
              Português
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        /* --- SCROLLBAR STABILITY --- */
        html { overflow-y: scroll; scroll-behavior: smooth; }

        /* --- PRELOADER STYLES --- */
        .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 10002; }
        .preloader-circle { background: var(--carbon); border-radius: 50%; transform: scale(0); opacity: 0; position: absolute; }
        .preloader-name-mask { position: absolute; overflow: hidden; }
        .preloader-name-mask span { display: block; font-family: Lora, Georgia, serif; font-size: 1.25rem; color: var(--carbon); transform: translateX(105%); white-space: nowrap; }
        /* --- END PRELOADER --- */

        :root{ --carbon:#0F0F0F; --carbon-900:#0B0B0B; --offwhite:#F4F1EC; --muted:#B4B0A8; --bronze:#8C6A4A; --bronze-700:#6E5A3A; --bronze-300:#B88C65; --accent:#0E3E46; --accent-300:#2E6A73; --maxw:1200px; --elev:0 10px 30px rgba(30,25,20,.12); --bezier:cubic-bezier(.25,.1,.25,1);} 
        body{margin:0;padding:0;background:var(--carbon);font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;} 
        *,*:before,*:after{box-sizing:border-box} 
        h1,h2,h3{font-family:Lora,Georgia,serif;line-height:1.1;letter-spacing:-.02em; margin: 0 0 1rem 0; padding-bottom: 0.1em;} 
        h1{font-size:clamp(2.5rem,4vw,4.2rem);} 
        h2{font-size:clamp(1.9rem,2.8vw,2.8rem)} 
        h3{font-size:clamp(1.15rem,1.6vw,1.35rem); margin-bottom: 0.75rem;} 
        p{line-height:1.65;font-size:clamp(1rem,1.1vw,1.125rem); margin: 0 0 1.5rem 0;} 
        p:last-child {margin-bottom: 0;} .muted{color:#5a5957}
        .section{position:relative} 
        .wrap{max-width:var(--maxw);margin:0 auto;padding-left: clamp(2rem, 5vw, 4rem); padding-right: clamp(2rem, 5vw, 4rem); padding-top: 8vh; padding-bottom: 8vh;}
        #metodologia .wrap, #evidencia .wrap, #el-arquitecto .wrap { padding-top: 14vh; padding-bottom: 14vh; }
        
        /* Header Styles */
        .site-header {position: fixed; top:0; left:0; right:0; background: rgba(15,15,15,0.72); backdrop-filter: blur(8px); z-index: 9999; border-bottom: 1px solid rgba(255,255,255,.06); transform: translateY(0);} 
        .nav-wrap {max-width: var(--maxw); margin: 0 auto; padding: .8rem clamp(2rem, 5vw, 4rem); display: flex; justify-content: space-between; align-items: center;} 
        .logo a {font-family: Lora, Georgia, serif; font-size: 1.25rem; font-weight: 300; color: #f4f1ec; letter-spacing:.01em; text-decoration: none; transition: color .25s var(--bezier);} 
        .logo a:hover { color: var(--bronze-300); } 
        
        /* Desktop Navigation */
        nav { display: flex; align-items: center; font-family: Inter, system-ui, sans-serif; }
        nav a, .nav-button { all: unset; box-sizing: border-box; cursor: pointer; position:relative; margin-left: 1.2rem; color: #f4f1ec; text-decoration: none; font-weight: 500; font-size: .96rem; transition: color .25s var(--bezier); } 
        nav a:after, .nav-button:after {content:""; position:absolute; left:0; right:0; bottom:-6px; height:1px; background: linear-gradient(90deg,transparent, var(--bronze-300), transparent); transform:scaleX(0); transform-origin:center; transition:transform .35s var(--bezier)} 
        nav a:hover, .nav-button:hover { color: var(--bronze-300); } 
        nav a:hover:after, .nav-button:hover:after{ transform:scaleX(1) } 
        nav a.active, .nav-button.active{ color: var(--bronze-300) }
        
        /* Mobile Navigation */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #f4f1ec;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(15,15,15,0.95);
          backdrop-filter: blur(12px);
          transition: right 0.3s var(--bezier);
          z-index: 10000;
          padding: 2rem;
          border-left: 1px solid rgba(255,255,255,.06);
        }
        
        .mobile-menu.open {
          right: 0;
        }
        
        .mobile-menu-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #f4f1ec;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu-content {
          margin-top: 3rem;
        }
        
        .mobile-menu-item {
          display: block;
          color: #f4f1ec;
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,.06);
          font-weight: 500;
          transition: color .25s var(--bezier);
        }
        
        .mobile-menu-item:hover {
          color: var(--bronze-300);
        }
        
        .mobile-lang-section {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        
        .mobile-lang-title {
          color: #f4f1ec;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .mobile-lang-option {
          display: block;
          color: #f4f1ec;
          text-decoration: none;
          padding: 0.75rem 0;
          font-weight: 400;
          transition: color .25s var(--bezier);
          opacity: 0.7;
        }
        
        .mobile-lang-option.active {
          color: var(--bronze-300);
          opacity: 1;
          font-weight: 500;
        }
        
        .mobile-lang-option:hover {
          color: var(--bronze-300);
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          nav { display: none; }
          .mobile-menu-toggle { display: block; }
        }
        
        .hero{min-height:92vh;background: radial-gradient(120% 90% at 70% 40%, #171717 0%, #0f0f0f 60%, #0a0a0a 100%); color:#f6f5f3; overflow:hidden; padding-top:82px; border-bottom:1px solid rgba(255,255,255,.06); display: flex; align-items: center; justify-content: center;} 
        .hero .wrap{display:grid;grid-template-columns:1fr;text-align:center;gap:clamp(0.6rem, 1.5vw, 1.8rem);align-items:center;} 
        .hero .copy { max-width: 1000px; margin: 0 auto; }
        .kicker{font-family: Inter, system-ui, sans-serif; letter-spacing:.14em;text-transform:uppercase;font-size:.78rem;color:#D2C7BC} 

        :root { --hero-line-height: 1.18; }
        .hero h1 { 
          margin: 0 auto 0.5rem; 
          font-weight: 400;
          color:#F6F5F3;
        }
        .hero-line {
          display: block;
          line-height: var(--hero-line-height);
          min-height: 1.2em;
          overflow: visible;
        }

        .headline-right-wrapper em, .hero-line em {
            color: var(--bronze-300);
            font-style: normal;
            -webkit-text-fill-color: var(--bronze-300);
            background: none;
        }

        .lead{color:#E6E2DC;max-width:50ch; margin-left: auto; margin-right: auto;}
        
        .hero-headline { display: flex; align-items: flex-end; justify-content: center; gap: clamp(0.7rem, 1.4vw, 1.5rem); position: relative; }
        .headline-left { display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem; text-align: right; }
        .hero-headline > .headline-left, .hero-headline > .headline-right-wrapper { max-width: 45ch; }
        .headline-right-wrapper { text-align: left; }
        
        .v-separator { 
            width: 1px; 
            align-self: stretch; 
            min-height: 5em; 
            background: var(--bronze-300, #B88C65);
            opacity: 0;
        } 

        .hero-title-wrapper { overflow: visible; }

        .cta{ display:inline-block; margin-top:1.25rem; padding:.95rem 1.5rem; border-radius:.9rem; font-weight:600; text-decoration:none; transition: transform .35s var(--bezier), box-shadow .35s var(--bezier), filter .35s var(--bezier); border:none; cursor: pointer; } 
        .cta-wrapper { display: inline-block; }
        .cta:not(.cta-legado) { color: var(--carbon); text-shadow: 1px 1px 1px rgba(255,255,255,.2); background: repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px), linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), linear-gradient(170deg, #6E5A3A 0%, #B88C65 40%, #B88C65 60%, #6E5A3A 100%), linear-gradient(270deg, rgba(255,255,255,.15), rgba(0,0,0,.2)); background-blend-mode: normal, normal, overlay, normal; box-shadow: inset 0 1px 2px rgba(255,255,255,0.4), 0 4px 8px rgba(0,0,0,0.3); border: 1px solid rgba(0,0,0,.3); }
        .cta:not(.cta-legado):hover{ filter:brightness(1.15);  transform: translateY(-2px);  box-shadow: inset 0 1px 2px rgba(255,255,255,0.4), 0 8px 16px rgba(0,0,0,0.3); } 
        .cta-legado { background: transparent; color: var(--bronze-300); border: 2px solid; border-image-source: linear-gradient(160deg, var(--bronze-300), var(--bronze-700)); border-image-slice: 1; }
        .cta-legado:hover { filter: brightness(1.2); transform: translateY(-2px); }
        .cta:focus-visible{ outline:2px solid var(--bronze-300); outline-offset:3px }

        .light{background:linear-gradient(180deg,#F6F2EC 0%, #F1EADF 100%)} .dark{background:linear-gradient(180deg,#121212 0%, #0E0E0E 100%)}
        
        .animated-section .anim-item-1, .animated-section .anim-item-2, .animated-section .anim-item-3, .animated-section .anim-item-4, .animated-section .anim-item-5, .animated-section .anim-item-6, .animated-section .anim-item-7 { opacity: 0; transform: translateY(30px); transition: opacity 0.8s var(--bezier), transform 0.8s var(--bezier); }
        .protocol-grid.animate .anim-item-1 { opacity: 1; transform: translateY(0); transition-delay: 0.1s; } .protocol-grid.animate .anim-item-2 { opacity: 1; transform: translateY(0); transition-delay: 0.25s; } .protocol-grid.animate .anim-item-3 { opacity: 1; transform: translateY(0); transition-delay: 0.6s; } .protocol-grid.animate .anim-item-4 { opacity: 1; transform: translateY(0); transition-delay: 0.75s; } .protocol-grid.animate .anim-item-5 { opacity: 1; transform: translateY(0); transition-delay: 0.9s; } .protocol-grid.animate .anim-item-6 { opacity: 1; transform: translateY(0); transition-delay: 1.05s; }
        .evidence-thirds-grid.animate .anim-item-1 { opacity: 1; transform: translateY(0); transition-delay: 0.1s; } .evidence-thirds-grid.animate .anim-item-2 { opacity: 1; transform: translateY(0); transition-delay: 0.25s; } .evidence-thirds-grid.animate .anim-item-3 { opacity: 1; transform: translateY(0); transition-delay: 0.6s; } .evidence-thirds-grid.animate .anim-item-4 { opacity: 1; transform: translateY(0); transition-delay: 0.75s; } .evidence-thirds-grid.animate .anim-item-5 { opacity: 1; transform: translateY(0); transition-delay: 0.9s; } .evidence-thirds-grid.animate .anim-item-6 { opacity: 1; transform: translateY(0); transition-delay: 1.05s; }
        .arch-grid.animate .anim-item-1 { opacity: 1; transform: translateY(0); transition-delay: 0.1s; } .arch-grid.animate .anim-item-2 { opacity: 1; transform: translateY(0); transition-delay: 0.25s; } .arch-grid.animate .anim-item-3 { opacity: 1; transform: translateY(0); transition-delay: 0.6s; } .arch-grid.animate .anim-item-4 { opacity: 1; transform: translateY(0); transition-delay: 0.75s; } .arch-grid.animate .anim-item-5 { opacity: 1; transform: translateY(0); transition-delay: 0.9s; } .arch-grid.animate .anim-item-6 { opacity: 1; transform: translateY(0); transition-delay: 1.05s; }

        .protocol-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1rem,2.2vw,2rem); align-items: stretch;}
        .phase-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem; height: 100%; margin-top: 3rem;}
        .arch-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:stretch}
        #el-arquitecto .image-box { min-height: 75vh; }
        #el-arquitecto .copy { align-self: center; }
        .cta-block{text-align:center} .cta-block h2{letter-spacing:-.01em}
        .image-box { border-radius:22px; background-size: cover; background-position: center; position:relative; overflow:hidden; height: 100%; }
        .image-box img { width: 100%; height: 100%; object-fit: cover; }
        .interactive-text { color: var(--text-color); background-color: var(--text-color); background-image: radial-gradient(circle 112px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), var(--accent-300), transparent); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .mouse-parallax { transition: transform 0.2s var(--bezier); }
        .cursor{position:fixed; top:0; left:0; width:54px; height:54px; border-radius:50%; border: 1px solid var(--accent-300); mix-blend-mode:difference; pointer-events:none; transform:translate(-50%,-50%); transition: width .25s var(--bezier), height .25s var(--bezier), border-color .25s var(--bezier), opacity .25s var(--bezier); z-index:10001; opacity:1} 
        .cursor.-link{ width:114px; height:114px; border-color:var(--bronze-300) }
        .dark h1,.dark h2,.dark p { --text-color: #f4f1ec; } .light h2,.light p { --text-color: #0f0f0f; } .light .muted { --text-color: #5a5957; } .hero .kicker { --text-color: #D2C7BC; } .hero h1 { --text-color: #F6F5F3; } .hero .lead { --text-color: #E6E2DC; }
        .rail{position:fixed; left:14px; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:10px; z-index:9998; filter: drop-shadow(0 4px 12px rgba(0,0,0,.4));} .dot{width:8px;height:8px;border-radius:50%; background:rgba(255,255,255,.25); border:1px solid rgba(255,255,255,.25); transition:transform .35s var(--bezier), background .35s var(--bezier), border-color .35s var(--bezier)} .dot.active{ transform:scale(1.5); background:var(--bronze-300); border-color:transparent }
        
        :root{ --evidence-muted:#6B7280; --evidence-bronze:#B28448; --evidence-maxw:1400px; --evidence-elev:0 20px 50px rgba(30,25,20,.08); --evidence-bezier:cubic-bezier(.25,.1,.25,1); --evidence-text-dark: #1A202C; --evidence-text-light: #FBF9F6; --evidence-text-muted-dark: #D1D5DB; --evidence-separator-bg: #0B0B0B; --evidence-card-conexa-bg: #404040; --evidence-card-ceic-bg: #999999; --evidence-card-cardiozono-bg: #f5f5f5; } 
        #evidencia { font-family:Inter,system-ui,sans-serif; } #evidencia h2, #evidencia h3{font-family:Lora,Georgia,serif;line-height:1.2;margin:0 0 .75rem 0;letter-spacing:-.02em;} #evidencia h2{font-size:clamp(2.2rem, 3.5vw, 3rem); --text-color: var(--evidence-text-dark); margin-bottom: 1rem;} #evidencia h3{font-size:clamp(1.2rem, 1.8vw, 1.4rem); color: var(--evidence-text-dark);} #evidencia p{line-height:1.65;font-size:clamp(1rem, 1.1vw, 1.125rem); color: #4A5568;} #evidencia .muted{--text-color: var(--evidence-muted);}
        .evidence-thirds-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 1.5rem; min-height: 85vh; }
        .evidence-text-block { grid-column: 1 / 2; grid-row: 1 / 3; padding: 2rem; text-align: right; display: flex; flex-direction: column; justify-content: center; }
        .evidence-separator { grid-column: 2 / 3; grid-row: 2 / 3; background: radial-gradient(120% 90% at 70% 40%, #1c1c1c 0%, #0f0f0f 60%, #0a0a0a 100%); box-shadow: inset 0 0 140px rgba(255,255,255,.04),0 30px 80px rgba(0,0,0,.6); border: 1px solid rgba(255,255,255,.06); border-radius: 1.25rem; }
        .evidence-card { padding: 2rem; border-radius: 1.25rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; position: relative; overflow: hidden; }
        .evidence-card-conexa { grid-column: 3 / 4; grid-row: 1 / 2; background: var(--evidence-card-conexa-bg); color: var(--evidence-text-light); }
        .evidence-card-ceic { grid-column: 3 / 4; grid-row: 2 / 3; background: var(--evidence-card-ceic-bg); color: var(--evidence-text-dark); }
        .evidence-card-cardiozono { grid-column: 3 / 4; grid-row: 3 / 4; background: var(--evidence-card-cardiozono-bg); color: var(--evidence-text-dark); }
        .evidence-card-logo { width: 80px; height: 80px; margin-bottom: 1.5rem; border-radius: 12px; }
        .evidence-card h3 { margin-bottom: 1rem; font-size: clamp(1rem, 1.4vw, 1.2rem); }
        .evidence-card p { font-size: clamp(0.85rem, 1vw, 0.95rem); line-height: 1.5; margin: 0; }

        /* Mobile responsive adjustments for methodology section */
        @media (max-width: 768px) {
          .protocol-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .protocol-grid .copy {
            order: 1;
          }
          
          .protocol-grid .image-box {
            order: 4;
            min-height: 300px;
          }
          
          .phase-cards {
            order: 3;
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .evidence-thirds-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 1rem;
            min-height: auto;
          }
          
          .evidence-text-block {
            grid-column: 1;
            grid-row: auto;
            text-align: center;
            padding: 1rem;
          }
          
          .evidence-separator {
            grid-column: 1;
            grid-row: auto;
            height: 2px;
            width: 60px;
            margin: 1rem auto;
            background: var(--bronze-300);
          }
          
          .evidence-card {
            grid-column: 1;
            grid-row: auto;
            padding: 1.5rem;
          }
        }

        .popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10003; }
        .popup-content { background: #fff; border-radius: 12px; padding: 2rem; max-width: 500px; width: 90%; position: relative; }
        .close-button { position: absolute; top: 1rem; right: 1rem; background: none; border: none; cursor: pointer; color: #666; }
        .contact-form { margin-top: 1rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--bronze-300); }
        
        .lang-popup { max-width: 300px; }
        .lang-options { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
        .lang-options button { padding: 0.75rem 1rem; border: 1px solid #ddd; background: #fff; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
        .lang-options button:hover { background: #f5f5f5; }
        .lang-options button.active { background: var(--bronze-300); color: #fff; border-color: var(--bronze-300); }

        /* Book cover styling - remove black background */
        .book-cover-container {
          background: transparent !important;
          border-radius: 1.25rem;
          overflow: hidden;
          position: relative;
        }
        
        .book-cover-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
          font-family: Lora, Georgia, serif;
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          line-height: 1.4;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          max-width: 80%;
        }

        @media (max-width: 768px) {
          .book-cover-text {
            font-size: clamp(0.8rem, 3vw, 1rem);
          }
        }
      `}</style>

      {isLoading && (
        <Preloader ref={{ preloaderRef, circleRef, nameRef, nameMaskRef }} />
      )}

      <div ref={contentRef} style={{ visibility: 'hidden', opacity: 0 }}>
        {/* Header */}
        <header ref={headerRef} className="site-header">
          <div className="nav-wrap">
            <div className="logo">
              <a href="#inicio">Elvis Pozo</a>
            </div>
            
            {/* Desktop Navigation */}
            <nav>
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>{t.nav_inicio}</a>
              <a href="#metodologia" onClick={(e) => { e.preventDefault(); scrollToSection('metodologia'); }}>{t.nav_metodologia}</a>
              <a href="#evidencia" onClick={(e) => { e.preventDefault(); scrollToSection('evidencia'); }}>{t.nav_evidencia}</a>
              <a href="#el-arquitecto" onClick={(e) => { e.preventDefault(); scrollToSection('el-arquitecto'); }}>{t.nav_arquitecto}</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); setIsPopupVisible(true); }}>{t.nav_contacto}</a>
              <button 
                className="nav-button" 
                onClick={() => setIsLangPopupVisible(true)}
              >
                {t.lang_popup_title}
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <div className="mobile-menu-content">
            <a href="#inicio" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>{t.nav_inicio}</a>
            <a href="#metodologia" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('metodologia'); }}>{t.nav_metodologia}</a>
            <a href="#evidencia" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('evidencia'); }}>{t.nav_evidencia}</a>
            <a href="#el-arquitecto" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('el-arquitecto'); }}>{t.nav_arquitecto}</a>
            <a href="#contacto" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); setIsPopupVisible(true); }}>{t.nav_contacto}</a>
            
            <div className="mobile-lang-section">
              <div className="mobile-lang-title">{t.lang_popup_title}</div>
              <a 
                href="#" 
                className={`mobile-lang-option ${language === 'en' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLanguageChange('en'); }}
              >
                English
              </a>
              <a 
                href="#" 
                className={`mobile-lang-option ${language === 'es' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLanguageChange('es'); }}
              >
                Español
              </a>
              <a 
                href="#" 
                className={`mobile-lang-option ${language === 'pt' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLanguageChange('pt'); }}
              >
                Português
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="inicio" className="hero section">
          <div className="wrap">
            <div className="copy">
              <div ref={kickerRef} className="kicker">{t.hero_kicker}</div>
              
              <div className="hero-headline">
                <div className="headline-left">
                  <div ref={title1Ref} className="hero-title-wrapper">
                    <h1>
                      {t.hero_title1_lines.map((line, index) => (
                        <span key={index} className="hero-line" dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                    </h1>
                  </div>
                </div>
                
                <div ref={vSeparatorRef} className="v-separator"></div>
                
                <div className="headline-right-wrapper">
                  <div ref={title2Ref} className="hero-title-wrapper">
                    <h1>
                      {t.hero_title2_lines.map((line, index) => (
                        <span key={index} className="hero-line" dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                    </h1>
                  </div>
                </div>
              </div>
              
              <div ref={leadRef} className="lead">
                <p>{t.hero_subtitle}</p>
              </div>
              
              <div ref={ctaRef} className="cta-wrapper">
                <button 
                  className="cta" 
                  onClick={() => scrollToSection('metodologia')}
                >
                  {t.hero_cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="metodologia" className="section light animated-section">
          <div className="wrap">
            <div className="protocol-grid">
              <div className="copy anim-item-1">
                <h2>{t.metodologia_title}</h2>
                <p>{t.metodologia_p}</p>
                
                <div className="phase-cards anim-item-3">
                  <div className="phase-card">
                    <h3>{t.fase1_title}</h3>
                    <p>{t.fase1_p}</p>
                  </div>
                  <div className="phase-card">
                    <h3>{t.fase2_title}</h3>
                    <p>{t.fase2_p}</p>
                  </div>
                  <div className="phase-card">
                    <h3>{t.fase3_title}</h3>
                    <p>{t.fase3_p}</p>
                  </div>
                </div>
              </div>
              
              <div className="image-box anim-item-2 book-cover-container">
                <img src={imageUrls.portadaLibro} alt="Portada del libro" />
                <div className="book-cover-text">
                  {t.metodologia_book_title}
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
                  <button className="cta">{t.metodologia_cta}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section id="evidencia" className="section light animated-section">
          <div className="wrap">
            <div className="evidence-thirds-grid">
              <div className="evidence-text-block anim-item-1">
                <h2>{t.evidencia_title}</h2>
                <p className="muted">{t.evidencia_p}</p>
              </div>
              
              <div className="evidence-separator anim-item-2"></div>
              
              <div className="evidence-card evidence-card-conexa anim-item-3">
                <img src={imageUrls.conexaLogo} alt="CONEXA Logo" className="evidence-card-logo" />
                <h3>{t.conexa_title}</h3>
                <p>{t.conexa_p}</p>
              </div>
              
              <div className="evidence-card evidence-card-ceic anim-item-4">
                <img src={imageUrls.ceicIcon} alt="CEIC Icon" className="evidence-card-logo" />
                <h3>{t.ceic_title}</h3>
                <p>{t.ceic_p}</p>
              </div>
              
              <div className="evidence-card evidence-card-cardiozono anim-item-5">
                <img src={imageUrls.cardiozonoLogo} alt="Cardiozono Logo" className="evidence-card-logo" />
                <h3>{t.cardiozono_title}</h3>
                <p>{t.cardiozono_p}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architect Section */}
        <section id="el-arquitecto" className="section dark animated-section">
          <div className="wrap">
            <div className="arch-grid">
              <div className="image-box anim-item-1">
                <img src={imageUrls.elvis} alt="Elvis Pozo" />
              </div>
              
              <div className="copy anim-item-2">
                <h2>{t.arquitecto_title}</h2>
                <p>{t.arquitecto_p}</p>
                
                <div className="cta-block anim-item-3">
                  <h2>{t.arquitecto_subtitle}</h2>
                  <p className="muted">{t.arquitecto_subtext}</p>
                  <button 
                    className="cta cta-legado" 
                    onClick={() => setIsPopupVisible(true)}
                  >
                    {t.arquitecto_cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="section dark" style={{ paddingTop: '4vh', paddingBottom: '4vh' }}>
          <div className="wrap" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <p className="muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              {t.footer_copyright_part1}
              <a href="https://eurekagc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bronze-300)' }}>
                {t.footer_copyright_part2}
              </a>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
              <LinkedInIcon />
              <a 
                href="#inicio" 
                onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
                style={{ color: 'var(--bronze-300)', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                {t.footer_backtotop}
              </a>
            </div>
          </div>
        </footer>

        {/* Popups */}
        <ContactPopup 
          isVisible={isPopupVisible} 
          onClose={() => setIsPopupVisible(false)} 
        />
        
        <LanguagePopup 
          isVisible={isLangPopupVisible} 
          onClose={() => setIsLangPopupVisible(false)} 
          onSelect={handleLanguageChange}
        />
      </div>
    </>
  );
}

