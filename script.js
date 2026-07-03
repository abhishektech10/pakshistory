/* =========================================================
   PAKHI TEA & GOSSIP — ANIMATED EDITION LOGIC
   Storage keys: pakhi_theme, pakhi_story_lang, pakhi_new_stories
   ========================================================= */

/* ---------- Theme (dark/light) ---------- */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function applyTheme(theme){
  document.body.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  try{ localStorage.setItem("pakhi_theme", theme); }catch(err){ console.error(err); }
}
let savedTheme = "dark";
try{ savedTheme = localStorage.getItem("pakhi_theme") || "dark"; }catch(err){ console.error(err); }
applyTheme(savedTheme);
themeToggle.addEventListener("click", ()=>{
  const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ---------- Story language (EN / HI) ---------- */
const langPill = document.getElementById("langPill");
function applyStoryLang(lang){
  document.body.setAttribute("data-story-lang", lang);
  try{ localStorage.setItem("pakhi_story_lang", lang); }catch(err){ console.error(err); }
}
let savedLang = "en";
try{ savedLang = localStorage.getItem("pakhi_story_lang") || "en"; }catch(err){ console.error(err); }
applyStoryLang(savedLang);
langPill.addEventListener("click", ()=>{
  const current = document.body.getAttribute("data-story-lang") === "hi" ? "hi" : "en";
  applyStoryLang(current === "hi" ? "en" : "hi");
});

/* ---------- Mobile nav ---------- */
const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
navBurger.addEventListener("click", ()=>{
  const isOpen = navLinks.classList.toggle("open");
  navBurger.setAttribute("aria-expanded", String(isOpen));
});
function closeMobileNav(){
  navLinks.classList.remove("open");
  navBurger.setAttribute("aria-expanded", "false");
}

/* =========================================================
   ROUTER
   Hash patterns:
     #/                -> page-home
     #/story           -> page-story
     #/story/part-1..5 -> page-part-1..5
     #/new-story        -> page-new-story
     #/about             -> page-about
     #/contact           -> page-contact
   ========================================================= */
const VALID_ROUTES = ["home","story","story/part-1","story/part-2","story/part-3","story/part-4","story/part-5","new-story","about","contact"];

function routeToPageId(route){
  if(route === "home" || route === "") return "page-home";
  if(route === "story") return "page-story";
  const partMatch = route.match(/^story\/part-([1-5])$/);
  if(partMatch) return "page-part-" + partMatch[1];
  if(route === "new-story") return "page-new-story";
  if(route === "about") return "page-about";
  if(route === "contact") return "page-contact";
  return "page-home";
}

function currentRoute(){
  const hash = location.hash.replace(/^#\/?/, "");
  return VALID_ROUTES.includes(hash) ? hash : "home";
}

function renderRoute(){
  const route = currentRoute();
  const pageId = routeToPageId(route);

  document.querySelectorAll(".page").forEach(p=> p.classList.remove("active"));
  const target = document.getElementById(pageId);
  if(target) target.classList.add("active");

  // highlight nav (story + all part pages count as "Story")
  const navTarget = route.startsWith("story") ? "#/story" : "#/" + route;
  document.querySelectorAll(".nav-links a").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("href") === navTarget);
  });

  closeMobileNav();
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});

  if(target){
    observeReveals(target);
    animateHeroTitleIfHome(target);
  }

  updateProgressBarTarget(target && target.classList.contains("part-page") ? target.querySelector(".part-body") : null);

  if(pageId === "page-new-story"){
    renderPublishedStories();
  }
}

window.addEventListener("hashchange", renderRoute);

document.querySelectorAll("[data-route-link]").forEach(link=>{
  // Anchor tags already navigate via href="#/..."; hashchange listener handles rendering.
  // This just ensures the mobile menu closes immediately on click for a snappier feel.
  link.addEventListener("click", ()=> closeMobileNav());
});

/* ---------- Hero title staggered word reveal (Home page only, runs once) ---------- */
let heroAnimated = false;
function animateHeroTitleIfHome(target){
  if(target.id !== "page-home" || heroAnimated) return;
  heroAnimated = true;
  const h1 = document.getElementById("heroTitle");
  const text = h1.textContent;
  const words = text.split(" ");
  h1.innerHTML = words.map((w, i)=>
    `<span class="word-reveal" style="animation-delay:${(i*0.09).toFixed(2)}s">${w}</span>`
  ).join(" ");
}

/* ---------- Scroll reveal (per rendered page) ---------- */
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.12});
function observeReveals(root){
  root.querySelectorAll(".reveal:not(.visible)").forEach(el=> revealObserver.observe(el));
}

/* ---------- Reading progress bar (only meaningful on part pages) ---------- */
const progressFill = document.getElementById("progressFill");
let progressTargetEl = null;
function updateProgressBarTarget(el){
  progressTargetEl = el;
  updateProgressFill();
}
function updateProgressFill(){
  if(!progressTargetEl){ progressFill.style.width = "0%"; return; }
  const rect = progressTargetEl.getBoundingClientRect();
  const total = rect.height - window.innerHeight * 0.4;
  const scrolled = -rect.top;
  const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
  progressFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgressFill, {passive:true});

/* ---------- Ambient floating particles ---------- */
(function buildAmbientParticles(){
  const wrap = document.getElementById("ambient");
  const count = window.innerWidth < 600 ? 10 : 18;
  for(let i=0; i<count; i++){
    const span = document.createElement("span");
    const size = 4 + Math.random()*7;
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.left = Math.random()*100 + "%";
    span.style.animationDelay = (Math.random()*16) + "s";
    span.style.animationDuration = (12 + Math.random()*10) + "s";
    wrap.appendChild(span);
  }
})();

/* ---------- Cursor glow (desktop only) ---------- */
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", e=>{
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

/* ---------- Ripple effect on buttons ---------- */
document.addEventListener("click", e=>{
  const btn = e.target.closest(".btn");
  if(!btn || btn.disabled) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (e.clientX - rect.left - size/2) + "px";
  ripple.style.top = (e.clientY - rect.top - size/2) + "px";
  btn.appendChild(ripple);
  setTimeout(()=> ripple.remove(), 650);
});

/* ---------- New Story form ---------- */
function getPublishedStories(){
  try{
    return JSON.parse(localStorage.getItem("pakhi_new_stories") || "[]");
  }catch(err){
    console.error("Failed to read stories:", err);
    return [];
  }
}
function savePublishedStories(stories){
  try{
    localStorage.setItem("pakhi_new_stories", JSON.stringify(stories));
    return true;
  }catch(err){
    console.error("Failed to save story:", err);
    return false;
  }
}
function escapeHtml(str){
  return String(str || "").replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function renderPublishedStories(){
  const wrap = document.getElementById("publishedStories");
  const stories = getPublishedStories();
  if(!stories.length){
    wrap.innerHTML = `<p class="empty-note">No reader-submitted stories yet — be the first to share one above.</p>`;
    return;
  }
  wrap.innerHTML = stories.map((s, i) => `
    <article class="published-story card" style="animation-delay:${(i*0.06).toFixed(2)}s">
      <h4>${escapeHtml(s.title)}</h4>
      <p class="meta">By ${escapeHtml(s.author)} &middot; ${escapeHtml(s.date)}</p>
      <p>${escapeHtml(s.content)}</p>
    </article>
  `).join("");
}

const storyForm = document.getElementById("storyForm");
const formMessage = document.getElementById("formMessage");

storyForm.addEventListener("submit", e=>{
  e.preventDefault();
  const title = document.getElementById("fieldTitle").value.trim();
  const author = document.getElementById("fieldAuthor").value.trim();
  const content = document.getElementById("fieldContent").value.trim();

  if(!title || !author || !content){
    formMessage.textContent = "Please fill in every field before publishing.";
    return;
  }

  const stories = getPublishedStories();
  stories.unshift({
    id: "story-" + Date.now(),
    title, author, content,
    date: new Date().toISOString().slice(0,10)
  });

  const ok = savePublishedStories(stories);
  if(ok){
    formMessage.textContent = "Story published — see it below.";
    storyForm.reset();
    renderPublishedStories();
  } else {
    formMessage.textContent = "Couldn't publish — your browser storage is full.";
  }
});

document.getElementById("cancelStoryBtn").addEventListener("click", ()=>{
  storyForm.reset();
  formMessage.textContent = "";
});

/* ---------- Init ---------- */
document.getElementById("footerYear").textContent = new Date().getFullYear();
if(!location.hash) location.hash = "#/";
renderRoute();
