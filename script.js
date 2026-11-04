// ==========================================================================
// FAQIHNA FIDDIN ALFARIZI — CLOUD & DEVOPS CONTROL PLANE INTERACTIVITY
// ==========================================================================

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

// 2. DARK / LIGHT CONSOLE THEME TOGGLE
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const rootEl = document.documentElement;

function toggleTheme() {
    const current = rootEl.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    rootEl.setAttribute('data-theme', next);
    if (themeIcon) {
        themeIcon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    showToast(`Switched to ${next === 'dark' ? 'Dark Telemetry' : 'Light Console'} mode`);
}

if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}

// 3. MOBILE MENU TOGGLE
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

// 4. COPY EMAIL ACTION
const copyEmailHero = document.getElementById('copyEmailHero');

function copyEmailToClipboard() {
    const email = 'faqihnafiddin12@gmail.com';
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            showToast(`Copied ${email} to clipboard!`);
        });
    } else {
        showToast(`Email: ${email}`);
    }
}

if (copyEmailHero) {
    copyEmailHero.addEventListener('click', copyEmailToClipboard);
}

// 5. INTERACTIVE MULTI-CLOUD TOPOLOGY SWITCHER (HERO WIDGET)
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

// 6. INTERACTIVE CI/CD ZERO-DOWNTIME ROLLOUT SIMULATOR (BENTO 1)
const triggerDeployBtn = document.getElementById('triggerDeployBtn');
const deployBtnText = document.getElementById('deployBtnText');
const deployLogText = document.getElementById('deployLogText');
const stageSteps = document.querySelectorAll('.stage-step');
let isSimulating = false;

const simLogs = [
    '1/5 [GITLAB-CI] Commit verified on main branch. Triggering build pipeline...',
    '2/5 [DOCKER] Building multi-stage image & pushing tag v2.4.1 to Docker Hub...',
    '3/5 [KEY-VAULT] Syncing production credentials via External Secrets Operator...',
    '4/5 [KUBERNETES] Performing zero-downtime rolling update across EKS, GKE & TKE...',
    '5/5 [PROMETHEUS] All readiness probes healthy (0 restarts). Deployment complete!'
];

function runDeploySimulation() {
    if (isSimulating) return;
    isSimulating = true;
    if (deployBtnText) deployBtnText.textContent = 'Deploying...';

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
            if (deployLogText) deployLogText.textContent = simLogs[stepIdx];
            stepIdx++;
            setTimeout(nextStep, 750);
        } else {
            isSimulating = false;
            if (deployBtnText) deployBtnText.textContent = 'Simulate Again';
            showToast('Zero-downtime Kubernetes rollout completed!');
        }
    }

    nextStep();
}

if (triggerDeployBtn) {
    triggerDeployBtn.addEventListener('click', runDeploySimulation);
}

// 7. TECHNICAL ARSENAL FILTER (BENTO 4)
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

// 8. EXPERIENCE TABS (IMPACTS VS INCIDENT RUNBOOKS)
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

// 9. PROJECT ARCHITECTURE BLUEPRINT DRAWER TOGGLE
const inspectBtns = document.querySelectorAll('.bp-inspect-btn');

inspectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        if (!drawer) return;

        const isOpen = drawer.classList.toggle('open');
        const span = btn.querySelector('span');
        if (span) {
            span.textContent = isOpen ? 'Hide Architecture' : 'Inspect Architecture';
        }
    });
});

// 10. COMMAND PALETTE (CTRL+K / CMD+K)
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
        } else if (action === 'copy-email') {
            copyEmailToClipboard();
        } else if (action === 'open-cv') {
            window.open('cv.html', '_blank');
        } else if (action === 'theme') {
            toggleTheme();
        }
    });
});

// 11. SCROLL REVEAL & ACTIVE NAV SPY
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

window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) {
            currentId = sec.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
    });
});
