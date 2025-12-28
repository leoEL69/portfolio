// Sistema de Tradução
const translations = {
    pt: {
        // Navigation
        'nav-home': 'home',
        'nav-services': 'Serviços',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        
        // Home Page
        'home-greeting': 'Olá, Sou',
        'home-title': 'Sou um',
        'home-typing-web': 'Desenvolvedor Web',
        'home-typing-pentester': 'Pentester',
        'home-typing-reverse': 'Engenheiro Reverso',
        'home-typing-designer': 'Web Designer',
        'home-typing-analyst': 'Analista de Malware',
        'home-description': 'Estudante de Sistemas de Informação com experiência prática em engenharia reversa de executáveis e binários no Windows e Linux. Trabalho com análise de vulnerabilidades, frameworks de segurança e diretrizes NIST para proteger sistemas e ativos. Atualmente buscando oportunidades para crescer em segurança cibernética e aplicar minhas habilidades em ambientes desafiadores do mundo real.',
        'home-hire': 'Contrate-me',
        
        // Services Page
        'services-title': 'Meus',
        'services-subtitle': 'Serviços',
        'services-webdev': 'Desenvolvimento Web',
        'services-webdev-desc': 'Desenvolvimento de aplicações web modernas e responsivas usando as melhores tecnologias e práticas do mercado.',
        'services-webdesign': 'Web Design',
        'services-webdesign-desc': 'Criação de interfaces intuitivas e visualmente atraentes que proporcionam a melhor experiência do usuário.',
        'services-reverse': 'Engenharia Reversa',
        'services-reverse-desc': 'Análise de código binário, identificação de vulnerabilidades e engenharia reversa de software para fins de segurança e pesquisa.',
        'services-pentest': 'Pentest',
        'services-pentest-desc': 'Testes de penetração e análise de segurança para identificar vulnerabilidades e melhorar a segurança de sistemas.',
        'services-readmore': 'Saiba Mais',
        
        // Skills Page
        'skills-title': 'Minhas',
        'skills-subtitle': 'Habilidades',
        
        // Projects Page
        'projects-title': 'Meus',
        'projects-subtitle': 'Projetos',
        'projects-untitled': 'Untitled-Injector',
        'projects-untitled-subtitle': 'Injetor de DLL com GUI',
        'projects-untitled-desc': 'Um injetor de DLL simples escrito em C++ com interface gráfica para Windows. Inclui listagem de processos em execução, seleção de processos alvo e injeção de DLL usando WinAPI. Também inclui recursos básicos de gerenciamento de processos como pausar e retomar processos.',
        'projects-valorant-subtitle': 'Ferramenta de Bypass TPM/Secure Boot do Vanguard',
        'projects-valorant': 'ValorantBypass',
        'projects-valorant-subtitle': 'Ferramenta de Bypass TPM/Secure Boot do Vanguard',
        'projects-valorant-desc': 'Ferramenta desenvolvida para fins educacionais e de pesquisa que contorna o popup TPM/Secure Boot no Valorant. Inclui parar o serviço Vanguard, suspender processos watchdog e usar Sysinternals para suspensão segura de processos. Escrito em C++.',
        'projects-gtfo': 'GTFO-EXTERNAL',
        'projects-gtfo-subtitle': 'Ferramenta Externa',
        'projects-gtfo-desc': 'Projeto de ferramenta externa escrito em C++. Verifique o repositório GitHub para mais detalhes sobre este projeto.',
        'projects-github': 'Ver no GitHub',
        'projects-cpp': 'Projeto C++',
        'projects-security': 'Pesquisa de Segurança',
        
        // Contact Page
        'contact-title': 'Entre em',
        'contact-subtitle': 'Contato',
        'contact-name': 'Nome Completo',
        'contact-email': 'Endereço de Email',
        'contact-subject': 'Assunto do Email',
        'contact-message': 'Sua Mensagem',
        'contact-send': 'Enviar Mensagem',
        'contact-success': 'Mensagem enviada com sucesso!',
        'contact-error': 'Falha ao enviar mensagem. Por favor, tente novamente.',
        'contact-sending': 'Enviando...',
        'contact-email-label': 'Email',
        'contact-location': 'Localização',
        'contact-location-text': 'São Paulo, Brasil'
    },
    en: {
        // Navigation
        'nav-home': 'home',
        'nav-services': 'Services',
        'nav-skills': 'skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Home Page
        'home-greeting': 'Hi, It\'s',
        'home-title': 'I\'m a',
        'home-typing-web': 'Web Developer',
        'home-typing-pentester': 'Pentester',
        'home-typing-reverse': 'Reverse Engineer',
        'home-typing-designer': 'Web Designer',
        'home-typing-analyst': 'Malware Analyst',
        'home-description': 'Information Systems student with hands-on experience in reverse engineering of executables and binaries on Windows and Linux. I work with vulnerability analysis, security frameworks, and NIST guidelines to protect systems and assets. Currently seeking opportunities to grow in cybersecurity and apply my skills in real-world, challenging environments.',
        'home-hire': 'Hire me',
        
        // Services Page
        'services-title': 'My',
        'services-subtitle': 'Services',
        'services-webdev': 'Web Development',
        'services-webdev-desc': 'Development of modern and responsive web applications using the best technologies and market practices.',
        'services-webdesign': 'Web Design',
        'services-webdesign-desc': 'Creation of intuitive and visually attractive interfaces that provide the best user experience.',
        'services-reverse': 'Reverse Engineering',
        'services-reverse-desc': 'Binary code analysis, vulnerability identification and software reverse engineering for security and research purposes.',
        'services-pentest': 'Pentest',
        'services-pentest-desc': 'Penetration testing and security analysis to identify vulnerabilities and improve system security.',
        'services-readmore': 'Read More',
        
        // Skills Page
        'skills-title': 'My',
        'skills-subtitle': 'Skills',
        
        // Projects Page
        'projects-title': 'My',
        'projects-subtitle': 'Projects',
        'projects-untitled': 'Untitled-Injector',
        'projects-untitled-subtitle': 'DLL Injector with GUI',
        'projects-untitled-desc': 'A simple DLL injector written in C++ with a graphical interface for Windows. Features include listing running processes, selecting target processes, and DLL injection using WinAPI. Also includes basic process management features like pausing and resuming processes.',
        'projects-valorant-subtitle': 'Vanguard TPM/Secure Boot Bypass Tool',
        'projects-valorant': 'ValorantBypass',
        'projects-valorant-subtitle': 'Vanguard TPM/Secure Boot Bypass Tool',
        'projects-valorant-desc': 'Tool developed for educational and research purposes that bypasses the TPM/Secure Boot popup in Valorant. Features include stopping Vanguard service, suspending watchdog processes, and using Sysinternals for safe process suspension. Written in C++.',
        'projects-gtfo': 'GTFO-EXTERNAL',
        'projects-gtfo-subtitle': 'External Tool',
        'projects-gtfo-desc': 'External tool project written in C++. Check the GitHub repository for more details about this project.',
        'projects-github': 'View on GitHub',
        'projects-cpp': 'C++ Project',
        'projects-security': 'Security Research',
        
        // Contact Page
        'contact-title': 'Contact',
        'contact-subtitle': 'Me',
        'contact-name': 'Full Name',
        'contact-email': 'Email Address',
        'contact-subject': 'Email Subject',
        'contact-message': 'Your Message',
        'contact-send': 'Send Message',
        'contact-success': 'Message sent successfully!',
        'contact-error': 'Failed to send message. Please try again.',
        'contact-sending': 'Sending...',
        'contact-email-label': 'Email',
        'contact-location': 'Location',
        'contact-location-text': 'São Paulo, Brazil'
    }
};

// Função para obter o idioma salvo ou padrão (português)
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'pt';
}

// Função para salvar o idioma
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

// Função para aplicar traduções
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Traduzir placeholders
    const placeholders = document.querySelectorAll('[data-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Traduzir valores de input/button
    const values = document.querySelectorAll('[data-value]');
    values.forEach(element => {
        const key = element.getAttribute('data-value');
        if (translations[lang] && translations[lang][key]) {
            element.value = translations[lang][key];
        }
    });
    
    // Atualizar animação de typing se existir
    updateTypingAnimation(lang);
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = lang;
}

// Função para atualizar animação de typing
function updateTypingAnimation(lang) {
    const styleId = 'typing-animation-style';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
    }
    
    const words = lang === 'pt' 
        ? [translations.pt['home-typing-web'], translations.pt['home-typing-pentester'], translations.pt['home-typing-reverse'], translations.pt['home-typing-designer'], translations.pt['home-typing-analyst']]
        : [translations.en['home-typing-web'], translations.en['home-typing-pentester'], translations.en['home-typing-reverse'], translations.en['home-typing-designer'], translations.en['home-typing-analyst']];
    
    let css = `
        @keyframes words{
            0%, 19%{ content: "${words[0]}"; }
            20%, 39%{ content: "${words[1]}"; }
            40%, 59%{ content: "${words[2]}"; }
            60%, 79%{ content: "${words[3]}"; }
            80%, 100%{ content: "${words[4]}"; }
        }
    `;
    
    styleElement.textContent = css;
}

// Inicializar traduções ao carregar a página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const currentLang = getCurrentLanguage();
        applyTranslations(currentLang);
    });
} else {
    const currentLang = getCurrentLanguage();
    applyTranslations(currentLang);
}

// Função para trocar idioma
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    
    // Atualizar ícone do botão em todas as instâncias
    const langIcons = document.querySelectorAll('#lang-icon');
    langIcons.forEach(langIcon => {
        langIcon.textContent = newLang === 'pt' ? 'PT' : 'EN';
    });
}

