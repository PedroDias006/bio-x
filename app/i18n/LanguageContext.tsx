"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "pt" | "en" | "es";

type Translation = {
  en: string;
  es: string;
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const STORAGE_KEY = "anthars-language";
const ORIGINAL_TEXT = new WeakMap<Text, string>();

const TRANSLATIONS: Record<string, Translation> = {
  "Agro Ant™": { en: "Agro Ant™", es: "Agro Ant™" },
  "Separ Ant™": { en: "Separ Ant™", es: "Separ Ant™" },
  "Compost Ant™": { en: "Compost Ant™", es: "Compost Ant™" },
  "Poultry Ant™": { en: "Poultry Ant™", es: "Poultry Ant™" },
  "Livestock Ant™": { en: "Livestock Ant™", es: "Livestock Ant™" },
  "Swine Ant™": { en: "Swine Ant™", es: "Swine Ant™" },
  Sobre: { en: "About", es: "Acerca" },
  Contato: { en: "Contact", es: "Contacto" },
  Especialista: { en: "Specialist", es: "Especialista" },
  "Falar com Especialista": { en: "Talk to a Specialist", es: "Hablar con un Especialista" },
  "Consultar Especialista": { en: "Consult a Specialist", es: "Consultar a un Especialista" },
  "Falar com Engenharia": { en: "Talk to Engineering", es: "Hablar con Ingeniería" },
  "Solicitar Especificação Técnica": { en: "Request Technical Specification", es: "Solicitar Especificación Técnica" },
  "Conheça a Anthars": { en: "Discover Anthars", es: "Conozca Anthars" },
  "Explorar detalhes": { en: "Explore details", es: "Explorar detalles" },
  "Explorar Linhas de Produção": { en: "Explore Production Lines", es: "Explorar Líneas de Producción" },
  "Agendar Reunião Técnica": { en: "Schedule a Technical Meeting", es: "Agendar Reunión Técnica" },

  "Inovações naturais para um futuro sustentável.": {
    en: "Natural innovations for a sustainable future.",
    es: "Innovaciones naturales para un futuro sostenible.",
  },
  "Tecnologia de base orgânica para agricultura, saneamento, compostagem e pecuária. Soluções inteligentes que melhoram o manejo, reduzem impactos e geram valor produtivo.": {
    en: "Organic-based technology for agriculture, sanitation, composting and livestock. Intelligent solutions that improve management, reduce impacts and generate productive value.",
    es: "Tecnología de base orgánica para agricultura, saneamiento, compostaje y ganadería. Soluciones inteligentes que mejoran el manejo, reducen impactos y generan valor productivo.",
  },
  "Áreas de Atuação": { en: "Business Areas", es: "Áreas de Actuación" },
  "Linhas Anthars.": { en: "Anthars Lines.", es: "Líneas Anthars." },
  "Soluções para cada desafio.": { en: "Solutions for every challenge.", es: "Soluciones para cada desafío." },
  "Seis frentes tecnológicas conectadas por uma mesma lógica: compostos orgânicos funcionais, aplicação prática e responsabilidade ambiental.": {
    en: "Six technological fronts connected by the same logic: functional organic compounds, practical application and environmental responsibility.",
    es: "Seis frentes tecnológicas conectadas por la misma lógica: compuestos orgánicos funcionales, aplicación práctica y responsabilidad ambiental.",
  },
  "Presença Nacional.": { en: "National Presence.", es: "Presencia Nacional." },
  "De ponta a ponta.": { en: "End to end.", es: "De punta a punta." },
  "Nossa tecnologia orgânica funcional atua com excelência nos principais polos agrícolas do Brasil. Interaja com o mapa para visualizar nossa área de cobertura.": {
    en: "Our functional organic technology performs with excellence in Brazil's main agricultural regions. Interact with the map to view our coverage area.",
    es: "Nuestra tecnología orgánica funcional actúa con excelencia en los principales polos agrícolas de Brasil. Interactúe con el mapa para ver nuestra área de cobertura.",
  },
  "Raio de Atuação": { en: "Coverage Radius", es: "Radio de Actuación" },
  "11 Estados Estratégicos.": { en: "11 Strategic States.", es: "11 Estados Estratégicos." },
  "Polo Agrícola": { en: "Agricultural Hub", es: "Polo Agrícola" },
  "As novidades.": { en: "Latest updates.", es: "Novedades." },
  "O que há de mais avançado no agro.": { en: "The most advanced in agribusiness.", es: "Lo más avanzado del agro." },
  "Transformando": { en: "Transforming", es: "Transformando" },
  "Ambientes": { en: "Environments", es: "Ambientes" },
  "Gerando Valor.": { en: "Generating Value.", es: "Generando Valor." },
  "Tecnologia Orgânica de Precisão": { en: "Precision Organic Technology", es: "Tecnología Orgánica de Precisión" },
  "Formulações à base de compostos orgânicos e extratos naturais para apoiar processos produtivos mais estáveis e eficientes.": {
    en: "Formulations based on organic compounds and natural extracts to support more stable and efficient productive processes.",
    es: "Formulaciones a base de compuestos orgánicos y extractos naturales para apoyar procesos productivos más estables y eficientes.",
  },
  "Engenharia Agronômica Dedicada": { en: "Dedicated Agronomic Engineering", es: "Ingeniería Agronómica Dedicada" },
  "Suporte técnico para orientar aplicações em lavouras, granjas, operações ambientais, compostagem e pecuária.": {
    en: "Technical support to guide applications in crops, farms, environmental operations, composting and livestock.",
    es: "Soporte técnico para orientar aplicaciones en cultivos, granjas, operaciones ambientales, compostaje y ganadería.",
  },
  "Soluções Ambientais de Amplo Espectro": { en: "Broad-Spectrum Environmental Solutions", es: "Soluciones Ambientales de Amplio Espectro" },
  "Tecnologias desenhadas para reduzir odores, estabilizar matéria orgânica, otimizar recursos e elevar a sustentabilidade operacional.": {
    en: "Technologies designed to reduce odors, stabilize organic matter, optimize resources and raise operational sustainability.",
    es: "Tecnologías diseñadas para reducir olores, estabilizar materia orgánica, optimizar recursos y elevar la sostenibilidad operacional.",
  },
  "Fale com um especialista Anthars e encontre a linha ideal para sua operação.": {
    en: "Talk to an Anthars specialist and find the ideal line for your operation.",
    es: "Hable con un especialista Anthars y encuentre la línea ideal para su operación.",
  },
  "Soluções inteligentes para uma agricultura produtiva e sustentável.": {
    en: "Intelligent solutions for productive and sustainable agriculture.",
    es: "Soluciones inteligentes para una agricultura productiva y sostenible.",
  },
  "Tecnologia que transforma matéria orgânica em recursos de alto valor.": {
    en: "Technology that transforms organic matter into high-value resources.",
    es: "Tecnología que transforma materia orgánica en recursos de alto valor.",
  },
  "Manejo ambiental avançado para operações industriais.": {
    en: "Advanced environmental management for industrial operations.",
    es: "Manejo ambiental avanzado para operaciones industriales.",
  },
  "Redução de odores, estabilização orgânica e eficiência operacional.": {
    en: "Odor reduction, organic stabilization and operational efficiency.",
    es: "Reducción de olores, estabilización orgánica y eficiencia operacional.",
  },
  "Performance ambiental para a pecuária moderna.": {
    en: "Environmental performance for modern livestock.",
    es: "Performance ambiental para la ganadería moderna.",
  },
  "A plataforma que une Swine Ant, Poultry Ant e Livestock Ant em uma só inteligência.": {
    en: "The platform that connects Swine Ant, Poultry Ant and Livestock Ant in one intelligence.",
    es: "La plataforma que une Swine Ant, Poultry Ant y Livestock Ant en una sola inteligencia.",
  },
  "Manejo do solo, culturas e recursos para uma agricultura mais produtiva.": {
    en: "Soil, crop and resource management for more productive agriculture.",
    es: "Manejo de suelo, cultivos y recursos para una agricultura más productiva.",
  },
  "Manejo ambiental para efluentes, odores, resíduos e operações sustentáveis.": {
    en: "Environmental management for effluents, odors, residues and sustainable operations.",
    es: "Manejo ambiental para efluentes, olores, residuos y operaciones sostenibles.",
  },
  "Transformação orgânica inteligente para compostos mais estáveis e valorizados.": {
    en: "Intelligent organic transformation for more stable and valuable compounds.",
    es: "Transformación orgánica inteligente para compuestos más estables y valorizados.",
  },
  "Plataforma de performance e ambiência para Swine Ant, Poultry Ant e Livestock Ant.": {
    en: "Performance and environment platform for Swine Ant, Poultry Ant and Livestock Ant.",
    es: "Plataforma de performance y ambiente para Swine Ant, Poultry Ant y Livestock Ant.",
  },

  "Saúde e Equilíbrio do Solo": { en: "Soil Health and Balance", es: "Salud y Equilibrio del Suelo" },
  "Auxilia no condicionamento do solo e no manejo sustentável da matéria orgânica.": {
    en: "Supports soil conditioning and sustainable organic matter management.",
    es: "Apoya el acondicionamiento del suelo y el manejo sostenible de la materia orgánica.",
  },
  "Mais Eficiência no Manejo": { en: "Greater Management Efficiency", es: "Más Eficiencia en el Manejo" },
  "Contribui para melhores condições de manejo e maior eficiência operacional.": {
    en: "Contributes to better management conditions and greater operational efficiency.",
    es: "Contribuye a mejores condiciones de manejo y mayor eficiencia operacional.",
  },
  "Nutrientes Disponíveis": { en: "Available Nutrients", es: "Nutrientes Disponibles" },
  "Favorece o aproveitamento dos nutrientes presentes no solo e na matéria orgânica.": {
    en: "Supports the use of nutrients present in soil and organic matter.",
    es: "Favorece el aprovechamiento de los nutrientes presentes en el suelo y la materia orgánica.",
  },
  "Produtividade Sustentável": { en: "Sustainable Productivity", es: "Productividad Sostenible" },
  "Apoia o desenvolvimento das plantas e o potencial produtivo das culturas.": {
    en: "Supports plant development and the productive potential of crops.",
    es: "Apoya el desarrollo de las plantas y el potencial productivo de los cultivos.",
  },
  "Sustentabilidade em Ação": { en: "Sustainability in Action", es: "Sostenibilidad en Acción" },
  "Solução alinhada às boas práticas agrícolas e à produção responsável.": {
    en: "A solution aligned with good agricultural practices and responsible production.",
    es: "Solución alineada con buenas prácticas agrícolas y producción responsable.",
  },
  "Manejo do Solo": { en: "Soil Management", es: "Manejo del Suelo" },
  "Auxilia no condicionamento do solo e no manejo da matéria orgânica.": {
    en: "Supports soil conditioning and organic matter management.",
    es: "Apoya el acondicionamiento del suelo y el manejo de la materia orgánica.",
  },
  "Desenvolvimento das Culturas": { en: "Crop Development", es: "Desarrollo de los Cultivos" },
  "Contribui para melhores condições para o desenvolvimento das plantas.": {
    en: "Contributes to better conditions for plant development.",
    es: "Contribuye a mejores condiciones para el desarrollo de las plantas.",
  },
  "Eficiência no Uso de Recursos": { en: "Resource Use Efficiency", es: "Eficiencia en el Uso de Recursos" },
  "Favorece o melhor aproveitamento dos nutrientes presentes no solo.": {
    en: "Supports better use of the nutrients present in the soil.",
    es: "Favorece un mejor aprovechamiento de los nutrientes presentes en el suelo.",
  },
  "Produtividade e Qualidade": { en: "Productivity and Quality", es: "Productividad y Calidad" },
  "Apoia o potencial produtivo e a qualidade das culturas.": {
    en: "Supports crop productive potential and quality.",
    es: "Apoya el potencial productivo y la calidad de los cultivos.",
  },
  "Práticas Sustentáveis": { en: "Sustainable Practices", es: "Prácticas Sostenibles" },
  "Solução alinhada às boas práticas e à produção responsável.": {
    en: "A solution aligned with good practices and responsible production.",
    es: "Solución alineada con buenas prácticas y producción responsable.",
  },
  "Equilíbrio Ambiental": { en: "Environmental Balance", es: "Equilibrio Ambiental" },
  "Contribui para a sustentabilidade e o equilíbrio do sistema produtivo.": {
    en: "Contributes to sustainability and balance in the productive system.",
    es: "Contribuye a la sostenibilidad y al equilibrio del sistema productivo.",
  },
  "Compostos Orgânicos Funcionais": { en: "Functional Organic Compounds", es: "Compuestos Orgánicos Funcionales" },
  "Formulação à base de compostos orgânicos e extratos vegetais.": {
    en: "Formulation based on organic compounds and botanical extracts.",
    es: "Formulación a base de compuestos orgánicos y extractos vegetales.",
  },
  "Tecnologia de Alta Performance": { en: "High-Performance Technology", es: "Tecnología de Alto Desempeño" },
  "Processos modernos que garantem qualidade e eficiência.": {
    en: "Modern processes that ensure quality and efficiency.",
    es: "Procesos modernos que garantizan calidad y eficiencia.",
  },
  "Resultados Consistentes": { en: "Consistent Results", es: "Resultados Consistentes" },
  "Solução desenvolvida para entregar resultados reais no campo.": {
    en: "A solution developed to deliver real results in the field.",
    es: "Solución desarrollada para entregar resultados reales en campo.",
  },
  "Segurança e Confiança": { en: "Safety and Trust", es: "Seguridad y Confianza" },
  "Produto seguro para aplicação e alinhado às exigências do agronegócio.": {
    en: "Safe product for application and aligned with agribusiness requirements.",
    es: "Producto seguro para aplicación y alineado con las exigencias del agronegocio.",
  },
  "Sustentabilidade e Responsabilidade": { en: "Sustainability and Responsibility", es: "Sostenibilidad y Responsabilidad" },
  "Compromisso com o meio ambiente e com as futuras gerações.": {
    en: "Commitment to the environment and future generations.",
    es: "Compromiso con el medio ambiente y las futuras generaciones.",
  },
  "Desenvolvimento Radicular": { en: "Root Development", es: "Desarrollo Radicular" },
  "Vigor Vegetativo": { en: "Vegetative Vigor", es: "Vigor Vegetativo" },
  "Resultado na Colheita": { en: "Harvest Result", es: "Resultado en la Cosecha" },
  "Tecnologia que potencializa sua produção de forma sustentável.": {
    en: "Technology that boosts your production sustainably.",
    es: "Tecnología que potencia su producción de forma sostenible.",
  },
  "Eficiência no Presente. Sustentabilidade no Futuro.": {
    en: "Efficiency Today. Sustainability Tomorrow.",
    es: "Eficiencia en el Presente. Sostenibilidad en el Futuro.",
  },
  "Soluções Inteligentes": { en: "Intelligent Solutions", es: "Soluciones Inteligentes" },
  "para uma agricultura": { en: "for agriculture", es: "para una agricultura" },
  "mais produtiva e sustentável.": { en: "more productive and sustainable.", es: "más productiva y sostenible." },
  "A Agro Ant é uma solução tecnológica desenvolvida para auxiliar no manejo sustentável do solo e das culturas, promovendo melhores condições para o desenvolvimento das plantas e maior eficiência no uso dos recursos.": {
    en: "Agro Ant is a technological solution developed to support sustainable soil and crop management, promoting better conditions for plant development and greater efficiency in resource use.",
    es: "Agro Ant es una solución tecnológica desarrollada para apoyar el manejo sostenible del suelo y los cultivos, promoviendo mejores condiciones para el desarrollo de las plantas y mayor eficiencia en el uso de recursos.",
  },
  Aplicações: { en: "Applications", es: "Aplicaciones" },
  "Diferenciais Anthars": { en: "Anthars Differentials", es: "Diferenciales Anthars" },
  "A força da raiz ao": { en: "Strength from root to", es: "La fuerza de la raíz al" },
  "fruto.": { en: "fruit.", es: "fruto." },
  "Registros visuais do desenvolvimento vegetal, confirmando a eficiência estrutural entregue pelas soluções Anthars no campo.": {
    en: "Visual records of plant development, confirming the structural efficiency delivered by Anthars solutions in the field.",
    es: "Registros visuales del desarrollo vegetal, confirmando la eficiencia estructural entregada por las soluciones Anthars en campo.",
  },
  "Resultado em Vídeo": { en: "Video Result", es: "Resultado en Video" },
  "Quem aplica no campo.": { en: "Who applies it in the field.", es: "Quien lo aplica en campo." },
  "Acompanhe a experiência real com a tecnologia Anthars Biotechnologies na prática.": {
    en: "Follow the real experience with Anthars Biotechnologies technology in practice.",
    es: "Acompañe la experiencia real con la tecnología Anthars Biotechnologies en la práctica.",
  },

  "Redução de Odores": { en: "Odor Reduction", es: "Reducción de Olores" },
  "Auxilia na redução de odores, promovendo melhor conforto ambiental.": {
    en: "Supports odor reduction, promoting better environmental comfort.",
    es: "Apoya la reducción de olores, promoviendo mayor confort ambiental.",
  },
  "Contribui para o equilíbrio das condições ambientais e operacionais.": {
    en: "Contributes to balanced environmental and operational conditions.",
    es: "Contribuye al equilibrio de las condiciones ambientales y operacionales.",
  },
  "Estabilização Orgânica": { en: "Organic Stabilization", es: "Estabilización Orgánica" },
  "Favorece a estabilização da matéria orgânica sustentável.": {
    en: "Supports sustainable organic matter stabilization.",
    es: "Favorece la estabilización sostenible de la materia orgánica.",
  },
  "Eficiência Operacional": { en: "Operational Efficiency", es: "Eficiencia Operacional" },
  "Melhora a eficiência dos processos e qualidade das operações.": {
    en: "Improves process efficiency and operation quality.",
    es: "Mejora la eficiencia de los procesos y la calidad de las operaciones.",
  },
  "Estações de Tratamento": { en: "Treatment Stations", es: "Estaciones de Tratamiento" },
  "Apoia o manejo de lodo e efluentes em ETEs industriais e urbanas.": {
    en: "Supports sludge and effluent management in industrial and urban treatment stations.",
    es: "Apoya el manejo de lodos y efluentes en ETEs industriales y urbanas.",
  },
  "Efluentes Industriais": { en: "Industrial Effluents", es: "Efluentes Industriales" },
  "Contribui para o equilíbrio de sistemas com alta matéria orgânica.": {
    en: "Contributes to the balance of systems with high organic matter.",
    es: "Contribuye al equilibrio de sistemas con alta materia orgánica.",
  },
  "Redução de Carga": { en: "Load Reduction", es: "Reducción de Carga" },
  "Apoia a redução de carga orgânica e favorece a clarificação.": {
    en: "Supports organic load reduction and favors clarification.",
    es: "Apoya la reducción de carga orgánica y favorece la clarificación.",
  },
  "Controle de Odores": { en: "Odor Control", es: "Control de Olores" },
  "Atua ativamente na mitigação de odores ofensivos nos ambientes.": {
    en: "Actively supports the mitigation of offensive odors in environments.",
    es: "Actúa activamente en la mitigación de olores ofensivos en los ambientes.",
  },
  "Manejo de Resíduos": { en: "Residue Management", es: "Manejo de Residuos" },
  "Solução adequada para diversos tipos de resíduos e subprodutos.": {
    en: "A suitable solution for several types of residues and by-products.",
    es: "Solución adecuada para diversos tipos de residuos y subproductos.",
  },
  Sustentabilidade: { en: "Sustainability", es: "Sostenibilidad" },
  "Promove práticas sustentáveis e melhora o desempenho ambiental.": {
    en: "Promotes sustainable practices and improves environmental performance.",
    es: "Promueve prácticas sostenibles y mejora el desempeño ambiental.",
  },
  "Compostos Funcionais": { en: "Functional Compounds", es: "Compuestos Funcionales" },
  "Formulação à base de compostos orgânicos naturais e extratos vegetais.": {
    en: "Formulation based on natural organic compounds and botanical extracts.",
    es: "Formulación a base de compuestos orgánicos naturales y extractos vegetales.",
  },
  "Tecnologia de Desempenho": { en: "Performance Technology", es: "Tecnología de Desempeño" },
  "Desenvolvido para entregar performance consistente em diferentes condições operacionais.": {
    en: "Developed to deliver consistent performance under different operating conditions.",
    es: "Desarrollado para entregar desempeño consistente en diferentes condiciones operacionales.",
  },
  "Solução segura, de fácil aplicação e alinhada às melhores práticas de operações.": {
    en: "Safe, easy-to-apply solution aligned with best operational practices.",
    es: "Solución segura, de fácil aplicación y alineada con las mejores prácticas operacionales.",
  },
  "Eficiência e Economia": { en: "Efficiency and Economy", es: "Eficiencia y Economía" },
  "Melhora a eficiência operacional e contribui para a otimização de recursos.": {
    en: "Improves operational efficiency and contributes to resource optimization.",
    es: "Mejora la eficiencia operacional y contribuye a la optimización de recursos.",
  },
  "Controle de Carga Orgânica": { en: "Organic Load Control", es: "Control de Carga Orgánica" },
  "Clarificação Operacional": { en: "Operational Clarification", es: "Clarificación Operacional" },
  "Estabilidade de Sistema": { en: "System Stability", es: "Estabilidad del Sistema" },
  "Tecnologia Ambiental": { en: "Environmental Technology", es: "Tecnología Ambiental" },
  "Manejo Ambiental": { en: "Environmental Management", es: "Manejo Ambiental" },
  "Sustentável.": { en: "Sustainable.", es: "Sostenible." },
  "A Separ Ant auxilia no controle de carga orgânica, clarificação e mitigação de odores para operações que exigem estabilidade contínua.": {
    en: "Separ Ant supports organic load control, clarification and odor mitigation for operations that require continuous stability.",
    es: "Separ Ant apoya el control de carga orgánica, la clarificación y la mitigación de olores para operaciones que exigen estabilidad continua.",
  },
  "Integração Operacional": { en: "Operational Integration", es: "Integración Operacional" },
  "Sem Burocracia.": { en: "Without Bureaucracy.", es: "Sin Burocracia." },
  "Compatibilidade Industrial": { en: "Industrial Compatibility", es: "Compatibilidad Industrial" },
  "Matéria": { en: "Raw", es: "Materia" },
  Prima: { en: "Material", es: "Prima" },
  "Impacto": { en: "Impact", es: "Impacto" },
  "Visível.": { en: "Visible.", es: "Visible." },
  "Estudo de Caso": { en: "Case Study", es: "Estudio de Caso" },
  "A Solução em": { en: "The Solution in", es: "La Solución en" },
  "Operação.": { en: "Operation.", es: "Operación." },
  "Acompanhe a aplicação e o desempenho real da tecnologia Separ Ant no suporte à infraestrutura de estações e controle de efluentes.": {
    en: "Follow the real application and performance of Separ Ant technology supporting station infrastructure and effluent control.",
    es: "Acompañe la aplicación y el desempeño real de la tecnología Separ Ant en apoyo a la infraestructura de estaciones y control de efluentes.",
  },

  "Transforma Resíduos": { en: "Transforms Residues", es: "Transforma Residuos" },
  "Favorece a transformação e estabilização da matéria orgânica.": {
    en: "Supports transformation and stabilization of organic matter.",
    es: "Favorece la transformación y estabilización de la materia orgánica.",
  },
  "Reduz Odores": { en: "Reduces Odors", es: "Reduce Olores" },
  "Auxilia na redução de odores ofensivos gerados no processo.": {
    en: "Supports the reduction of offensive odors generated in the process.",
    es: "Ayuda a reducir olores ofensivos generados en el proceso.",
  },
  "Qualidade do Composto": { en: "Compost Quality", es: "Calidad del Compuesto" },
  "Contribui para um composto mais estável, homogêneo e rico.": {
    en: "Contributes to a more stable, homogeneous and rich compost.",
    es: "Contribuye a un compuesto más estable, homogéneo y rico.",
  },
  "Processo Eficiente": { en: "Efficient Process", es: "Proceso Eficiente" },
  "Acelera a maturação e padroniza o resultado final.": {
    en: "Accelerates maturation and standardizes the final result.",
    es: "Acelera la maduración y estandariza el resultado final.",
  },
  "Manejo Sustentável": { en: "Sustainable Management", es: "Manejo Sostenible" },
  "Solução segura, natural e alinhada às práticas ESG.": {
    en: "Safe, natural solution aligned with ESG practices.",
    es: "Solución segura, natural y alineada con prácticas ESG.",
  },
  "Pilhas de Compostagem": { en: "Composting Piles", es: "Pilas de Compostaje" },
  "Ideal para pilhas de diferentes materiais orgânicos.": {
    en: "Ideal for piles with different organic materials.",
    es: "Ideal para pilas de diferentes materiales orgánicos.",
  },
  "Resíduos Agroindustriais": { en: "Agroindustrial Residues", es: "Residuos Agroindustriales" },
  "Auxilia no manejo de resíduos de origem vegetal e animal.": {
    en: "Supports management of plant and animal-origin residues.",
    es: "Apoya el manejo de residuos de origen vegetal y animal.",
  },
  "Compostagem de Esterco": { en: "Manure Composting", es: "Compostaje de Estiércol" },
  "Contribui para a estabilização e qualidade do composto final.": {
    en: "Contributes to stabilization and quality of the final compost.",
    es: "Contribuye a la estabilización y calidad del compuesto final.",
  },
  "Resíduos Urbanos Verdes": { en: "Green Urban Residues", es: "Residuos Urbanos Verdes" },
  "Suporte ao processo de transformação de podas e orgânicos.": {
    en: "Supports the transformation process of pruning and organic residues.",
    es: "Soporte al proceso de transformación de podas y orgánicos.",
  },
  "Economia Circular": { en: "Circular Economy", es: "Economía Circular" },
  "Transforma resíduos em recursos, gerando sustentabilidade.": {
    en: "Transforms residues into resources, generating sustainability.",
    es: "Transforma residuos en recursos, generando sostenibilidad.",
  },
  "Redução de Impactos": { en: "Impact Reduction", es: "Reducción de Impactos" },
  "Auxilia na redução de odores e no melhor equilíbrio do processo ambiental.": {
    en: "Supports odor reduction and better balance in the environmental process.",
    es: "Apoya la reducción de olores y un mejor equilibrio del proceso ambiental.",
  },
  "Eficiência no Processo": { en: "Process Efficiency", es: "Eficiencia en el Proceso" },
  "Favorece a decomposição e acelera a maturação da matéria orgânica.": {
    en: "Supports decomposition and accelerates organic matter maturation.",
    es: "Favorece la descomposición y acelera la maduración de la materia orgánica.",
  },
  "Solução natural, segura e de fácil aplicação nas pilhas e leiras.": {
    en: "Natural, safe and easy-to-apply solution for piles and windrows.",
    es: "Solución natural, segura y de fácil aplicación en pilas y leiras.",
  },
  Receber: { en: "Receive", es: "Recibir" },
  Estabilizar: { en: "Stabilize", es: "Estabilizar" },
  Valorizar: { en: "Add Value", es: "Valorizar" },
  "Transformação orgânica inteligente. Resultados que geram valor.": {
    en: "Intelligent organic transformation. Results that generate value.",
    es: "Transformación orgánica inteligente. Resultados que generan valor.",
  },
  "A Lógica da Operação": { en: "The Operation Logic", es: "La Lógica de la Operación" },
  "De resíduo a recurso,": { en: "From residue to resource,", es: "De residuo a recurso," },
  "com inteligência.": { en: "with intelligence.", es: "con inteligencia." },
  "Tecnologia que transforma matéria orgânica": {
    en: "Technology that transforms organic matter",
    es: "Tecnología que transforma materia orgánica",
  },
  "em soluções sustentáveis.": { en: "into sustainable solutions.", es: "en soluciones sostenibles." },
  "A Compost Ant é uma solução tecnológica desenvolvida para otimizar os processos de transformação e estabilização da matéria orgânica, favorecendo o manejo sustentável, a redução de odores e a valorização dos compostos orgânicos.": {
    en: "Compost Ant is a technological solution developed to optimize organic matter transformation and stabilization processes, supporting sustainable management, odor reduction and the valuation of organic compounds.",
    es: "Compost Ant es una solución tecnológica desarrollada para optimizar los procesos de transformación y estabilización de la materia orgánica, favoreciendo el manejo sostenible, la reducción de olores y la valorización de los compuestos orgánicos.",
  },
  "Detalhes da Formulação": { en: "Formulation Details", es: "Detalles de la Formulación" },
  "Passe o mouse sobre os diferenciais para visualizar o impacto operacional no campo.": {
    en: "Hover over the differentials to view the operational impact in the field.",
    es: "Pase el mouse sobre los diferenciales para visualizar el impacto operacional en campo.",
  },
  "Resultado em Campo": { en: "Field Result", es: "Resultado en Campo" },
  "O impacto visual": { en: "The visual impact", es: "El impacto visual" },
  "e biológico.": { en: "and biological.", es: "y biológico." },
  "Acompanhe a aplicação prática da tecnologia Compost Ant e visualize a diferença na estrutura, umidade e padronização do composto final.": {
    en: "Follow the practical application of Compost Ant technology and visualize the difference in structure, moisture and standardization of the final compost.",
    es: "Acompañe la aplicación práctica de la tecnología Compost Ant y visualice la diferencia en estructura, humedad y estandarización del compuesto final.",
  },

  Bovinocultura: { en: "Cattle Farming", es: "Bovinocultura" },
  Suinocultura: { en: "Swine Farming", es: "Suinocultura" },
  Avicultura: { en: "Poultry Farming", es: "Avicultura" },
  "Tecnologia que transforma manejo em resultados.": {
    en: "Technology that transforms management into results.",
    es: "Tecnología que transforma manejo en resultados.",
  },
  "Inteligência ambiental para uma produção mais eficiente.": {
    en: "Environmental intelligence for more efficient production.",
    es: "Inteligencia ambiental para una producción más eficiente.",
  },
  "Ambiência em equilíbrio para lotes mais saudáveis.": {
    en: "Balanced environment for healthier flocks.",
    es: "Ambiencia en equilibrio para lotes más saludables.",
  },
  Ambiência: { en: "Environment", es: "Ambiencia" },
  "Redução de odores, conforto ambiental e saúde do ar.": {
    en: "Odor reduction, environmental comfort and air quality.",
    es: "Reducción de olores, confort ambiental y salud del aire.",
  },
  Resíduos: { en: "Residues", es: "Residuos" },
  "Manejo de dejetos, compostagem e estabilização orgânica.": {
    en: "Waste management, composting and organic stabilization.",
    es: "Manejo de deyecciones, compostaje y estabilización orgánica.",
  },
  Água: { en: "Water", es: "Agua" },
  "Suporte a reservatórios, bebedouros e linhas hídricas.": {
    en: "Support for reservoirs, drinkers and water lines.",
    es: "Soporte a reservorios, bebederos y líneas hídricas.",
  },
  Performance: { en: "Performance", es: "Performance" },
  "Eficiência operacional e ganho zootécnico indireto.": {
    en: "Operational efficiency and indirect zootechnical gain.",
    es: "Eficiencia operacional y ganancia zootécnica indirecta.",
  },
  "Três linhas exclusivas com tecnologias de base orgânica para apoiar ambiência, manejo de dejetos e performance sustentável na pecuária moderna.": {
    en: "Three exclusive lines with organic-based technologies to support environment, waste management and sustainable performance in modern livestock.",
    es: "Tres líneas exclusivas con tecnologías de base orgánica para apoyar ambiencia, manejo de deyecciones y performance sostenible en la ganadería moderna.",
  },
  "Soluções completas para": { en: "Complete solutions for", es: "Soluciones completas para" },
  "cada desafio da pecuária.": { en: "every livestock challenge.", es: "cada desafío de la ganadería." },
  "Performance Sustentável": { en: "Sustainable Performance", es: "Performance Sostenible" },
  "Detalhes Técnicos": { en: "Technical Details", es: "Detalles Técnicos" },
  Tecnologia: { en: "Technology", es: "Tecnología" },
  Orgânica: { en: "Organic", es: "Orgánica" },
  Funcional: { en: "Functional", es: "Funcional" },
  "Aplicações Recomendadas": { en: "Recommended Applications", es: "Aplicaciones Recomendadas" },
  "Eficiência hoje,": { en: "Efficiency today,", es: "Eficiencia hoy," },
  "Legado amanhã.": { en: "Legacy tomorrow.", es: "Legado mañana." },
  "Da ambiência ao resíduo, a Anthars organiza soluções para operações que precisam unir bem-estar animal, eficiência, segurança e responsabilidade ambiental na mesma rotina.": {
    en: "From environment to residues, Anthars organizes solutions for operations that need animal welfare, efficiency, safety and environmental responsibility in the same routine.",
    es: "De la ambiencia al residuo, Anthars organiza soluciones para operaciones que necesitan unir bienestar animal, eficiencia, seguridad y responsabilidad ambiental en la misma rutina.",
  },
  "Soluções completas para cada desafio da pecuária moderna.": {
    en: "Complete solutions for every challenge of modern livestock.",
    es: "Soluciones completas para cada desafío de la ganadería moderna.",
  },
  "Nossas Soluções": { en: "Our Solutions", es: "Nuestras Soluciones" },
  "Ambiência e Conforto": { en: "Environment and Comfort", es: "Ambiencia y Confort" },
  "Qualidade da Água": { en: "Water Quality", es: "Calidad del Agua" },

  "Sobre a Anthars": { en: "About Anthars", es: "Acerca de Anthars" },
  "Plataforma corporativa de tecnologias orgânicas funcionais para agricultura, saneamento, compostagem e pecuária. Eficiência ambiental com visão global.": {
    en: "Corporate platform of functional organic technologies for agriculture, sanitation, composting and livestock. Environmental efficiency with a global vision.",
    es: "Plataforma corporativa de tecnologías orgánicas funcionales para agricultura, saneamiento, compostaje y ganadería. Eficiencia ambiental con visión global.",
  },
  "Atendimento técnico e comercial": { en: "Technical and commercial service", es: "Atención técnica y comercial" },
  "Links de Acesso": { en: "Access Links", es: "Links de Acceso" },
  "Redes Sociais": { en: "Social Networks", es: "Redes Sociales" },
  "Receba Atualizações": { en: "Receive Updates", es: "Reciba Actualizaciones" },
  "Cadastre-se para receber materiais técnicos, novidades de linha e conteúdos sobre manejo sustentável.": {
    en: "Sign up to receive technical materials, line updates and content about sustainable management.",
    es: "Regístrese para recibir materiales técnicos, novedades de línea y contenidos sobre manejo sostenible.",
  },
  "Seu e-mail": { en: "Your email", es: "Su e-mail" },
  Cadastrar: { en: "Subscribe", es: "Registrar" },
  "© 2026 Anthars Biotechnologies. Todos os direitos reservados.": {
    en: "© 2026 Anthars Biotechnologies. All rights reserved.",
    es: "© 2026 Anthars Biotechnologies. Todos los derechos reservados.",
  },
  "Tecnologia, Manejo": { en: "Technology, Management", es: "Tecnología, Manejo" },
  "e Sustentabilidade.": { en: "and Sustainability.", es: "y Sostenibilidad." },
  "A Anthars Biotechnologies atua como plataforma corporativa de soluções ambientais, conectando tecnologia orgânica funcional, eficiência operacional e produção sustentável.": {
    en: "Anthars Biotechnologies operates as a corporate environmental solutions platform, connecting functional organic technology, operational efficiency and sustainable production.",
    es: "Anthars Biotechnologies actúa como plataforma corporativa de soluciones ambientales, conectando tecnología orgánica funcional, eficiencia operacional y producción sostenible.",
  },
  "Nosso trabalho é transformar matéria orgânica, água, solo e ambientes produtivos em sistemas mais estáveis, eficientes e alinhados às melhores práticas ambientais e corporativas.": {
    en: "Our work is to transform organic matter, water, soil and productive environments into more stable, efficient systems aligned with the best environmental and corporate practices.",
    es: "Nuestro trabajo es transformar materia orgánica, agua, suelo y ambientes productivos en sistemas más estables, eficientes y alineados con las mejores prácticas ambientales y corporativas.",
  },
  "— Propósito Anthars": { en: "— Anthars Purpose", es: "— Propósito Anthars" },
  "Nossa Abordagem": { en: "Our Approach", es: "Nuestro Enfoque" },
  "Eficiência operacional com responsabilidade ambiental": {
    en: "Operational efficiency with environmental responsibility",
    es: "Eficiencia operacional con responsabilidad ambiental",
  },
  "Matérias-Primas Naturais": { en: "Natural Raw Materials", es: "Materias Primas Naturales" },
  "Linhas de Solução": { en: "Solution Lines", es: "Líneas de Solución" },
  "Foco no Impacto Real": { en: "Focus on Real Impact", es: "Foco en el Impacto Real" },
  "Compostos Orgânicos": { en: "Organic Compounds", es: "Compuestos Orgánicos" },
  "Utilizamos compostos orgânicos funcionais e extratos naturais para apoiar processos produtivos mais equilibrados.": {
    en: "We use functional organic compounds and natural extracts to support more balanced productive processes.",
    es: "Utilizamos compuestos orgánicos funcionales y extractos naturales para apoyar procesos productivos más equilibrados.",
  },
  "Tecnologia Aplicada": { en: "Applied Technology", es: "Tecnología Aplicada" },
  "Nossas formulações são pensadas para manejo simples, rotina operacional segura e resultados consistentes.": {
    en: "Our formulations are designed for simple management, safe operational routines and consistent results.",
    es: "Nuestras formulaciones están pensadas para manejo simple, rutina operacional segura y resultados consistentes.",
  },
  "Prática de Campo": { en: "Field Practice", es: "Práctica de Campo" },
  "Cada linha responde a desafios concretos: odor, resíduos, solo, água, ambiência, compostagem e produtividade.": {
    en: "Each line responds to concrete challenges: odor, residues, soil, water, environment, composting and productivity.",
    es: "Cada línea responde a desafíos concretos: olor, residuos, suelo, agua, ambiencia, compostaje y productividad.",
  },
  "Escopo Global": { en: "Global Scope", es: "Alcance Global" },
  "Nossas Áreas de Atuação": { en: "Our Business Areas", es: "Nuestras Áreas de Actuación" },
  "Soluções tecnológicas que apoiam sistemas produtivos, reduzem impactos e valorizam resíduos em diferentes cadeias.": {
    en: "Technological solutions that support productive systems, reduce impacts and add value to residues across different chains.",
    es: "Soluciones tecnológicas que apoyan sistemas productivos, reducen impactos y valorizan residuos en diferentes cadenas.",
  },
  "Agricultura Sustentável": { en: "Sustainable Agriculture", es: "Agricultura Sostenible" },
  "Pecuária Moderna": { en: "Modern Livestock", es: "Ganadería Moderna" },
  "O Orgulho de Fazer a Diferença": { en: "The Responsibility to Make a Difference", es: "La Responsabilidad de Hacer la Diferencia" },
  "O nome Anthars reflete nossa responsabilidade de entregar tecnologias que conectam produção, ambiente, eficiência econômica e visão global para um futuro mais sustentável.": {
    en: "The Anthars name reflects our responsibility to deliver technologies that connect production, environment, economic efficiency and global vision for a more sustainable future.",
    es: "El nombre Anthars refleja nuestra responsabilidad de entregar tecnologías que conectan producción, ambiente, eficiencia económica y visión global para un futuro más sostenible.",
  },
  "Junte-se à nossa Jornada": { en: "Join Our Journey", es: "Únase a Nuestra Jornada" },

  "Fale com nossos": { en: "Talk to our", es: "Hable con nuestros" },
  Especialistas: { en: "Specialists", es: "Especialistas" },
  "Canal de atendimento direto com a equipe técnica da Anthars": {
    en: "Direct service channel with Anthars technical team",
    es: "Canal de atención directa con el equipo técnico de Anthars",
  },
  "Atendimento Brasil": { en: "Brazil Service", es: "Atención Brasil" },
  "Equipe técnica e comercial": { en: "Technical and commercial team", es: "Equipo técnico y comercial" },
  "Agricultura, saneamento, compostagem e pecuária": {
    en: "Agriculture, sanitation, composting and livestock",
    es: "Agricultura, saneamiento, compostaje y ganadería",
  },
  "Atendimento consultivo para operações em todo o Brasil.": {
    en: "Consultative service for operations throughout Brazil.",
    es: "Atención consultiva para operaciones en todo Brasil.",
  },
  Contatos: { en: "Contacts", es: "Contactos" },
  "Canais de Atendimento": { en: "Service Channels", es: "Canales de Atención" },
  Privacidade: { en: "Privacy", es: "Privacidad" },
  "Proteção de Dados": { en: "Data Protection", es: "Protección de Datos" },
  "Atendimento Sigiloso": { en: "Confidential Service", es: "Atención Confidencial" },
  "Conformidade com LGPD": { en: "LGPD Compliance", es: "Cumplimiento con LGPD" },
  "Respeito à Propriedade": { en: "Respect for Property", es: "Respeto a la Propiedad" },
  "Envie sua Mensagem": { en: "Send Your Message", es: "Envíe su Mensaje" },
  "Preencha os dados abaixo para que nossos consultores possam entender melhor a sua necessidade.": {
    en: "Fill in the details below so our consultants can better understand your needs.",
    es: "Complete los datos a continuación para que nuestros consultores puedan entender mejor su necesidad.",
  },
  "Nome Completo *": { en: "Full Name *", es: "Nombre Completo *" },
  "Seu nome": { en: "Your name", es: "Su nombre" },
  "Propriedade / Empresa": { en: "Property / Company", es: "Propiedad / Empresa" },
  "Nome da Fazenda ou Empresa": { en: "Farm or Company Name", es: "Nombre de la Hacienda o Empresa" },
  "Telefone / WhatsApp": { en: "Phone / WhatsApp", es: "Teléfono / WhatsApp" },
  "Linha de Interesse": { en: "Line of Interest", es: "Línea de Interés" },
  "Selecione um Produto ou Setor...": { en: "Select a Product or Sector...", es: "Seleccione un Producto o Sector..." },
  "Seja um Distribuidor / Revenda": { en: "Become a Distributor / Reseller", es: "Sea un Distribuidor / Revendedor" },
  "Outros / Dúvidas Gerais": { en: "Other / General Questions", es: "Otros / Dudas Generales" },
  "Sua Mensagem *": { en: "Your Message *", es: "Su Mensaje *" },
  "Descreva brevemente como podemos ajudar sua propriedade ou negócio...": {
    en: "Briefly describe how we can help your property or business...",
    es: "Describa brevemente cómo podemos ayudar su propiedad o negocio...",
  },
  "Concordo em receber comunicações da Anthars. Seus dados estão seguros conosco e não serão compartilhados com terceiros. Entendo que o tempo de resposta é de até 24h úteis.": {
    en: "I agree to receive communications from Anthars. Your data is safe with us and will not be shared with third parties. I understand the response time is up to 24 business hours.",
    es: "Acepto recibir comunicaciones de Anthars. Sus datos están seguros con nosotros y no serán compartidos con terceros. Entiendo que el tiempo de respuesta es de hasta 24 horas hábiles.",
  },
  "Enviar Mensagem": { en: "Send Message", es: "Enviar Mensaje" },
};

const REVERSE_TRANSLATIONS = new Map<string, string>();

Object.entries(TRANSLATIONS).forEach(([pt, translation]) => {
  REVERSE_TRANSLATIONS.set(normalizeText(translation.en), pt);
  REVERSE_TRANSLATIONS.set(normalizeText(translation.es), pt);
});

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function getOriginalText(node: Text, normalizedValue: string) {
  const mapped = ORIGINAL_TEXT.get(node);
  if (mapped) return mapped;

  const original = REVERSE_TRANSLATIONS.get(normalizedValue) ?? normalizedValue;
  ORIGINAL_TEXT.set(node, original);
  return original;
}

function translateText(original: string, language: Language) {
  if (language === "pt") return original;
  return TRANSLATIONS[normalizeText(original)]?.[language] ?? original;
}

function preserveOuterWhitespace(current: string, translated: string) {
  const leading = current.match(/^\s*/)?.[0] ?? "";
  const trailing = current.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function shouldSkipElement(element: Element | null) {
  if (!element) return true;
  if (element.closest("[data-no-translate]")) return true;

  const tag = element.tagName.toLowerCase();
  return ["script", "style", "noscript", "svg", "canvas", "code", "pre"].includes(tag);
}

function translateAttributes(language: Language) {
  const attributeNames = ["placeholder", "aria-label", "title", "alt"];
  const selector = attributeNames.map((attribute) => `[${attribute}]`).join(",");

  document.querySelectorAll(selector).forEach((element) => {
    if (shouldSkipElement(element)) return;

    attributeNames.forEach((attribute) => {
      const current = element.getAttribute(attribute);
      if (!current) return;

      const originalAttribute = `data-anthars-original-${attribute}`;
      const storedOriginal = element.getAttribute(originalAttribute);
      const normalizedCurrent = normalizeText(current);
      const original = storedOriginal ?? REVERSE_TRANSLATIONS.get(normalizedCurrent) ?? normalizedCurrent;

      if (!storedOriginal) {
        element.setAttribute(originalAttribute, original);
      }

      const translated = translateText(original, language);
      if (translated !== current) {
        element.setAttribute(attribute, translated);
      }
    });
  });
}

function applyLanguageToDom(language: Language) {
  if (typeof window === "undefined" || !document.body) return;

  document.documentElement.lang =
    language === "pt" ? "pt-BR" : language === "en" ? "en" : "es";

  const walker = document.createTreeWalker(document.body, window.NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (shouldSkipElement(parent)) return window.NodeFilter.FILTER_REJECT;
      if (!normalizeText(node.nodeValue ?? "")) return window.NodeFilter.FILTER_REJECT;
      return window.NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => {
    const current = node.nodeValue ?? "";
    const normalizedCurrent = normalizeText(current);
    if (!normalizedCurrent) return;

    const original = getOriginalText(node, normalizedCurrent);
    const translated = translateText(original, language);
    const nextValue = preserveOuterWhitespace(current, translated);

    if (node.nodeValue !== nextValue) {
      node.nodeValue = nextValue;
    }
  });

  translateAttributes(language);
}

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    applyLanguageToDom(language);

    let frame = 0;
    const scheduleApply = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => applyLanguageToDom(language));
    };

    const observer = new MutationObserver(scheduleApply);
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
