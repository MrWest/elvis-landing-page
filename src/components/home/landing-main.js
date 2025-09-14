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
      "próxima década.",
    ],
    hero_title2_lines: [
      "¿Está construyendo",
      "un sistema para",
      "sobrevivir,o un legado",
      "para <em>trascender?</em>",
    ],
    hero_subtitle:
      "El potencial sin una arquitectura de impacto es solo una oportunidad desperdiciada.",
    hero_cta: "Descubra la Arquitectura del Legado",
    metodologia_title: "Nuestra Metodología: La Arquitectura de Legado",
    metodologia_p:
      "La confianza se construye sobre la claridad. Nuestra metodología es un proceso transparente y colaborativo, diseñado para que líderes de organizaciones, iniciativas de desarrollo y ventures tecnológicas transformen la incertidumbre en una hoja de ruta estratégica. Cada fase está orientada a construir una capacidad distintiva y un impacto sostenible en el tiempo.",
    metodologia_cta: "Descargar Dosier",
    metodologia_book_title: "Dosier Estratégico: <br /> El Protocolo de Arquitectura de Legado",
    fase1_title: "Fase 1 — Arquitectura de Impacto",
    fase1_p:
      "Un análisis profundo para definir el 'norte estratégico' y construir un blueprint claro y de bajo riesgo para su iniciativa.",
    fase2_title: "Fase 2 — Motor de Ejecución",
    fase2_p:
      "La implementación de un sistema de gestión ágil que potencia a su equipo para obtener resultados tangibles y medibles.",
    fase3_title: "Fase 3 — Orquestación del Legado",
    fase3_p:
      "La transformación de la nueva capacidad interna de su organización en un impacto sostenible y duradero.",
    evidencia_title: "Nuestra Filosofía en Acción",
    evidencia_p:
      "Cada proyecto es la materialización de nuestra filosofía. No se trata de una lista de logros, sino de la evidencia de un proceso de transformación. Los siguientes casos ilustran cómo la arquitectura de sistemas se aplica a diferentes tipos de desafíos complejos.",
    conexa_title: "CONEXA: Iniciativa de Desarrollo Internacional",
    conexa_p:
      "Arquitectura de la estrategia y el sistema tecnológico para un consorcio global de universidades y ONGs, creando un ecosistema digital de impacto social a escala nacional.",
    ceic_title: "Proyectos CEIC: Consultoría Estratégica y Captación de Fondos",
    ceic_p:
      "Actuación como consultor para una institución académica, estructurando proyectos de alto impacto que lograron la validación y financiación de entidades de prestigio como FULLBRIGHT y ERASMUS+.",
    cardiozono_title:
      "Clínica Cardiozono: Gestión de Infraestructura a Gran Escala",
    cardiozono_p:
      "Liderazgo en la gestión y diseño de un proyecto de infraestructura a gran escala (Clínica hospitalaria de tercer nivel de más de 29 Ha de área constructiva), con manejo integral de complejidades técnicas, regulatorias y de stakeholders para asegurar la entrega.",
    arquitecto_title: "El Arquitecto de Legado",
    arquitecto_p:
      "Mi enfoque integra dos disciplinas: la visión de un arquitecto de sistemas, que diseña ecosistemas complejos, y la pericia de un maestro artesano, que se responsabiliza personalmente de la calidad de la ejecución. Actúo como un socio de confianza para líderes de naciones, organizaciones internacionales y corporaciones que buscan transformaciones fundamentales. Juntos, no solo resolvemos problemas; diseñamos el futuro.",
    arquitecto_subtitle: "Su visión. Nuestra colaboración. Su legado.",
    arquitecto_subtext: "Cada legado comienza con un primer trazo.",
    arquitecto_cta: "Iniciar el Diseño de su Legado",
    footer_copyright_part1:
      "© 2025 Elvis Pozo — Arquitectura de Legado | Potenciado por ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Volver arriba ↑",
    popup_title: "Iniciar una Conversación",
    popup_subtitle:
      "Un legado no se construye por casualidad, se diseña. Este es el primer paso para trazar el suyo.",
    form_email_label: "Correo Electrónico",
    form_email_placeholder: "Su correo electrónico",
    form_subject_label: "Asunto",
    form_subject_placeholder: "Asunto del mensaje",
    form_message_label: "Mensaje",
    form_message_placeholder: "Describa su desafío u oportunidad...",
    form_cta: "Enviar Mensaje",
    lang_popup_title: "Seleccionar idioma",
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
      "challenges.",
    ],
    hero_title2_lines: [
      "Are you building a",
      "system to survive,",
      "or a legacy to",
      "<em>transcend?</em>",
    ],
    hero_subtitle:
      "Potential without an architecture for impact is just a wasted opportunity.",
    hero_cta: "Discover the Legacy Architecture",
    metodologia_title: "Our Methodology: The Legacy Architecture",
    metodologia_p:
      "Trust is built on clarity. Our methodology is a transparent and collaborative process, designed for leaders of organizations, development initiatives, and tech ventures to transform uncertainty into a strategic roadmap. Each phase is geared towards building a distinctive capability and a sustainable, long-term impact.",
    metodologia_cta: "Download Dossier",
    metodologia_book_title: "Strategic Dossier: <br />  The Legacy Architecture Protocol",
    fase1_title: "Phase 1 — Impact Architecture",
    fase1_p:
      "A deep analysis to define the 'strategic north' and build a clear, low-risk blueprint for your initiative.",
    fase2_title: "Phase 2 — Execution Engine",
    fase2_p:
      "The implementation of an agile management system that empowers your team to achieve tangible, measurable results.",
    fase3_title: "Phase 3 — Legacy Orchestration",
    fase3_p:
      "The transformation of your organization's new internal capabilities into a sustainable and lasting impact.",
    evidencia_title: "Our Philosophy in Action",
    evidencia_p:
      "Each project is the materialization of our philosophy. This is not a list of accomplishments, but evidence of a transformation process. The following cases illustrate how systems architecture is applied to different types of complex challenges.",
    conexa_title: "CONEXA: International Development Initiative",
    conexa_p:
      "Architecture of the strategy and technological system for a global consortium of universities and NGOs, creating a national-scale digital ecosystem for social impact.",
    ceic_title: "CEIC Projects: Strategic Consulting and Fundraising",
    ceic_p:
      "Acting as a consultant for an academic institution, structuring high-impact projects that achieved validation and funding from prestigious entities like FULBRIGHT and ERASMUS+.",
    cardiozono_title:
      "Cardiozono Clinic: Large-Scale Infrastructure Management",
    cardiozono_p:
      "Leadership in the management and design of a large-scale infrastructure project (a third-level hospital clinic of more than 29 Ha of constructive area), with comprehensive handling of technical, regulatory, and stakeholder complexities to ensure delivery.",
    arquitecto_title: "The Legacy Architect",
    arquitecto_p:
      "My approach integrates two disciplines: the vision of a systems architect, who designs complex ecosystems, and the expertise of a master craftsman, who takes personal responsibility for the quality of execution. I act as a trusted partner for leaders of nations, international organizations, and corporations seeking fundamental transformations. Together, we don't just solve problems; we design the future.",
    arquitecto_subtitle: "Your vision. Our collaboration. Your legacy.",
    arquitecto_subtext: "Every legacy begins with a first stroke.",
    arquitecto_cta: "Begin The Design of Your Legacy",
    footer_copyright_part1:
      "© 2025 Elvis Pozo — Legacy Architecture | Powered by ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Back to top ↑",
    popup_title: "Start a Conversation",
    popup_subtitle:
      "A legacy isn't built by chance, it's designed. This is the first step to chart yours.",
    form_email_label: "Email Address",
    form_email_placeholder: "Your email address",
    form_subject_label: "Subject",
    form_subject_placeholder: "Subject of the message",
    form_message_label: "Message",
    form_message_placeholder: "Describe your challenge or opportunity...",
    form_cta: "Send Message",
    lang_popup_title: "Select language",
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
      "próxima década.",
    ],
    hero_title2_lines: [
      "Está a construir um",
      "sistema para sobreviver,",
      "ou um legado para",
      "<em>trascender?</em>",
    ],
    hero_subtitle:
      "O potencial sem uma arquitetura de impacto é apenas uma oportunidade desperdiçada.",
    hero_cta: "Descubra a Arquitetura do Legado",
    metodologia_title: "A Nossa Metodologia: A Arquitetura de Legado",
    metodologia_p:
      "A confiança constrói-se sobre a clareza. A nossa metodologia é um processo transparente e colaborativo, concebido para que líderes de organizações, iniciativas de desenvolvimento e ventures tecnológicas transformem a incerteza num roteiro estratégico. Cada fase está orientada para construir uma capacidade distinta e um impacto sustentável ao longo do tempo.",
    metodologia_cta: "Descarregar Dossiê",
    metodologia_book_title: "Dossiê Estratégico. <br /> O Protocolo de Arquitetura de Legado",
    fase1_title: "Fase 1 — Arquitetura de Impacto",
    fase1_p:
      "Uma análise profunda para definir o 'norte estratégico' e construir um blueprint claro e de baixo risco para a sua iniciativa.",
    fase2_title: "Fase 2 — Motor de Execução",
    fase2_p:
      "A implementação de um sistema de gestão ágil que potencia a sua equipa para obter resultados tangíveis e mensuráveis.",
    fase3_title: "Fase 3 — Orquestração do Legado",
    fase3_p:
      "A transformação da nova capacidade interna da sua organização num impacto sustentável e duradouro.",
    evidencia_title: "A Nossa Filosofia em Ação",
    evidencia_p:
      "Cada projeto é a materialização da nossa filosofia. Não se trata de uma lista de conquistas, mas da evidência de um processo de transformação. Os casos seguintes ilustram como a arquitetura de sistemas é aplicada a diferentes tipos de desafios complexos.",
    conexa_title: "CONEXA: Iniciativa de Desenvolvimento Internacional",
    conexa_p:
      "Arquitetura da estratégia e do sistema tecnológico para um consórcio global de universidades e ONGs, criando um ecossistema digital de impacto social em escala nacional.",
    ceic_title: "Projetos CEIC: Consultoria Estratégica e Captação de Recursos",
    ceic_p:
      "Atuação como consultor para uma instituição acadêmica, estruturando projetos de alto impacto que alcançaram validação e financiamento de entidades de prestígio como FULLBRIGHT e ERASMUS+.",
    cardiozono_title:
      "Clínica Cardiozono: Gestão de Infraestrutura em Grande Escala",
    cardiozono_p:
      "Liderança na gestão e design de um projeto de infraestrutura em grande escala (clínica hospitalar de terceiro nível com mais de 29 ha de área construída), com gestão integral de complexidades técnicas, regulatórias e de stakeholders para garantir a entrega.",
    arquitecto_title: "O Arquiteto de Legado",
    arquitecto_p:
      "A minha abordagem integra duas disciplinas: a visão de um arquiteto de sistemas, que projeta ecossistemas complexos, e a perícia de um mestre artesão, que se responsabiliza pessoalmente pela qualidade da execução. Atuo como um parceiro de confiança para líderes de nações, organizações internacionais e corporações que procuram transformações fundamentais. Juntos, não apenas resolvemos problemas; desenhamos o futuro.",
    arquitecto_subtitle: "A sua visão. A nossa colaboração. O seu legado.",
    arquitecto_subtext: "Cada legado começa com um primeiro traço.",
    arquitecto_cta: "Iniciar o Design do seu Legado",
    footer_copyright_part1:
      "© 2025 Elvis Pozo — Arquitetura de Legado | Potenciado por ",
    footer_copyright_part2: "EurekaGC",
    footer_backtotop: "Voltar ao topo ↑",
    popup_title: "Iniciar uma Conversa",
    popup_subtitle:
      "Um legado não se constrói por acaso, é desenhado. Este é o primeiro passo para traçar o seu.",
    form_email_label: "Endereço de E-mail",
    form_email_placeholder: "Seu endereço de e-mail",
    form_subject_label: "Assunto",
    form_subject_placeholder: "Assunto da mensagem",
    form_message_label: "Mensagem",
    form_message_placeholder: "Describa seu desafio ou oportunidade...",
    form_cta: "Enviar Mensagem",
    lang_popup_title: "Selecionar idioma",
  },
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

Preloader.displayName = "Preloader";

export default function LandingMain() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLangPopupVisible, setIsLangPopupVisible] = useState(false);
  const [language, setLanguage] = useState("en");

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
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Detect browser language ONCE on initial load
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = userLang.split("-")[0];
    if (["es", "en", "pt"].includes(initialLang)) {
      setLanguage(initialLang);
    }
  }, []);

  // Main animation timeline
  useEffect(() => {
    if (!isScriptLoaded || !window.gsap) return;

    const gsap = window.gsap;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
      gsap.set(contentRef.current, { autoAlpha: 1 });
      return;
    }

    const runAnimation = async () => {
      await document.fonts.ready;

      if (
        !vSeparatorRef.current ||
        !nameRef.current ||
        !title1Ref.current ||
        !title2Ref.current
      )
        return;

      // Make content visible to measure
      gsap.set(contentRef.current, { visibility: "visible", opacity: 0 });

      const separatorRect = vSeparatorRef.current.getBoundingClientRect();
      const textRect = nameRef.current.getBoundingClientRect();

      gsap.set(contentRef.current, { visibility: "hidden" });

      const navLinks = gsap.utils.toArray("nav a, nav .nav-button");

      const finalX = separatorRect.left + separatorRect.width / 2;
      const finalYCenter = separatorRect.top + separatorRect.height / 2;

      const newCircleDiameter = textRect.height * 2;
      const newCircleRadius = newCircleDiameter / 2;

      gsap.set(circleRef.current, {
        top: finalYCenter,
        left: finalX,
        width: newCircleDiameter,
        height: newCircleDiameter,
        xPercent: -50,
        yPercent: -50,
        margin: 0,
      });
      gsap.set(nameMaskRef.current, {
        top: finalYCenter,
        left: finalX,
        xPercent: -100,
        yPercent: -50,
        margin: 0,
        x: -(newCircleRadius + 11),
      });

      gsap.set(ctaRef.current, { y: 50, autoAlpha: 0 });
      gsap.set(vSeparatorRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
        },
      });

      const breathTl = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          paused: true,
        })
        .to(circleRef.current, {
          scale: 1.08,
          duration: 1.5,
          ease: "power1.inOut",
        });

      tl.to(circleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .add(() => breathTl.play())
        .to(nameRef.current, { x: 0, duration: 1, ease: "power2.out" }, "<")
        .to(
          nameRef.current,
          { x: "105%", duration: 0.6, ease: "power2.in" },
          "+=0.5"
        )
        .addLabel("toPoint")
        .add(() => breathTl.kill(), "toPoint")
        .to(
          circleRef.current,
          {
            width: 1,
            height: 1,
            borderRadius: "50%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "toPoint"
        )
        .to(circleRef.current, {
          height: separatorRect.height,
          width: 1,
          borderRadius: 0,
          duration: 1,
          ease: "power3.inOut",
        })
        .to(circleRef.current, {
          backgroundColor: "var(--bronze-300)",
          duration: 0.6,
          ease: "power1.inOut",
        })
        .to(preloaderRef.current, {
          backgroundColor: "rgba(255,255,255,0)",
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(
          contentRef.current,
          { autoAlpha: 1, duration: 0.6, ease: "power2.out" },
          "<"
        )
        .set(vSeparatorRef.current, { opacity: 1 }, "<")
        .to(preloaderRef.current, { autoAlpha: 0, duration: 0.6 }, "<")

        .from(
          title1Ref.current.querySelectorAll(".hero-line"),
          {
            x: "100%",
            duration: 1,
            ease: "expo.out",
            stagger: 0.15,
          },
          "+=0.2"
        )

        .from(
          title2Ref.current.querySelectorAll(".hero-line"),
          {
            x: "-100%",
            duration: 1,
            ease: "expo.out",
            stagger: 0.15,
          },
          "<"
        )

        .from(
          [kickerRef.current, leadRef.current],
          { opacity: 0, duration: 0.8, ease: "power2.inOut" },
          "-=0.8"
        )
        .addLabel("finalElements", "+=0.2")
        .from(
          headerRef.current,
          {
            y: "-100%",
            duration: 1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "finalElements"
        )
        .from(
          navLinks,
          {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          ctaRef.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "finalElements+=0.3"
        );
    };

    runAnimation();

    return () => {
      gsap.killTweensOf("*");
    };
  }, [isScriptLoaded, language]);

  // Other page interactions (unchanged)
  useEffect(() => {
    if (isLoading) return;

    document.body.style.overflowY = "auto";

    const animatedSectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll(".animated-section").forEach((section) => {
      animatedSectionObserver.observe(section);
    });

    const speedEls = Array.from(document.querySelectorAll(".parallax"));
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    function onScroll() {
      if (reduce) return;
      const y = window.pageYOffset;
      speedEls.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || 0);
        const rect = el.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 1.2 &&
          rect.bottom > -window.innerHeight * 0.2
        ) {
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        }
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const interactiveTexts = document.querySelectorAll(".interactive-text");
    const parallaxMouseEls = document.querySelectorAll(".mouse-parallax");

    const onMouseMove = (e) => {
      if (reduce) return;
      const { clientX, clientY } = e;
      interactiveTexts.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        el.style.setProperty("--mouse-x", `${mouseX}px`);
        el.style.setProperty("--mouse-y", `${mouseY}px`);
      });
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      parallaxMouseEls.forEach((el) => {
        const speed = parseFloat(el.dataset.speedMouse || 0);
        const transX = -x * speed * 50;
        const transY = -y * speed * 50;
        el.style.transform = `translate3d(${transX}px, ${transY}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    const cursor = document.querySelector(".cursor");
    let rafCur;
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      cursor
    ) {
      let cx = 0,
        cy = 0,
        tx = 0,
        ty = 0;
      function curTick() {
        tx += (cx - tx) * 0.2;
        ty += (cy - ty) * 0.2;
        cursor.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
        rafCur = requestAnimationFrame(curTick);
      }
      window.addEventListener("mousemove", (e) => {
        cx = e.clientX;
        cy = e.clientY;
      });
      document.addEventListener("mouseover", (e) => {
        if (e.target.closest("a,.cta,button")) cursor.classList.add("-link");
        else cursor.classList.remove("-link");
      });
      curTick();
    }

    let lastY = window.scrollY;
    function headerScroll() {
      const y = window.scrollY;
      const header = headerRef.current;
      if (header) {
        header.style.transform =
          y > lastY && y > 120 ? "translateY(-100%)" : "translateY(0)";
      }
      lastY = y;
    }
    window.addEventListener("scroll", headerScroll, { passive: true });

    const sectionIds = [
      "#inicio",
      "#metodologia",
      "#evidencia",
      "#el-arquitecto",
    ];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    const links = Array.from(document.querySelectorAll("nav a"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = "#" + e.target.id;
            links.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === id)
            );
            dots.forEach((d) =>
              d.classList.toggle("active", d.dataset.for === id)
            );
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", headerScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafCur) cancelAnimationFrame(rafCur);
    };
  }, [isLoading, language]);

  // --- COMPONENTS ---
  const BotonPremiumLegado = React.forwardRef(
    ({ children, onClick, fwdRef }) => (
      <button ref={fwdRef} onClick={onClick} className="cta">
        {children}
      </button>
    )
  );
  BotonPremiumLegado.displayName = "BotonPremiumLegado";

  const BotonLegado = ({ href, children }) => (
    <a href={href} className="cta cta-legado">
      {children}
    </a>
  );

  const LinkedInIcon = () => (
    <a
      href="https://www.linkedin.com/in/elvis-pozo"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="LinkedIn Profile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="none"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="currentColor"
          strokeWidth="0.5"
        />
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
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2>{t.popup_title}</h2>
          <p className="muted">{t.popup_subtitle}</p>
          <form
            action="https://formspree.io/f/your_form_id" // Placeholder
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="email">{t.form_email_label}</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t.form_email_placeholder}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.form_subject_label}</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder={t.form_subject_placeholder}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.form_message_label}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.form_message_placeholder}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="cta">
              {t.form_cta}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const LanguagePopup = ({ isVisible, onClose, onSelect, language }) => {
    if (!isVisible) return null;
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div
          className="popup-content lang-popup"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Cerrar selector de idioma"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2 className="lang-popup-title">{t.lang_popup_title}</h2>
          <div className="lang-options">
            <button
              className={language === "en" ? "selected-lang" : ""}
              onClick={() => onSelect("en")}
            >
              English
            </button>
            <button
              className={language === "es" ? "selected-lang" : ""}
              onClick={() => onSelect("es")}
            >
              Español
            </button>
            <button
              className={language === "pt" ? "selected-lang" : ""}
              onClick={() => onSelect("pt")}
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

        :root{ --carbon:#0F0F0F; --carbon-900:#0B0B0B; --offwhite:#F4F1EC; --muted:#B4B0A8; --bronze:#8C6A4A; --bronze-700:#6E5A3A; --bronze-300:#B88C65; --accent:#0E3E46; --accent-300:#2E6A73; --maxw:1400px; --elev:0 10px 30px rgba(30,25,20,.12); --bezier:cubic-bezier(.25,.1,.25,1);} 
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
        .site-header {position: fixed; top:0; left:0; right:0; background: rgba(15,15,15,0.72); backdrop-filter: blur(8px); z-index: 9999; border-bottom: 1px solid rgba(255,255,255,.06); transform: translateY(0);} .nav-wrap {max-width: var(--maxw); margin: 0 auto; padding: .8rem clamp(2rem, 5vw, 4rem); display: flex; justify-content: space-between; align-items: center;} .logo a {font-family: Lora, Georgia, serif; font-size: 1.25rem; font-weight: 300; color: #f4f1ec; letter-spacing:.01em; text-decoration: none; transition: color .25s var(--bezier);} .logo a:hover { color: var(--bronze-300); } 
        nav { display: flex; align-items: center; font-family: Inter, system-ui, sans-serif; }
        nav a, .nav-button { all: unset; box-sizing: border-box; cursor: pointer; position:relative; margin-left: 1.2rem; color: #f4f1ec; text-decoration: none; font-weight: 500; font-size: .96rem; transition: color .25s var(--bezier); } nav a:after, .nav-button:after {content:""; position:absolute; left:0; right:0; bottom:-6px; height:1px; background: linear-gradient(90deg,transparent, var(--bronze-300), transparent); transform:scaleX(0); transform-origin:center; transition:transform .35s var(--bezier)} nav a:hover, .nav-button:hover { color: var(--bronze-300); } nav a:hover:after, .nav-button:hover:after{ transform:scaleX(1) } nav a.active, .nav-button.active{ color: var(--bronze-300) }
        
        .hero{min-height:92vh;background: radial-gradient(120% 90% at 70% 40%, #171717 0%, #0f0f0f 60%, #0a0a0a 100%); color:#f6f5f3; overflow:hidden; padding-top:82px; border-bottom:1px solid rgba(255,255,255,.06); display: flex; align-items: center; justify-content: center;} 
        .hero .wrap{display:grid;grid-template-columns:1fr;text-align:center;gap:clamp(0.6rem, 1.5vw, 1.8rem);align-items:center;} 
        .hero .copy { max-width: 1200px; margin: 0 auto; }
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
          height: 1.2em;
          overflow: hidden;
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

        .hero-title-wrapper { overflow: hidden; }

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

        .protocol-grid{display:grid;grid-template-columns:0.5fr 1fr;gap:clamp(1rem,2.2vw,2rem); align-items: stretch;}
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
        .card-wrapper { position: relative; border-radius: 1.25rem; padding: 2px; background: transparent; height: 100%; box-shadow: none; transition: transform .35s var(--bezier), box-shadow .35s var(--bezier), background .35s var(--bezier); }
        .card-wrapper:hover { background: linear-gradient(160deg, var(--bronze-300), var(--bronze-700)); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(30,25,20,.18); }
        .card-inner { background-color: white; height: 100%; border-radius: calc(1.25rem - 2px); padding: 6rem 1.5rem; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .card-inner > h3 { color: var(--bronze-700); }
        .card-dot { position: absolute; bottom: 1.5rem; right: 1.5rem; width: 24px; height: 24px; background-color: var(--carbon); border-radius: 50%; }
        .case-card-inner { background-color: white; height: 100%; border-radius: calc(1.25rem - 2px); padding: 2rem 3rem; display: flex; flex-direction: column; justify-content: center; }
        .case-icon { flex-shrink: 0; margin-bottom: 1rem; height: 64px; width: 64px; } .case-icon img { height: 100%; width: 100%; object-fit: contain; }
        .card-conexa { grid-column: 2 / 4; grid-row: 1 / 2; } .card-conexa .case-card-inner { background-color: var(--evidence-card-conexa-bg); } .card-conexa h3, .card-conexa p { color: var(--evidence-text-light) !important; }
        .card-ceic { grid-column: 3 / 4; grid-row: 2 / 4; } .card-ceic .case-card-inner { background-color: var(--evidence-card-ceic-bg); } .card-ceic h3 { color: var(--evidence-text-dark); } .card-ceic p { color: var(--evidence-text-dark) !important; } .card-ceic .case-content { text-align: left; }
        .card-cardiozono { grid-column: 1 / 3; grid-row: 3 / 4; text-align: right; } .card-cardiozono .case-card-inner { background-color: var(--evidence-card-cardiozono-bg); } .card-cardiozono .case-icon { margin-left: auto; }
        .book-image-box { background: var(--carbon-900); padding: 4rem 1rem; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3rem; }
        .book-cover { position: relative; text-align: center; width: 100%; max-width: 280px; aspect-ratio: 2 / 3; margin: 0 auto; border-radius: 8px; overflow: hidden; background-color: #000; }
        .book-cover img { mix-blend-mode: normal; opacity: 1; object-fit: contain; display: block; }
        .book-title { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 85%; color: transparent; font-size: clamp(0.8rem, 3vw, 1.4rem); background: linear-gradient(170deg, #D4AF8B, var(--bronze-700)); -webkit-background-clip: text; background-clip: text; text-shadow: 0px 2px 2px rgba(0,0,0,0.5), 0px -1px 1px rgba(255,255,255,0.1); padding: 0.5rem 1rem; margin: 0; display: flex; flex-direction: column; align-items: center; line-height: 1.2; }
        .footer-wrap { display:flex; justify-content:space-between; align-items:center; gap:1rem; padding-top: 0; padding-bottom: 0; }
        .social-icon { color: var(--muted); transition: color .35s var(--bezier), transform .35s var(--bezier); display: inline-block; } .social-icon:hover { color: var(--bronze-300); transform: translateY(-2px); }
        .footer-wrap p a { color: var(--muted); text-decoration: underline; transition: color .25s var(--bezier); } .footer-wrap p a:hover { color: var(--bronze-300); text-decoration: none; }
        .popup-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 15, 15, 0.72); backdrop-filter: blur(8px); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; animation: fadeIn 0.3s forwards; }
        .popup-content { background: #1a1a1a; padding: 3.5rem; border-radius: 22px; border: 1px solid rgba(255,255,255,0.1); width: 90%; max-width: 500px; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.4); transform: scale(0.95); animation: scaleIn 0.3s forwards; }
        .lang-popup-title { font-size: 28px; }
        .popup-content h2 { color: var(--offwhite); } .popup-content p { color: var(--muted); }
        .close-button { position: absolute; top: 0.8rem; right: 1rem; background: none; border: none; padding: 0.5rem; color: var(--muted); cursor: pointer; transition: color 0.25s; } .close-button:hover { color: var(--offwhite); } .close-button svg { width: 24px; height: 24px; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; } .contact-form .form-group { display: flex; flex-direction: column; }
        .contact-form label { font-size: 0.8rem; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; }
        .contact-form input, .contact-form textarea { background-color: var(--offwhite); border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; padding: 0.8rem 1rem; color: var(--carbon); font-family: inherit; font-size: 1rem; transition: border-color 0.25s, box-shadow 0.25s; box-shadow: inset 0 2px 6px rgba(0,0,0,0.3); }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: #9ca3af; } .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--bronze-300); box-shadow: 0 0 0 3px rgba(184, 140, 101, 0.2), inset 0 2px 6px rgba(0,0,0,0.3); }
        .contact-form textarea { resize: vertical; min-height: 100px; }
        .lang-popup { width: auto; max-width: 300px; }
        .lang-options { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .lang-options button { all: unset; cursor: pointer; color: var(--offwhite); font-size: 1.2rem; text-align: center; padding: 0.75rem; border-radius: 8px; transition: background-color 0.25s, color 0.25s; } .lang-options button:hover { background-color: var(--bronze-700); color: var(--offwhite); }
        .lang-options > .selected-lang  { background-color: var(--bronze); color: var(--offwhite); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes scaleIn { from { transform: scale(0.95); } to { transform: scale(1); } }
        @media (max-width: 980px){ 
          .hero .wrap{grid-template-columns:1fr} 
          .protocol-grid,.arch-grid,.evidence-grid{grid-template-columns:1fr} 
          .phase-cards{grid-template-columns:1fr} nav a {margin-left:.75rem;font-size:.88rem;} 
          .rail{display:none} 
          .evidence-cards { margin-top: 2rem; } 
          .hero-headline { flex-direction: column; gap: 1.5rem; }
          .headline-left { align-items: center; text-align: center; }
          .v-separator { width: 100px; height: 1px; min-height: 0; align-self: center; }
          .hero-headline > div, .hero-headline > .headline-right-wrapper, .hero-headline > .headline-right-wrapper > .hero-title-wrapper > span { max-width: 100%; text-align: center; }
          .headline-left .hero-title-wrapper span { text-align: center; }
          .evidence-thirds-grid { grid-template-columns: 1fr; grid-template-rows: auto; min-height: auto; }
          .evidence-text-block, .evidence-separator, .card-wrapper { grid-column: auto; grid-row: auto; text-align: left !important; }
          .case-card-inner { padding: 2rem !important; flex-direction: column !important; align-items: flex-start !important; }
          .case-icon { margin: 0 0 1rem 0 !important; }
          .nav-link { display: none; }
          /* On small screens allow the fixed lines to wrap if necessary */
          .hero-line { white-space: normal; }
        }
        @media (prefers-reduced-motion: reduce){ .image-box{transition:none} .cursor{display:none} }
      `}</style>

      {isLoading && (
        <Preloader ref={{ preloaderRef, circleRef, nameRef, nameMaskRef }} />
      )}

      <div
        ref={contentRef}
        className="app-root"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <header
          ref={headerRef}
          className="site-header"
          aria-label="Main Navigation"
        >
          <div className="nav-wrap">
            <div className="logo">
              <a href="#el-arquitecto">Elvis Pozo</a>
            </div>
            <nav>
              <a className="nav-link" href="#inicio">{t.nav_inicio}</a>
              <a className="nav-link" href="#metodologia">{t.nav_metodologia}</a>
              <a className="nav-link" href="#evidencia">{t.nav_evidencia}</a>
              <a className="nav-link" href="#el-arquitecto">{t.nav_arquitecto}</a>
              <button
                onClick={() => setIsPopupVisible(true)}
                className="nav-button"
              >
                {t.nav_contacto}
              </button>
              <button
                onClick={() => setIsLangPopupVisible(true)}
                className="nav-button"
                aria-label="Seleccionar idioma"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </nav>
          </div>
        </header>

        <div className="rail" aria-hidden="true">
          <div className="dot" data-for="#inicio"></div>
          <div className="dot" data-for="#metodologia"></div>
          <div className="dot" data-for="#evidencia"></div>
          <div className="dot" data-for="#el-arquitecto"></div>
        </div>

        <header className="hero section" id="inicio">
          <div className="wrap">
            <div className="copy">
              <div className="mouse-parallax" data-speed-mouse="0.03">
                <h1>
                  <div className="hero-headline">
                    <div className="headline-left">
                      <div ref={kickerRef} className="kicker">
                        {t.hero_kicker}
                      </div>
                      <div ref={title1Ref} className="hero-title-wrapper">
                        {Array.isArray(t.hero_title1_lines) ? (
                          t.hero_title1_lines.map((line, i) => (
                            <span
                              key={i}
                              className="hero-line interactive-text"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))
                        ) : (
                          <span className="hero-line interactive-text">
                            {t.hero_title1_lines}
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      ref={vSeparatorRef}
                      className="v-separator"
                      aria-hidden="true"
                    ></div>
                    <div className="headline-right-wrapper">
                      <div ref={title2Ref} className="hero-title-wrapper">
                        {Array.isArray(t.hero_title2_lines) ? (
                          t.hero_title2_lines.map((line, i) => (
                            <span
                              key={i}
                              className="hero-line interactive-text"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))
                        ) : (
                          <span className="hero-line interactive-text">
                            {t.hero_title2_lines}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </h1>
                <p ref={leadRef} className="lead interactive-text">
                  {t.hero_subtitle}
                </p>
              </div>
              <div className="cta-wrapper">
                <BotonPremiumLegado
                  fwdRef={ctaRef}
                  onClick={() => setIsPopupVisible(true)}
                >
                  {t.hero_cta}
                </BotonPremiumLegado>
              </div>
            </div>
          </div>
        </header>

        <div className="light">
          <section
            className="section"
            id="metodologia"
            aria-labelledby="ttl-metodologia"
          >
            <div className="wrap protocol">
              <div className="protocol-grid animated-section">
                <div className="image-box book-image-box anim-item-3">
                  <div className="book-cover">
                    <img
                      src={imageUrls.portadaLibro}
                      alt={t.metodologia_book_title}
                    />
                    <div>
                      
                    </div>
                    <h3 className="book-title" dangerouslySetInnerHTML={{ __html: t.metodologia_book_title }}>
                      
                    </h3>
                  </div>
                  <BotonLegado href="#">{t.metodologia_cta}</BotonLegado>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="protocol-text-block">
                    <div className="mouse-parallax" data-speed-mouse="0.03">
                      <div className="anim-item-1">
                        <h2 id="ttl-metodologia" className="interactive-text">
                          {t.metodologia_title}
                        </h2>
                      </div>
                      <div className="anim-item-2">
                        <p className="muted interactive-text">
                          {t.metodologia_p}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="phase-cards">
                    <div className="card-wrapper anim-item-4">
                      <div className="card-inner">
                        <h3>{t.fase1_title}</h3>
                        <p className="muted">{t.fase1_p}</p>
                        <div className="card-dot"></div>
                      </div>
                    </div>
                    <div className="card-wrapper anim-item-5">
                      <div className="card-inner">
                        <h3>{t.fase2_title}</h3>
                        <p className="muted">{t.fase2_p}</p>
                        <div
                          className="card-dot"
                          style={{
                            backgroundColor: "var(--evidence-card-conexa-bg)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="card-wrapper anim-item-6">
                      <div className="card-inner">
                        <h3>{t.fase3_title}</h3>
                        <p className="muted">{t.fase3_p}</p>
                        <div
                          className="card-dot"
                          style={{
                            backgroundColor: "var(--evidence-card-ceic-bg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section"
            id="evidencia"
            aria-labelledby="ttl-evidencia"
          >
            <div className="wrap">
              <div className="evidence-thirds-grid animated-section">
                <div className="evidence-text-block">
                  <div className="mouse-parallax" data-speed-mouse="0.03">
                    <div className="anim-item-1">
                      <h2 id="ttl-evidencia" className="interactive-text">
                        {t.evidencia_title}
                      </h2>
                    </div>
                    <div className="anim-item-2">
                      <p className="muted interactive-text">{t.evidencia_p}</p>
                    </div>
                  </div>
                </div>

                <div className="card-wrapper card-conexa anim-item-4">
                  <div className="case-card-inner">
                    <div className="case-icon">
                      <img src={imageUrls.conexaLogo} alt="Logo de CONEXA" />
                    </div>
                    <div className="case-content">
                      <h3>{t.conexa_title}</h3>
                      <p className="muted">{t.conexa_p}</p>
                    </div>
                  </div>
                </div>

                <div className="evidence-separator anim-item-3"></div>

                <div className="card-wrapper card-ceic anim-item-5">
                  <div className="case-card-inner">
                    <div className="case-icon">
                      <img
                        src={imageUrls.ceicIcon}
                        alt="Ícono de Proyectos CEIC"
                      />
                    </div>
                    <div className="case-content">
                      <h3>{t.ceic_title}</h3>
                      <p className="muted">{t.ceic_p}</p>
                    </div>
                  </div>
                </div>

                <div className="card-wrapper card-cardiozono anim-item-6">
                  <div className="case-card-inner">
                    <div className="case-icon">
                      <img
                        src={imageUrls.cardiozonoLogo}
                        alt="Logo de Clínica Cardiozono"
                      />
                    </div>
                    <div className="case-content">
                      <h3>{t.cardiozono_title}</h3>
                      <p className="muted">{t.cardiozono_p}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          className="dark section"
          id="el-arquitecto"
          aria-labelledby="ttl-arquitecto"
        >
          <div className="wrap architect">
            <div className="arch-grid animated-section">
              <div className="image-box anim-item-2">
                <img
                  src={imageUrls.elvis}
                  alt="Retrato de Elvis Pozo, estratega y Arquitecto de Legado."
                />
              </div>
              <div className="copy">
                <div
                  className="mouse-parallax anim-item-1"
                  data-speed-mouse="0.03"
                >
                  <h2 id="ttl-arquitecto" className="interactive-text">
                    {t.arquitecto_title}
                  </h2>
                </div>
                <div
                  className="mouse-parallax anim-item-3"
                  data-speed-mouse="0.03"
                >
                  <p className="interactive-text">{t.arquitecto_p}</p>
                </div>
                <div style={{ marginTop: "3rem" }}>
                  <div
                    className="mouse-parallax anim-item-4"
                    data-speed-mouse="0.03"
                  >
                    <h2
                      className="interactive-text"
                      style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)" }}
                    >
                      {t.arquitecto_subtitle}
                    </h2>
                  </div>
                  <div
                    className="mouse-parallax anim-item-5"
                    data-speed-mouse="0.03"
                  >
                    <p className="interactive-text">{t.arquitecto_subtext}</p>
                  </div>
                  <div className="anim-item-6">
                    <BotonPremiumLegado onClick={() => setIsPopupVisible(true)}>
                      {t.arquitecto_cta}
                    </BotonPremiumLegado>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          className="light section"
          aria-label="Footer"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="wrap footer-wrap">
            <p className="muted" style={{ margin: 0 }}>
              {t.footer_copyright_part1}
              <a
                href="https://www.eurekagc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer_copyright_part2}
              </a>
            </p>
            <LinkedInIcon />
            <a
              href="#inicio"
              className="muted"
              style={{ textDecoration: "none" }}
            >
              {t.footer_backtotop}
            </a>
          </div>
        </footer>

        <ContactPopup
          isVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
        />
        <LanguagePopup
          isVisible={isLangPopupVisible}
          onClose={() => setIsLangPopupVisible(false)}
          onSelect={(lang) => {
            setLanguage(lang);
            setIsLangPopupVisible(false);
          }}
          language={language}
        />

        <div className="cursor" aria-hidden="true"></div>
      </div>
    </>
  );
}
