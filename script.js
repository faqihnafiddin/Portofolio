// ==========================================================================
// FAQIHNA FIDDIN ALFARIZI — CLOUD & DEVOPS CONTROL PLANE INTERACTIVITY
// Includes Bilingual (EN / ID) i18n Engine, Topology Switcher & Simulator
// ==========================================================================

// 0. BILINGUAL DICTIONARY (EN & ID)
const i18nDict = {
    en: {
        'nav.role': 'Cloud & DevOps',
        'nav.overview': 'Overview',
        'nav.arch': 'Architecture',
        'nav.exp': 'Experience',
        'nav.projects': 'Blueprints',
        'nav.cred': 'Credentials',
        'nav.cmd': 'Command',
        'nav.cta': 'Hire / Connect',

        'cmd.placeholder': 'Type a command or search sections (e.g. k8s, deploy, cv, id/en)...',
        'cmd.quick': 'QUICK ACTIONS',
        'cmd.deploy': 'Trigger Live Zero-Downtime Rollout Simulation',
        'cmd.lang': 'Switch Language (Bahasa Indonesia / English)',
        'cmd.email': 'Copy Email: faqihnafiddin12@gmail.com',
        'cmd.cv': 'Open Printable / ATS Resume (CV)',
        'cmd.theme': 'Toggle Dark / Light Console Theme',
        'cmd.nav': 'NAVIGATE CONTROL PLANE',
        'cmd.nav.overview': 'Overview & Multi-Cloud Topology',
        'cmd.nav.bento': 'Engineering Architecture & Live CI/CD Bento',
        'cmd.nav.exp': 'Work Experience & Runbooks (PT Link Net Tbk)',
        'cmd.nav.projects': 'Cloud Infrastructure Blueprints & Projects',
        'cmd.nav.cred': 'Education, Bootcamps & Certifications',

        'hero.ribbon': 'DevOps Engineer @ <strong>PT Link Net Tbk</strong>',
        'hero.title': 'Keeping multi-cloud <span class="text-gradient">Kubernetes</span> &amp; <span class="text-gradient-emerald">CI/CD pipelines</span> resilient at scale.',
        'hero.desc': 'Hi, I\'m <strong>Faqihna Fiddin Alfarizi</strong>. Day-to-day, I orchestrate production workloads across <strong>AWS (EKS)</strong>, <strong>Google Cloud (GKE)</strong>, and <strong>Tencent Cloud (TKE)</strong>—automating zero-downtime releases, securing secrets with <strong>Azure Key Vault</strong>, and building real-time observability with <strong>Prometheus &amp; Grafana</strong>.',
        'hero.btn.explore': 'Explore Blueprints',
        'hero.btn.cv': 'Interactive CV / PDF',

        'cp.live': 'LIVE TOPOLOGY',
        'cp.cicd': 'CI/CD Pipeline',
        'cp.secret': 'Secret Store',
        'cp.cpu': 'CPU Requests',
        'cp.mem': 'Memory Alloc',
        'cp.rollout': 'Rollout Strategy',
        'cp.hint': 'Click cluster tabs above to inspect multi-cloud state',

        'bento.eyebrow': 'CORE ARCHITECTURE & CAPABILITIES',
        'bento.title': 'Engineered for Reliability, Automation & Visibility',
        'bento.sub': 'Interactive overview of my technical stack and daily DevOps workflows.',
        'bento1.badge': 'CI/CD & RELEASE AUTOMATION',
        'bento1.title': 'Interactive Zero-Downtime Deployment Simulator',
        'bento1.desc': 'Test how I automate releases from Git commit to Kubernetes rolling update without dropping traffic.',
        'bento1.btn': 'Simulate Rollout',
        'bento1.btn.run': 'Deploying...',
        'bento1.btn.again': 'Simulate Again',
        'bento1.s1': 'Commit & Lint',
        'bento1.s2.title': '2. Build Image',
        'bento1.s5.title': '5. Verify Health',
        'bento1.log.ready': 'Pipeline ready. Click "Simulate Rollout" to execute zero-downtime deployment across pods.',

        'bento2.badge': 'OBSERVABILITY',
        'bento2.desc': 'Proactive monitoring & alerting so production issues are caught and fixed before impacting users.',

        'bento3.badge': 'SECRET SECURITY',
        'bento3.title': 'Zero-Trust Credentials',
        'bento3.desc': 'Eliminating hardcoded secrets by syncing <strong>Azure Key Vault</strong> directly to Kubernetes via <strong>External Secrets</strong>.',

        'bento4.badge': 'TECHNICAL SKILLS MATRIX',
        'bento4.title': 'Complete Cloud & DevOps Stack',
        'bento4.f.all': 'All Stack',
        'bento4.f.cloud': 'Cloud & K8s',
        'bento4.f.cicd': 'CI/CD & Sec',
        'bento4.f.ops': 'OS & Monitoring',

        'stack.gke': 'Managed Kubernetes',
        'stack.aws': 'Cloud Infrastructure',
        'stack.tke': 'Production Clusters',
        'stack.k8s': 'Deployments, Ingress, Services',
        'stack.docker': 'Containerization',
        'stack.ado': 'Automated Releases',
        'stack.git': 'Version Control & CI',
        'stack.kv': 'Secret Management',
        'stack.gha': 'Registry & Workflows',
        'stack.prom': 'Metrics Collection',
        'stack.graf': 'Observability Dashboards',
        'stack.linux': 'Server Administration',

        'exp.eyebrow': 'WORK EXPERIENCE & RUNBOOKS',
        'exp.title': 'Production Infrastructure Operations',
        'exp.sub': 'Real-world enterprise experience maintaining multi-cloud Kubernetes stability and automated delivery.',
        'exp.period': 'October 2026 – Present',
        'exp.note': 'Responsible for day-to-day multi-cloud Kubernetes reliability across GKE, EKS, and TKE, CI/CD release automation, and rapid production incident resolution.',
        'exp.tab.impacts': 'Key Impacts (6)',
        'exp.tab.runbooks': 'Incident Runbooks',

        'exp.i1.title': 'Rapid Pod & Container Troubleshooting',
        'exp.i1.desc': 'Quickly resolved live pod and container errors in production, including image pull failures (<code>ImagePullBackOff</code>) and unexpected application crashes (<code>CrashLoopBackOff</code>).',
        'exp.i2.title': 'Azure DevOps CI/CD Automation',
        'exp.i2.desc': 'Maintained and optimized Azure DevOps CI/CD pipelines to ensure smooth, repeatable, and automated application deployments.',
        'exp.i3.title': 'Zero-Trust Secret Management',
        'exp.i3.desc': 'Secured sensitive credentials, certificates, and API keys using <strong>Azure Key Vault</strong> integrated with Kubernetes <strong>External Secrets</strong>.',
        'exp.i4.title': 'Multi-Cloud Cluster High Availability',
        'exp.i4.desc': 'Ensured high availability and operational stability for production Kubernetes clusters across <strong>GKE</strong>, <strong>EKS</strong>, and <strong>TKE</strong>.',
        'exp.i5.title': 'Zero-Downtime Maintenance',
        'exp.i5.desc': 'Handled daily operational maintenance, including zero-downtime rolling updates, deployment validation, and controlled pod restarts.',
        'exp.i6.title': 'Core Kubernetes Resource Governance',
        'exp.i6.desc': 'Managed core Kubernetes resources including <strong>Deployments</strong>, <strong>Services</strong>, <strong>Ingress</strong>, <strong>ConfigMaps</strong>, and <strong>Secrets</strong>.',

        'rb1.title': 'Resolving ImagePullBackOff & CrashLoopBackOff in Production',
        'rb1.s1': '<code>kubectl describe pod</code> &amp; <code>kubectl logs --previous</code> to isolate exit codes or registry auth errors.',
        'rb1.s2': 'Verify image tag in Docker Hub/Registry, validate <code>imagePullSecrets</code> &amp; ConfigMap/Secret mounts.',
        'rb1.s3': 'Trigger <code>kubectl rollout restart deployment</code> and verify readiness probes pass with zero traffic drop.',

        'rb2.title': 'Secret Rotation via Azure Key Vault & External Secrets',
        'rb2.s1': 'Rotate credential version inside Azure Key Vault with RBAC access policy.',
        'rb2.s2': 'External Secrets Operator reconciles <code>ExternalSecret</code> CRD and updates native K8s <code>Secret</code>.',
        'rb2.s3': 'Perform rolling update and confirm zero-downtime connectivity across GKE, EKS, and TKE pods.',

        'proj.eyebrow': 'INFRASTRUCTURE BLUEPRINTS & PROJECTS',
        'proj.title': 'Hands-On Cloud & Observability Projects',
        'proj.sub': 'Click <strong>"Inspect Architecture"</strong> on any project to view the underlying system flow.',
        'proj.source': 'Source Code',
        'proj.arch.label': 'SYSTEM ARCHITECTURE FLOW',
        'proj.inspect': 'Inspect Architecture',
        'proj.hide': 'Hide Architecture',

        'proj1.title': 'Cloud Full-Stack Deployment & Monitoring Stack on AWS',
        'proj1.desc': 'End-to-end containerized deployment of a 3-tier application (React Vite, Express REST API, MongoDB) on <strong>AWS EC2</strong> using <strong>Docker Compose</strong>, automated via <strong>GitHub Actions CI/CD</strong>, and monitored with <strong>Prometheus &amp; Grafana</strong>.',
        'proj1.h1': 'Automated SSH deployment workflow via GitHub Actions on every push to <code>main</code>.',
        'proj1.h2': 'Configured <strong>Node Exporter</strong> + <strong>Prometheus</strong> scraping CPU, memory, disk, and network metrics.',
        'proj1.h3': 'Visualized real-time host telemetry on <strong>Grafana</strong> (Dashboard ID 1860).',

        'proj2.title': 'Containerized Telemetry & Time-Series Monitoring Pipeline',
        'proj2.desc': 'Multi-container real-time telemetry ingestion and observability pipeline orchestrated with <strong>Docker Compose</strong>, streaming metrics through <strong>MQTT</strong> into <strong>InfluxDB 2.7</strong> and <strong>Grafana</strong>.',
        'proj2.h1': 'Orchestrated isolated services for <code>eclipse-mosquitto</code>, Python simulator/ingestion, <code>influxdb:2.7</code>, and <code>grafana</code>.',
        'proj2.h2': 'Configured persistent Docker volumes (<code>influx-data</code>) to guarantee time-series durability across container restarts.',
        'proj2.h3': 'Built real-time Grafana telemetry panels for anomaly and threshold tracking.',

        'cred.eyebrow': 'EDUCATION & CREDENTIALS',
        'cred.title': 'Academic Foundation & Cloud Certifications',
        'cred.edu.type': 'ACADEMIC DEGREE',
        'cred.edu.deg': 'Associate Degree in Information Systems',
        'cred.edu.date': 'August 2018 – November 2021',
        'cred.boot.type': 'INTENSIVE TRAINING PROGRAMS',
        'cred.boot.title': 'Cloud & AWS Bootcamps',
        'cred.cert.type': 'VERIFIED CREDENTIALS',
        'cred.cert.title': 'Certifications & Badges',

        'cta.open': 'OPEN FOR ROLES:',
        'cta.title': 'Ready to scale & secure your cloud infrastructure?',
        'cta.desc': 'Let\'s discuss how I can help your team manage multi-cloud Kubernetes clusters, streamline CI/CD pipelines, and maintain 99.9%+ observability.',
        'cta.btn.email': 'Email Me',
        'cta.btn.cv': 'Print / Download CV',
        'footer.status': 'Control Plane Operational'
    },
    id: {
        'nav.role': 'Cloud & DevOps',
        'nav.overview': 'Ringkasan',
        'nav.arch': 'Arsitektur',
        'nav.exp': 'Pengalaman',
        'nav.projects': 'Proyek Cloud',
        'nav.cred': 'Sertifikasi',
        'nav.cmd': 'Pintasan',
        'nav.cta': 'Hubungi Saya',

        'cmd.placeholder': 'Ketik perintah atau cari bagian (mis. k8s, deploy, cv, id/en)...',
        'cmd.quick': 'AKSI CEPAT',
        'cmd.deploy': 'Jalankan Simulasi Deployment Zero-Downtime',
        'cmd.lang': 'Ganti Bahasa (Bahasa Indonesia / Inggris)',
        'cmd.email': 'Salin Email: faqihnafiddin12@gmail.com',
        'cmd.cv': 'Buka CV Siap Cetak / ATS (PDF)',
        'cmd.theme': 'Ganti Tema Konsol (Gelap / Terang)',
        'cmd.nav': 'NAVIGASI CONTROL PLANE',
        'cmd.nav.overview': 'Ringkasan & Topologi Multi-Cloud',
        'cmd.nav.bento': 'Arsitektur Engineering & Simulasi CI/CD',
        'cmd.nav.exp': 'Pengalaman Kerja & Runbook (PT Link Net Tbk)',
        'cmd.nav.projects': 'Blueprint Infrastruktur Cloud & Proyek',
        'cmd.nav.cred': 'Pendidikan, Bootcamp & Sertifikasi',

        'hero.ribbon': 'DevOps Engineer @ <strong>PT Link Net Tbk</strong>',
        'hero.title': 'Menjaga kehandalan <span class="text-gradient">Kubernetes</span> multi-cloud &amp; <span class="text-gradient-emerald">CI/CD pipeline</span> di skala produksi.',
        'hero.desc': 'Halo, saya <strong>Faqihna Fiddin Alfarizi</strong>. Sehari-hari saya mengelola beban kerja produksi Kubernetes di <strong>AWS (EKS)</strong>, <strong>Google Cloud (GKE)</strong>, dan <strong>Tencent Cloud (TKE)</strong>—fokus membangun otomatisasi rilis tanpa downtime, mengamankan kredensial dengan <strong>Azure Key Vault</strong>, serta memantau observabilitas sistem menggunakan <strong>Prometheus &amp; Grafana</strong>.',
        'hero.btn.explore': 'Lihat Proyek & Arsitektur',
        'hero.btn.cv': 'Lihat / Unduh CV (PDF)',

        'cp.live': 'TOPOLOGI AKTIF',
        'cp.cicd': 'Pipeline CI/CD',
        'cp.secret': 'Manajemen Secret',
        'cp.cpu': 'Alokasi CPU',
        'cp.mem': 'Alokasi Memori',
        'cp.rollout': 'Strategi Rilis',
        'cp.hint': 'Klik tab cluster di atas untuk memeriksa status multi-cloud',

        'bento.eyebrow': 'ARSITEKTUR INTI & KAPABILITAS',
        'bento.title': 'Dirancang untuk Reliabilitas, Otomatisasi & Observabilitas',
        'bento.sub': 'Gambaran interaktif dari stack teknologi dan alur kerja DevOps harian saya.',
        'bento1.badge': 'OTOMATISASI CI/CD & RILIS',
        'bento1.title': 'Simulator Deployment Zero-Downtime Interaktif',
        'bento1.desc': 'Uji bagaimana saya mengotomatiskan rilis mulai dari Git commit hingga rolling update di Kubernetes tanpa memutus trafik produksi.',
        'bento1.btn': 'Jalankan Simulasi',
        'bento1.btn.run': 'Menjalankan...',
        'bento1.btn.again': 'Simulasikan Lagi',
        'bento1.s1': 'Commit & Uji',
        'bento1.s2.title': '2. Build Image',
        'bento1.s5.title': '5. Cek Kesehatan',
        'bento1.log.ready': 'Pipeline siap. Klik "Jalankan Simulasi" untuk mengeksekusi rolling update tanpa downtime.',

        'bento2.badge': 'OBSERVABILITAS',
        'bento2.desc': 'Monitoring dan peringatan proaktif agar kendala produksi langsung terdeteksi dan diperbaiki dengan cepat.',

        'bento3.badge': 'KEAMANAN KREDENSIAL',
        'bento3.title': 'Kredensial Zero-Trust',
        'bento3.desc': 'Menghilangkan kredensial hardcoded dengan menyinkronkan <strong>Azure Key Vault</strong> langsung ke Kubernetes melalui <strong>External Secrets</strong>.',

        'bento4.badge': 'MATRIKS KEAHLIAN TEKNIS',
        'bento4.title': 'Stack Lengkap Cloud & DevOps',
        'bento4.f.all': 'Semua Stack',
        'bento4.f.cloud': 'Cloud & K8s',
        'bento4.f.cicd': 'CI/CD & Keamanan',
        'bento4.f.ops': 'OS & Monitoring',

        'stack.gke': 'Managed Kubernetes',
        'stack.aws': 'Infrastruktur Cloud',
        'stack.tke': 'Cluster Produksi',
        'stack.k8s': 'Deployments, Ingress, Services',
        'stack.docker': 'Kontainerisasi Aplikasi',
        'stack.ado': 'Otomatisasi Rilis',
        'stack.git': 'Version Control & CI',
        'stack.kv': 'Manajemen Kredensial',
        'stack.gha': 'Registry & Workflow',
        'stack.prom': 'Pengumpulan Metrik',
        'stack.graf': 'Dashboard Observabilitas',
        'stack.linux': 'Administrasi Server',

        'exp.eyebrow': 'PENGALAMAN KERJA & RUNBOOK',
        'exp.title': 'Operasional Infrastruktur Produksi',
        'exp.sub': 'Pengalaman nyata di lingkungan enterprise dalam menjaga stabilitas Kubernetes multi-cloud dan kelancaran deployment.',
        'exp.period': 'Oktober 2026 – Sekarang',
        'exp.note': 'Bertanggung jawab atas keandalan operasional Kubernetes multi-cloud (GKE, EKS, TKE), pemeliharaan pipeline CI/CD Azure DevOps, serta penanganan cepat kendala produksi.',
        'exp.tab.impacts': 'Tanggung Jawab (6)',
        'exp.tab.runbooks': 'Runbook Insiden',

        'exp.i1.title': 'Penanganan Cepat Error Pod & Kontainer',
        'exp.i1.desc': 'Menyelesaikan error pod dan kontainer secara langsung di produksi, seperti kegagalan tarik image (<code>ImagePullBackOff</code>) dan crash aplikasi tak terduga (<code>CrashLoopBackOff</code>).',
        'exp.i2.title': 'Pemeliharaan Pipeline CI/CD Azure DevOps',
        'exp.i2.desc': 'Memelihara dan mengoptimalkan pipeline CI/CD Azure DevOps untuk memastikan proses deployment aplikasi berjalan lancar dan otomatis.',
        'exp.i3.title': 'Pengamanan Kredensial & Secret',
        'exp.i3.desc': 'Mengamankan kredensial sensitif, sertifikat, dan kunci API menggunakan <strong>Azure Key Vault</strong> dan Kubernetes <strong>External Secrets</strong>.',
        'exp.i4.title': 'High Availability Cluster Multi-Cloud',
        'exp.i4.desc': 'Memastikan ketersediaan tinggi (High Availability) dan stabilitas cluster Kubernetes produksi di <strong>GKE</strong>, <strong>EKS</strong>, dan <strong>TKE</strong>.',
        'exp.i5.title': 'Pemeliharaan Harian Tanpa Downtime',
        'exp.i5.desc': 'Menangani tugas pemeliharaan harian termasuk zero-downtime rolling update, validasi deployment, dan restart pod terkontrol.',
        'exp.i6.title': 'Pengelolaan Resource Inti Kubernetes',
        'exp.i6.desc': 'Mengelola resource utama Kubernetes termasuk <strong>Deployments</strong>, <strong>Services</strong>, <strong>Ingress</strong>, serta konfigurasi (<strong>ConfigMaps</strong> dan <strong>Secrets</strong>).',

        'rb1.title': 'Penanganan ImagePullBackOff & CrashLoopBackOff di Produksi',
        'rb1.s1': 'Jalankan <code>kubectl describe pod</code> &amp; <code>kubectl logs --previous</code> untuk mengidentifikasi kode exit atau kendala autentikasi registry.',
        'rb1.s2': 'Verifikasi tag image di Docker Hub/Registry, lalu validasi <code>imagePullSecrets</code> serta mount ConfigMap/Secret.',
        'rb1.s3': 'Eksekusi <code>kubectl rollout restart deployment</code> dan pastikan readiness probe sukses tanpa memutus trafik.',

        'rb2.title': 'Rotasi Kredensial via Azure Key Vault & External Secrets',
        'rb2.s1': 'Perbarui versi kredensial di dalam Azure Key Vault sesuai kebijakan akses RBAC.',
        'rb2.s2': 'External Secrets Operator menyinkronkan CRD <code>ExternalSecret</code> dan memperbarui <code>Secret</code> native Kubernetes.',
        'rb2.s3': 'Lakukan rolling update dan pastikan konektivitas tetap berjalan lancar di pod GKE, EKS, dan TKE.',

        'proj.eyebrow': 'BLUEPRINT INFRASTRUKTUR & PROYEK',
        'proj.title': 'Proyek Implementasi Cloud & Observabilitas',
        'proj.sub': 'Klik <strong>"Lihat Arsitektur"</strong> pada proyek di bawah untuk melihat alur sistem di baliknya.',
        'proj.source': 'Kode Sumber',
        'proj.arch.label': 'ALUR ARSITEKTUR SISTEM',
        'proj.inspect': 'Lihat Arsitektur',
        'proj.hide': 'Tutup Arsitektur',

        'proj1.title': 'Cloud Full-Stack Deployment & Monitoring Stack di AWS',
        'proj1.desc': 'Deployment penuh aplikasi 3-tier berbasis kontainer (React Vite, Express REST API, MongoDB) di <strong>AWS EC2</strong> menggunakan <strong>Docker Compose</strong>, diotomatisasi dengan <strong>GitHub Actions CI/CD</strong>, serta dipantau melalui <strong>Prometheus &amp; Grafana</strong>.',
        'proj1.h1': 'Otomatisasi workflow deployment SSH melalui GitHub Actions setiap ada push ke branch <code>main</code>.',
        'proj1.h2': 'Konfigurasi <strong>Node Exporter</strong> + <strong>Prometheus</strong> untuk memantau metrik CPU, memori, disk, dan jaringan.',
        'proj1.h3': 'Visualisasi telemetri server secara real-time pada dashboard <strong>Grafana</strong> (Dashboard ID 1860).',

        'proj2.title': 'Pipeline Telemetri Terkontainerisasi & Monitoring Time-Series',
        'proj2.desc': 'Pipeline ingesti telemetri dan observabilitas multi-kontainer secara real-time menggunakan <strong>Docker Compose</strong>, mengalirkan data metrik melalui <strong>MQTT</strong> ke <strong>InfluxDB 2.7</strong> dan <strong>Grafana</strong>.',
        'proj2.h1': 'Orkestrasi layanan terisolasi untuk <code>eclipse-mosquitto</code>, simulator/ingesti Python, <code>influxdb:2.7</code>, dan <code>grafana</code>.',
        'proj2.h2': 'Konfigurasi persistent Docker volume (<code>influx-data</code>) untuk menjamin ketahanan data time-series saat kontainer direstart.',
        'proj2.h3': 'Pembuatan panel telemetri Grafana real-time untuk pemantauan anomali dan batas ambang metrik.',

        'cred.eyebrow': 'PENDIDIKAN & SERTIFIKASI',
        'cred.title': 'Latar Belakang Akademik & Kredensial Cloud',
        'cred.edu.type': 'PENDIDIKAN TINGGI',
        'cred.edu.deg': 'Diploma Tiga (D3) Sistem Informasi',
        'cred.edu.date': 'Agustus 2018 – November 2021',
        'cred.boot.type': 'PROGRAM PELATIHAN INTENSIF',
        'cred.boot.title': 'Bootcamp Cloud & AWS',
        'cred.cert.type': 'KREDENSIAL TERVERIFIKASI',
        'cred.cert.title': 'Sertifikasi & Lencana',

        'cta.open': 'FOKUS KARIR:',
        'cta.title': 'Siap meningkatkan keandalan infrastruktur cloud tim Anda?',
        'cta.desc': 'Mari diskusikan bagaimana saya dapat membantu tim Anda mengelola cluster Kubernetes multi-cloud, mengotomatisasi pipeline CI/CD, dan menjaga observabilitas sistem 99.9%+.',
        'cta.btn.email': 'Kirim Email',
        'cta.btn.cv': 'Cetak / Unduh CV',
        'footer.status': 'Control Plane Beroperasi Normal'
    }
};

const simLogsI18n = {
    en: [
        '1/5 [GITLAB-CI] Commit verified on main branch. Triggering build pipeline...',
        '2/5 [DOCKER] Building multi-stage image & pushing tag v2.4.1 to Docker Hub...',
        '3/5 [KEY-VAULT] Syncing production credentials via External Secrets Operator...',
        '4/5 [KUBERNETES] Performing zero-downtime rolling update across EKS, GKE & TKE...',
        '5/5 [PROMETHEUS] All readiness probes healthy (0 restarts). Deployment complete!'
    ],
    id: [
        '1/5 [GITLAB-CI] Commit terverifikasi di branch main. Memulai pipeline build...',
        '2/5 [DOCKER] Membangun Docker image & push tag v2.4.1 ke Docker Hub...',
        '3/5 [KEY-VAULT] Menyinkronkan kredensial produksi via External Secrets Operator...',
        '4/5 [KUBERNETES] Menjalankan zero-downtime rolling update di EKS, GKE & TKE...',
        '5/5 [PROMETHEUS] Seluruh readiness probe sehat (0 restart). Deployment selesai!'
    ]
};

// 1. TOAST HELPER
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
let toastTimeout = null;

function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// 2. LANGUAGE SWITCHER ENGINE (EN / ID)
const rootEl = document.documentElement;
const langOpts = document.querySelectorAll('.lang-opt');
let currentLang = localStorage.getItem('portfolio_lang') || 'en';

function applyLanguage(lang, showNotification = false) {
    if (!i18nDict[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    rootEl.setAttribute('data-lang', lang);
    rootEl.setAttribute('lang', lang);

    // Update active state on segmented pill buttons
    langOpts.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-opt') === lang);
    });

    const dict = i18nDict[lang];

    // Translate plain text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Translate HTML nodes (preserving <strong>, <code>, <span>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update open/closed architecture drawer buttons
    document.querySelectorAll('.bp-inspect-btn').forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        const span = btn.querySelector('span');
        if (span && drawer) {
            span.textContent = drawer.classList.contains('open') ? dict['proj.hide'] : dict['proj.inspect'];
        }
    });

    if (showNotification) {
        showToast(lang === 'id' ? 'Bahasa diubah ke Bahasa Indonesia (ID)' : 'Language switched to English (EN)');
    }
}

langOpts.forEach(btn => {
    btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-lang-opt');
        if (selected !== currentLang) {
            applyLanguage(selected, true);
        }
    });
});

// Initialize saved language on load
applyLanguage(currentLang, false);

// 3. DARK / LIGHT CONSOLE THEME TOGGLE
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

function toggleTheme() {
    const current = rootEl.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    rootEl.setAttribute('data-theme', next);
    if (themeIcon) {
        themeIcon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    const msg = currentLang === 'id'
        ? `Tema diubah ke mode ${next === 'dark' ? 'Gelap (Telemetry)' : 'Terang (Console)'}`
        : `Switched to ${next === 'dark' ? 'Dark Telemetry' : 'Light Console'} mode`;
    showToast(msg);
}

if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}

// 4. MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const dockLinks = document.getElementById('dockLinks');

if (mobileMenuBtn && dockLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        dockLinks.classList.toggle('mobile-open');
    });

    dockLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dockLinks.classList.remove('mobile-open');
        });
    });
}

// 5. COPY EMAIL ACTION
const copyEmailHero = document.getElementById('copyEmailHero');

function copyEmailToClipboard() {
    const email = 'faqihnafiddin12@gmail.com';
    const copiedMsg = currentLang === 'id'
        ? `Email ${email} berhasil disalin!`
        : `Copied ${email} to clipboard!`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            showToast(copiedMsg);
        });
    } else {
        showToast(`Email: ${email}`);
    }
}

if (copyEmailHero) {
    copyEmailHero.addEventListener('click', copyEmailToClipboard);
}

// 6. INTERACTIVE MULTI-CLOUD TOPOLOGY SWITCHER (HERO WIDGET)
const clusterData = {
    eks: {
        provider: 'AMAZON WEB SERVICES (EC2, IAM, VPC)',
        name: 'eks-prod-ap-southeast-1',
        pipeline: 'Azure DevOps • GitLab CI',
        cpu: '42%',
        mem: '58%',
        rollout: 'Zero-Downtime',
        pods: [
            { name: 'ingress-nginx-controller', status: 'Running' },
            { name: 'linknet-api-deployment-7f9b', status: '3/3 Ready' },
            { name: 'external-secrets-operator', status: 'Synced' },
            { name: 'prometheus-node-exporter', status: 'Scraping' }
        ]
    },
    gke: {
        provider: 'GOOGLE CLOUD PLATFORM (GKE)',
        name: 'gke-prod-asia-southeast2',
        pipeline: 'Azure DevOps • Docker Hub',
        cpu: '36%',
        mem: '51%',
        rollout: 'RollingUpdate',
        pods: [
            { name: 'gke-ingress-gateway-01', status: 'Running' },
            { name: 'billing-service-pod-9c4d', status: '4/4 Ready' },
            { name: 'keyvault-secret-sync-k8s', status: 'Synced' },
            { name: 'grafana-telemetry-agent', status: 'Active' }
        ]
    },
    tke: {
        provider: 'TENCENT CLOUD (TKE)',
        name: 'tke-prod-jakarta-zone-1',
        pipeline: 'Azure DevOps • GitLab CI',
        cpu: '49%',
        mem: '64%',
        rollout: 'Zero-Downtime',
        pods: [
            { name: 'tke-alb-ingress-router', status: 'Running' },
            { name: 'core-worker-deployment-2a1', status: '3/3 Ready' },
            { name: 'configmap-reload-watcher', status: 'Healthy' },
            { name: 'prometheus-k8s-collector', status: 'Scraping' }
        ]
    }
};

const clusterTabs = document.querySelectorAll('.cp-tab');
const clusterProviderBadge = document.getElementById('clusterProviderBadge');
const clusterName = document.getElementById('clusterName');
const topoPipeline = document.getElementById('topoPipeline');
const clusterPodsGrid = document.getElementById('clusterPodsGrid');
const metricCpu = document.getElementById('metricCpu');
const metricMem = document.getElementById('metricMem');
const metricRollout = document.getElementById('metricRollout');
const barCpu = document.getElementById('barCpu');
const barMem = document.getElementById('barMem');

clusterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-cluster');
        const info = clusterData[key];
        if (!info) return;

        clusterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        clusterProviderBadge.textContent = info.provider;
        clusterName.textContent = info.name;
        topoPipeline.textContent = info.pipeline;
        metricCpu.textContent = info.cpu;
        metricMem.textContent = info.mem;
        metricRollout.textContent = info.rollout;
        barCpu.style.width = info.cpu;
        barMem.style.width = info.mem;

        clusterPodsGrid.innerHTML = info.pods.map(pod => `
            <div class="pod-pill">
                <span class="pod-dot ok"></span>
                <span class="pod-name">${pod.name}</span>
                <span class="pod-status">${pod.status}</span>
            </div>
        `).join('');
    });
});

// 7. INTERACTIVE CI/CD ZERO-DOWNTIME ROLLOUT SIMULATOR (BENTO 1)
const triggerDeployBtn = document.getElementById('triggerDeployBtn');
const deployBtnText = document.getElementById('deployBtnText');
const deployLogText = document.getElementById('deployLogText');
const stageSteps = document.querySelectorAll('.stage-step');
let isSimulating = false;

function runDeploySimulation() {
    if (isSimulating) return;
    isSimulating = true;
    const dict = i18nDict[currentLang];
    const logs = simLogsI18n[currentLang] || simLogsI18n.en;

    if (deployBtnText) deployBtnText.textContent = dict['bento1.btn.run'];

    stageSteps.forEach(s => {
        s.classList.remove('active', 'done');
    });

    let stepIdx = 0;

    function nextStep() {
        if (stepIdx > 0) {
            stageSteps[stepIdx - 1].classList.remove('active');
            stageSteps[stepIdx - 1].classList.add('done');
        }

        if (stepIdx < stageSteps.length) {
            stageSteps[stepIdx].classList.add('active');
            if (deployLogText) deployLogText.textContent = logs[stepIdx];
            stepIdx++;
            setTimeout(nextStep, 750);
        } else {
            isSimulating = false;
            if (deployBtnText) deployBtnText.textContent = i18nDict[currentLang]['bento1.btn.again'];
            showToast(currentLang === 'id'
                ? 'Simulasi rolling update Kubernetes selesai tanpa downtime!'
                : 'Zero-downtime Kubernetes rollout completed!');
        }
    }

    nextStep();
}

if (triggerDeployBtn) {
    triggerDeployBtn.addEventListener('click', runDeploySimulation);
}

// 8. TECHNICAL ARSENAL FILTER (BENTO 4)
const skillPills = document.querySelectorAll('.s-pill');
const arsenalChips = document.querySelectorAll('.arsenal-chip');

skillPills.forEach(pill => {
    pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-sfilter');
        skillPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        arsenalChips.forEach(chip => {
            const cat = chip.getAttribute('data-scat');
            if (filter === 'all' || cat === filter) {
                chip.classList.remove('hidden');
            } else {
                chip.classList.add('hidden');
            }
        });
    });
});

// 9. EXPERIENCE TABS (IMPACTS VS INCIDENT RUNBOOKS)
const expTabBtns = document.querySelectorAll('.exp-tab-btn');
const expPanels = {
    responsibilities: document.getElementById('panel-responsibilities'),
    runbooks: document.getElementById('panel-runbooks')
};

expTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-exptab');
        expTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        Object.keys(expPanels).forEach(k => {
            if (expPanels[k]) {
                expPanels[k].classList.toggle('active', k === target);
            }
        });
    });
});

// 10. PROJECT ARCHITECTURE BLUEPRINT DRAWER TOGGLE
const inspectBtns = document.querySelectorAll('.bp-inspect-btn');

inspectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        if (!drawer) return;

        const isOpen = drawer.classList.toggle('open');
        const span = btn.querySelector('span');
        const dict = i18nDict[currentLang];
        if (span) {
            span.textContent = isOpen ? dict['proj.hide'] : dict['proj.inspect'];
        }
    });
});

// 11. COMMAND PALETTE (CTRL+K / CMD+K)
const cmdOverlay = document.getElementById('cmdOverlay');
const cmdTrigger = document.getElementById('cmdTrigger');
const cmdClose = document.getElementById('cmdClose');
const cmdSearch = document.getElementById('cmdSearch');
const cmdItems = document.querySelectorAll('.cmd-item');

function openCmdPalette() {
    if (!cmdOverlay) return;
    cmdOverlay.classList.add('open');
    if (cmdSearch) {
        cmdSearch.value = '';
        filterCmdItems('');
        setTimeout(() => cmdSearch.focus(), 50);
    }
}

function closeCmdPalette() {
    if (!cmdOverlay) return;
    cmdOverlay.classList.remove('open');
}

if (cmdTrigger) cmdTrigger.addEventListener('click', openCmdPalette);
if (cmdClose) cmdClose.addEventListener('click', closeCmdPalette);

if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) closeCmdPalette();
    });
}

window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdOverlay && cmdOverlay.classList.contains('open')) {
            closeCmdPalette();
        } else {
            openCmdPalette();
        }
    } else if (e.key === 'Escape') {
        closeCmdPalette();
    }
});

function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    cmdItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'flex' : 'none';
    });
}

if (cmdSearch) {
    cmdSearch.addEventListener('input', (e) => {
        filterCmdItems(e.target.value);
    });
}

cmdItems.forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const scrollTarget = item.getAttribute('data-scroll');
        closeCmdPalette();

        if (scrollTarget) {
            const el = document.querySelector(scrollTarget);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else if (action === 'deploy') {
            const bento = document.getElementById('bento');
            if (bento) bento.scrollIntoView({ behavior: 'smooth' });
            setTimeout(runDeploySimulation, 400);
        } else if (action === 'lang') {
            const nextLang = currentLang === 'en' ? 'id' : 'en';
            applyLanguage(nextLang, true);
        } else if (action === 'copy-email') {
            copyEmailToClipboard();
        } else if (action === 'open-cv') {
            window.open('cv.html', '_blank');
        } else if (action === 'theme') {
            toggleTheme();
        }
    });
});

// 12. SCROLL REVEAL & ACTIVE NAV SPY
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.dock-link');
const mobileNavAnchors = document.querySelectorAll('.m-nav-item[href^="#"]');

window.addEventListener('scroll', () => {
    let currentId = 'overview';
    sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) {
            currentId = sec.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
    });
    mobileNavAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
    });
});
