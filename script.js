document.addEventListener('DOMContentLoaded', () => {
    // 1. Active Link Toggle
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        // Mobile specific classes
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-20');
        navMenu.classList.toggle('right-4');
        navMenu.classList.toggle('bg-slate-800');
        navMenu.classList.toggle('p-6');
        navMenu.classList.toggle('rounded-lg');
        navMenu.classList.toggle('shadow-2xl');
    });

    // 3. SDK Configuration logic
    const defaultConfig = {
        brand_logo_url: 'https://via.placeholder.com/120x50?text=Demi+Accounting',
        nav_link_1: 'Αρχική',
        nav_link_2: 'Υπηρεσίες',
        nav_link_3: 'Επικοινωνία',
        bg_color: '#1a202c',
        text_color: '#ffffff',
        accent_color: '#f59e0b'
        // ... (πρόσθεσε τα υπόλοιπα default values αν χρειάζεται)
    };

    function applyConfig(config) {
        const root = document.body;
        if(config.bg_color) root.style.setProperty('--bg-color', config.bg_color);
        if(config.text_color) root.style.setProperty('--text-color', config.text_color);
        if(config.accent_color) root.style.setProperty('--accent-color', config.accent_color);
        
        if(config.brand_logo_url) document.getElementById('brand-logo').src = config.brand_logo_url;
        
        document.getElementById('nav-link-1').textContent = config.nav_link_1 || defaultConfig.nav_link_1;
        // κλπ για όλα τα πεδία...
    }

    // Initialize SDK αν υπάρχει
    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange: (config) => applyConfig(config)
        });
    }
}); 
