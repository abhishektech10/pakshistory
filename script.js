/* =========================================================
   PAKSHI TEA & GOSSIP — APP LOGIC
   Storage keys: pakshi_stories, pakshi_theme, pakshi_lang, pakshi_likes, pakshi_bookmarks
   ========================================================= */

/* ---------- Translations ---------- */
const I18N = {
  en:{
    nav_home:"Home", nav_stories:"Stories", nav_categories:"Categories", nav_gallery:"Gallery",
    nav_about:"About", nav_contact:"Contact",
    hero_eyebrow:"a warm cup, an honest story",
    hero_title:"Welcome to Pakshi Tea & Gossip ☕",
    hero_subtitle:"A place where memories, experiences, college life, mysteries, friendships and unforgettable moments are shared.",
    hero_btn_read:"📖 Read Stories", hero_btn_add:"➕ Add Story",
    stories_title:"Stories", search_placeholder:"Search by title, author, category or keyword",
    empty_stories:"No stories match your search yet. Try a different word or category.",
    categories_title:"Categories", categories_sub:"Pick a mood. Every category holds a different kind of memory.",
    gallery_title:"Gallery", gallery_sub:"Every cover and every part, side by side.",
    about_title:"About Pakshi",
    about_body:"Pakshi shares her personal experiences, memories, college life, friendships, emotional moments and mysterious incidents through stories. Every story is presented exactly as she remembers it, allowing readers to interpret events in their own way.",
    contact_title:"Contact", contact_sub:"Have a story of your own, or something to say about one of Pakshi's? Send a note.",
    contact_name:"Your name", contact_email:"Your email", contact_message:"Message", contact_send:"Send message",
    reader_back:"← Back to stories", reader_prev:"← Previous Part", reader_next:"Next Part →",
    bookmark_save:"Save", share:"Share",
    add_story:"Add Story",
    editor_title:"Write a new story", editor_story_title:"Story title", editor_author:"Author name",
    editor_category:"Category", editor_cover:"Cover image", editor_ai_image:"✨ Generate cover art",
    editor_description:"Short description", editor_add_part:"➕ Add New Part",
    editor_preview:"Preview Story", editor_draft:"Save Draft", editor_publish:"Publish Story",
    footer_made:"Made with ❤️", footer_lang:"Switch to हिन्दी", footer_theme:"Toggle dark mode",
    footer_rights:"All stories belong to their author.",
    continue_reading:"Continue Reading", read_min:"min read", part_of:"Part {n} of {total}",
    toast_published:"Story published.", toast_draft:"Draft saved.", toast_liked:"Added to likes.",
    toast_unliked:"Removed from likes.", toast_saved:"Saved to your bookmarks.", toast_unsaved:"Removed from bookmarks.",
    toast_link:"Link copied to clipboard.", toast_contact:"Message sent. Pakshi will read it soon.",
    toast_need_title:"Give your story a title before publishing.", toast_need_part:"Add at least one part with text.",
    part_label:"Part", remove_part:"Remove", part_content_ph:"Write this part of the story...",
  },
  hi:{
    nav_home:"होम", nav_stories:"कहानियाँ", nav_categories:"श्रेणियाँ", nav_gallery:"गैलरी",
    nav_about:"परिचय", nav_contact:"संपर्क",
    hero_eyebrow:"एक गरम कप, एक सच्ची कहानी",
    hero_title:"पाक्षी टी एंड गॉसिप में आपका स्वागत है ☕",
    hero_subtitle:"यहाँ यादें, अनुभव, कॉलेज जीवन, रहस्य, दोस्ती और अविस्मरणीय पल साझा किए जाते हैं।",
    hero_btn_read:"📖 कहानियाँ पढ़ें", hero_btn_add:"➕ कहानी जोड़ें",
    stories_title:"कहानियाँ", search_placeholder:"शीर्षक, लेखक, श्रेणी या शब्द से खोजें",
    empty_stories:"कोई कहानी नहीं मिली। कोई और शब्द या श्रेणी आज़माएँ।",
    categories_title:"श्रेणियाँ", categories_sub:"एक मूड चुनें। हर श्रेणी में अलग तरह की याद है।",
    gallery_title:"गैलरी", gallery_sub:"हर कवर और हर भाग, एक साथ।",
    about_title:"पाक्षी के बारे में",
    about_body:"पाक्षी अपने व्यक्तिगत अनुभव, यादें, कॉलेज जीवन, दोस्ती, भावनात्मक पल और रहस्यमय घटनाएँ कहानियों के ज़रिए साझा करती हैं। हर कहानी वैसी ही पेश की जाती है जैसी उन्हें याद है।",
    contact_title:"संपर्क करें", contact_sub:"आपकी कोई कहानी है, या किसी कहानी पर कुछ कहना है? संदेश भेजें।",
    contact_name:"आपका नाम", contact_email:"आपका ईमेल", contact_message:"संदेश", contact_send:"संदेश भेजें",
    reader_back:"← कहानियों पर वापस", reader_prev:"← पिछला भाग", reader_next:"अगला भाग →",
    bookmark_save:"सेव करें", share:"शेयर करें",
    add_story:"कहानी जोड़ें",
    editor_title:"नई कहानी लिखें", editor_story_title:"कहानी का शीर्षक", editor_author:"लेखक का नाम",
    editor_category:"श्रेणी", editor_cover:"कवर इमेज", editor_ai_image:"✨ कवर आर्ट बनाएँ",
    editor_description:"संक्षिप्त विवरण", editor_add_part:"➕ नया भाग जोड़ें",
    editor_preview:"पूर्वावलोकन", editor_draft:"ड्राफ्ट सेव करें", editor_publish:"प्रकाशित करें",
    footer_made:"❤️ के साथ बनाया गया", footer_lang:"Switch to English", footer_theme:"डार्क मोड बदलें",
    footer_rights:"सभी कहानियाँ उनके लेखक की हैं।",
    continue_reading:"आगे पढ़ें", read_min:"मिनट का पठन", part_of:"भाग {n} / {total}",
    toast_published:"कहानी प्रकाशित हुई।", toast_draft:"ड्राफ्ट सेव हुआ।", toast_liked:"पसंद में जोड़ा गया।",
    toast_unliked:"पसंद से हटाया गया।", toast_saved:"बुकमार्क में सेव हुआ।", toast_unsaved:"बुकमार्क से हटाया गया।",
    toast_link:"लिंक कॉपी हो गया।", toast_contact:"संदेश भेजा गया। पाक्षी जल्द पढ़ेंगी।",
    toast_need_title:"प्रकाशित करने से पहले शीर्षक दें।", toast_need_part:"कम से कम एक भाग लिखें।",
    part_label:"भाग", remove_part:"हटाएँ", part_content_ph:"कहानी का यह भाग लिखें...",
  }
};

const CATEGORIES = [
  {id:"college-life", en:"College Life", hi:"कॉलेज जीवन", icon:"🎓"},
  {id:"real-experiences", en:"Real Experiences", hi:"सच्चे अनुभव", icon:"📔"},
  {id:"friendship", en:"Friendship", hi:"दोस्ती", icon:"🤝"},
  {id:"mystery", en:"Mystery", hi:"रहस्य", icon:"🕯️"},
  {id:"emotional", en:"Emotional", hi:"भावनात्मक", icon:"💛"},
  {id:"travel", en:"Travel", hi:"यात्रा", icon:"🧳"},
  {id:"funny", en:"Funny", hi:"मज़ेदार", icon:"😄"},
  {id:"life-lessons", en:"Life Lessons", hi:"जीवन के सबक", icon:"🌱"},
];

/* Curated placeholder "cover art" pool. Swap generateCoverArt() for a real
   image-generation API call when one is wired up on the backend. */
const AI_IMAGE_POOL = [
  "https://picsum.photos/seed/pakshi-room1/900/600",
  "https://picsum.photos/seed/pakshi-study2/900/600",
  "https://picsum.photos/seed/pakshi-terrace3/900/600",
  "https://picsum.photos/seed/pakshi-night4/900/600",
  "https://picsum.photos/seed/pakshi-sunrise5/900/600",
  "https://picsum.photos/seed/pakshi-hostel6/900/600",
  "https://picsum.photos/seed/pakshi-rain7/900/600",
  "https://picsum.photos/seed/pakshi-lamp8/900/600",
  "https://picsum.photos/seed/pakshi-corridor9/900/600",
  "https://picsum.photos/seed/pakshi-window10/900/600",
];
function generateCoverArt(seedHint){
  const seed = (seedHint || "pakshi") + "-" + Math.floor(Math.random()*9999);
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/900/600`;
}

/* ---------- Seed stories (used only the first time, before any local data exists) ---------- */
function seedStories(){
  return [
    {
      id:"s1", title:"The Room on the Third Floor", author:"Pakshi", category:"mystery",
      date:"2025-11-02", description:"A new PG room, a strange lock, and a night none of us talk about anymore.",
      cover:AI_IMAGE_POOL[0], likes:12,
      parts:[
        {title:"Moving In", image:AI_IMAGE_POOL[0], text:"The landlord handed me a single key and said the second lock was 'just for show'. I should have asked why a show lock needed a real key."},
        {title:"The First Night", image:AI_IMAGE_POOL[1], text:"Around 1 a.m. the tube light in the corridor started flickering in a pattern too even to be a loose wire. I counted. Three blinks, a pause, three blinks."},
        {title:"What Radha Said", image:AI_IMAGE_POOL[2], text:"My neighbour Radha finally told me why the room had stayed empty for eight months. I wrote it down word for word before I let myself doubt it."},
        {title:"Morning After", image:AI_IMAGE_POOL[4], text:"By sunrise the corridor light worked fine, like nothing had happened. I still keep both locks turned."},
      ]
    },
    {
      id:"s2", title:"Three Rupees Short", author:"Pakshi", category:"friendship",
      date:"2025-09-14", description:"How a canteen bill turned two strangers into the kind of friends who show up at 2 a.m.",
      cover:AI_IMAGE_POOL[5], likes:27,
      parts:[
        {title:"The Bill", image:AI_IMAGE_POOL[5], text:"I was three rupees short at the canteen counter and a girl I had never spoken to just placed a coin on the tray without a word."},
        {title:"Return Favour", image:AI_IMAGE_POOL[6], text:"I found her a week later, out of data and panicking before a submission. My hotspot became the least I owed her."},
        {title:"Ten Years Later", image:AI_IMAGE_POOL[7], text:"We still send each other three rupees on UPI on the anniversary of that canteen bill, with no note needed."},
      ]
    },
    {
      id:"s3", title:"The Terrace Exams", author:"Pakshi", category:"funny",
      date:"2025-08-01", description:"Four of us, one terrace, zero preparation, and a plan that only made sense at midnight.",
      cover:AI_IMAGE_POOL[2], likes:19,
      parts:[
        {title:"The Plan", image:AI_IMAGE_POOL[2], text:"Someone suggested we would remember formulas better if we shouted them at the sky. Nobody disagreed, which tells you the state we were in."},
        {title:"The Neighbours", image:AI_IMAGE_POOL[8], text:"A voice from the next building asked us to either pass the exam or move cities. We chose to lower our volume, not our ambition."},
      ]
    },
    {
      id:"s4", title:"Letters I Never Sent", author:"Pakshi", category:"emotional",
      date:"2025-06-20", description:"A drawer full of half-written apologies and the one I finally posted.",
      cover:AI_IMAGE_POOL[9], likes:34,
      parts:[
        {title:"The Drawer", image:AI_IMAGE_POOL[9], text:"Every unsent letter had the same first line and a different reason for stopping there."},
        {title:"The One I Sent", image:AI_IMAGE_POOL[4], text:"I posted it without rereading it, because rereading was how the first nine had died in that drawer."},
        {title:"Her Reply", image:AI_IMAGE_POOL[3], text:"Two lines back, nothing more needed. Some apologies only need to arrive, not to be perfect."},
      ]
    },
  ];
}

/* ---------- State + storage helpers ---------- */
const store = {
  get stories(){ return JSON.parse(localStorage.getItem("pakshi_stories") || "null") || seedStories(); },
  set stories(v){ localStorage.setItem("pakshi_stories", JSON.stringify(v)); },
  get likes(){ return JSON.parse(localStorage.getItem("pakshi_likes") || "[]"); },
  set likes(v){ localStorage.setItem("pakshi_likes", JSON.stringify(v)); },
  get bookmarks(){ return JSON.parse(localStorage.getItem("pakshi_bookmarks") || "[]"); },
  set bookmarks(v){ localStorage.setItem("pakshi_bookmarks", JSON.stringify(v)); },
  get theme(){ return localStorage.getItem("pakshi_theme") || "light"; },
  set theme(v){ localStorage.setItem("pakshi_theme", v); },
  get lang(){ return localStorage.getItem("pakshi_lang") || "en"; },
  set lang(v){ localStorage.setItem("pakshi_lang", v); },
};
if(!localStorage.getItem("pakshi_stories")){ store.stories = seedStories(); }

let activeCategory = "all";
let searchTerm = "";
let currentStoryId = null;
let currentPartIndex = 0;
let editingPartsData = [];

/* ---------- i18n apply ---------- */
function t(key){ return (I18N[store.lang] && I18N[store.lang][key]) || I18N.en[key] || key; }
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{
    el.title = t(el.getAttribute("data-i18n-title"));
  });
  document.getElementById("langLabel").textContent = store.lang.toUpperCase();
  document.body.setAttribute("data-lang", store.lang);
  renderAll();
}

/* ---------- Theme ---------- */
function applyTheme(){
  document.body.setAttribute("data-theme", store.theme);
  document.getElementById("themeIcon").textContent = store.theme === "dark" ? "☀️" : "🌙";
}
function toggleTheme(){ store.theme = store.theme === "dark" ? "light" : "dark"; applyTheme(); }

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2600);
}

/* ---------- Navigation / routing ---------- */
function navigate(page){
  document.querySelectorAll(".page-section").forEach(s=> s.classList.remove("active"));
  const target = document.getElementById("page-" + page);
  if(target) target.classList.add("active");
  document.querySelectorAll(".nav-links button").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-nav") === page);
  });
  document.getElementById("navLinks").classList.remove("open");
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  if(page === "stories") renderStories();
  if(page === "categories") renderCategories();
  if(page === "gallery") renderGallery();
}
document.querySelectorAll("[data-nav]").forEach(el=>{
  el.addEventListener("click", ()=> navigate(el.getAttribute("data-nav")));
});

/* ---------- Category label helper ---------- */
function categoryLabel(id){
  const c = CATEGORIES.find(c=>c.id===id);
  if(!c) return id;
  return store.lang === "hi" ? c.hi : c.en;
}
function readingTime(story){
  const words = story.parts.reduce((sum,p)=> sum + (p.text || "").split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 180));
}

/* ---------- Render: category chips + grid ---------- */
function renderCategoryChips(){
  const wrap = document.getElementById("categoryChips");
  wrap.innerHTML = "";
  const allChip = document.createElement("button");
  allChip.className = "chip" + (activeCategory==="all" ? " active" : "");
  allChip.textContent = store.lang==="hi" ? "सभी" : "All";
  allChip.onclick = ()=>{ activeCategory="all"; renderStories(); };
  wrap.appendChild(allChip);
  CATEGORIES.forEach(c=>{
    const chip = document.createElement("button");
    chip.className = "chip" + (activeCategory===c.id ? " active" : "");
    chip.textContent = (store.lang==="hi" ? c.hi : c.en);
    chip.onclick = ()=>{ activeCategory = c.id; renderStories(); };
    wrap.appendChild(chip);
  });
}

function renderStories(){
  renderCategoryChips();
  const grid = document.getElementById("storyGrid");
  const empty = document.getElementById("storyEmpty");
  const stories = store.stories.filter(s=>{
    const matchesCat = activeCategory === "all" || s.category === activeCategory;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term || [s.title, s.author, categoryLabel(s.category), s.description].join(" ").toLowerCase().includes(term);
    return matchesCat && matchesSearch;
  });
  grid.innerHTML = "";
  empty.hidden = stories.length > 0;
  stories.forEach(s=>{
    const card = document.createElement("article");
    card.className = "story-card";
    card.innerHTML = `
      <img class="story-card-img" src="${s.cover}" alt="${escapeHtml(s.title)} cover" loading="lazy">
      <div class="story-card-body">
        <span class="badge">${escapeHtml(categoryLabel(s.category))}</span>
        <h3>${escapeHtml(s.title)}</h3>
        <div class="story-card-meta">
          <span>${escapeHtml(s.author)}</span><span>&middot;</span><span>${readingTime(s)} ${t("read_min")}</span>
        </div>
        <p class="story-card-desc">${escapeHtml(s.description)}</p>
        <button class="btn btn-primary" data-open="${s.id}">${t("continue_reading")}</button>
      </div>`;
    card.querySelector("[data-open]").addEventListener("click", ()=> openStory(s.id));
    grid.appendChild(card);
  });
}

function renderCategories(){
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";
  CATEGORIES.forEach(c=>{
    const count = store.stories.filter(s=>s.category===c.id).length;
    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML = `<span class="cat-icon">${c.icon}</span><h3>${store.lang==="hi"?c.hi:c.en}</h3><span>${count} ${store.lang==="hi"?"कहानियाँ":"stories"}</span>`;
    card.onclick = ()=>{ activeCategory = c.id; navigate("stories"); };
    grid.appendChild(card);
  });
}

function renderGallery(){
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  store.stories.forEach(s=>{
    s.parts.forEach((p, idx)=>{
      if(!p.image) return;
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `<img src="${p.image}" alt="${escapeHtml(s.title)} part ${idx+1}" loading="lazy"><div class="gallery-caption">${escapeHtml(s.title)} · ${t("part_label")} ${idx+1}</div>`;
      item.onclick = ()=> openImage(p.image);
      grid.appendChild(item);
    });
  });
}

function openImage(src){
  document.getElementById("fullscreenImage").src = src;
  document.getElementById("imageOverlay").hidden = false;
}
document.getElementById("imageClose").onclick = ()=> document.getElementById("imageOverlay").hidden = true;
document.getElementById("imageOverlay").addEventListener("click", e=>{
  if(e.target.id === "imageOverlay") e.currentTarget.hidden = true;
});

function escapeHtml(str){
  return String(str || "").replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

/* ---------- Story reader ---------- */
function openStory(id){
  currentStoryId = id;
  currentPartIndex = 0;
  navigate("reader");
  renderReader();
}
function renderReader(){
  const story = store.stories.find(s=>s.id === currentStoryId);
  if(!story) return;
  document.getElementById("readerCover").src = story.cover;
  document.getElementById("readerCover").alt = story.title;
  document.getElementById("readerCategory").textContent = categoryLabel(story.category);
  document.getElementById("readerTitle").textContent = story.title;
  document.getElementById("readerAuthor").textContent = story.author;
  document.getElementById("readerDate").textContent = story.date;
  document.getElementById("readerTime").textContent = readingTime(story) + " " + t("read_min");
  document.getElementById("readerDescription").textContent = story.description;

  const likes = store.likes;
  const liked = likes.includes(story.id);
  document.getElementById("likeBtn").classList.toggle("active", liked);
  document.getElementById("likeBtn").innerHTML = (liked ? "❤️ " : "🤍 ") + `<span id="likeCount">${story.likes + (liked?1:0)}</span>`;

  const bookmarked = store.bookmarks.includes(story.id);
  document.getElementById("bookmarkBtn").classList.toggle("active", bookmarked);
  document.getElementById("bookmarkLabel").textContent = bookmarked ? (store.lang==="hi"?"सेव किया":"Saved") : t("bookmark_save");

  renderPart();
}
function renderPart(){
  const story = store.stories.find(s=>s.id === currentStoryId);
  const part = story.parts[currentPartIndex];
  document.getElementById("partIndicator").textContent = t("part_of").replace("{n}", currentPartIndex+1).replace("{total}", story.parts.length) + (part.title ? " — " + part.title : "");
  document.getElementById("partImage").src = part.image || story.cover;
  document.getElementById("partImage").alt = part.title || story.title;
  document.getElementById("partText").textContent = part.text || "";
  document.getElementById("prevPartBtn").disabled = currentPartIndex === 0;
  document.getElementById("nextPartBtn").textContent = currentPartIndex === story.parts.length - 1
    ? (store.lang==="hi" ? "समाप्त ✓" : "Finished ✓")
    : t("reader_next");
  const pct = ((currentPartIndex + 1) / story.parts.length) * 100;
  document.getElementById("readerProgress").style.width = pct + "%";
  window.scrollTo({top:0, behavior:"smooth"});
}
document.getElementById("prevPartBtn").onclick = ()=>{
  if(currentPartIndex > 0){ currentPartIndex--; renderPart(); }
};
document.getElementById("nextPartBtn").onclick = ()=>{
  const story = store.stories.find(s=>s.id === currentStoryId);
  if(currentPartIndex < story.parts.length - 1){ currentPartIndex++; renderPart(); }
};
document.getElementById("readerBack").onclick = ()=> navigate("stories");

document.getElementById("likeBtn").onclick = ()=>{
  const story = store.stories.find(s=>s.id === currentStoryId);
  let likes = store.likes;
  if(likes.includes(story.id)){
    likes = likes.filter(id=>id!==story.id);
    toast(t("toast_unliked"));
  } else {
    likes.push(story.id);
    toast(t("toast_liked"));
  }
  store.likes = likes;
  renderReader();
};
document.getElementById("bookmarkBtn").onclick = ()=>{
  const story = store.stories.find(s=>s.id === currentStoryId);
  let bm = store.bookmarks;
  if(bm.includes(story.id)){
    bm = bm.filter(id=>id!==story.id);
    toast(t("toast_unsaved"));
  } else {
    bm.push(story.id);
    toast(t("toast_saved"));
  }
  store.bookmarks = bm;
  renderReader();
};
document.getElementById("shareBtn").onclick = async ()=>{
  const story = store.stories.find(s=>s.id === currentStoryId);
  const url = location.href.split("#")[0] + "#story=" + story.id;
  try{
    await navigator.clipboard.writeText(url);
    toast(t("toast_link"));
  }catch{
    toast(url);
  }
};

/* ---------- Add / edit story modal ---------- */
const editorOverlay = document.getElementById("editorOverlay");
function openEditor(){
  document.getElementById("fieldTitle").value = "";
  document.getElementById("fieldAuthor").value = "Pakshi";
  document.getElementById("fieldDescription").value = "";
  document.getElementById("fieldCoverUpload").value = "";
  populateCategorySelect();
  editingPartsData = [{title:"", image:"", text:""}];
  renderPartsEditor();
  editorOverlay.hidden = false;
}
function populateCategorySelect(){
  const sel = document.getElementById("fieldCategory");
  sel.innerHTML = "";
  CATEGORIES.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = store.lang==="hi" ? c.hi : c.en;
    sel.appendChild(opt);
  });
}
document.getElementById("editorClose").onclick = ()=> editorOverlay.hidden = true;
editorOverlay.addEventListener("click", e=>{ if(e.target === editorOverlay) editorOverlay.hidden = true; });
document.getElementById("fabAddStory").onclick = openEditor;
document.getElementById("heroAddStory").onclick = openEditor;

let coverDataUrl = "";
document.getElementById("fieldCoverUpload").addEventListener("change", e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ coverDataUrl = reader.result; };
  reader.readAsDataURL(file);
});
document.getElementById("fieldCoverAI").onclick = ()=>{
  coverDataUrl = generateCoverArt(document.getElementById("fieldTitle").value);
  toast(store.lang==="hi" ? "कवर आर्ट तैयार है।" : "Cover art generated.");
};

function renderPartsEditor(){
  const wrap = document.getElementById("partsEditor");
  wrap.innerHTML = "";
  editingPartsData.forEach((part, idx)=>{
    const block = document.createElement("div");
    block.className = "part-block";
    block.innerHTML = `
      <h4>${t("part_label")} ${idx+1}</h4>
      ${editingPartsData.length > 1 ? `<button type="button" class="part-remove" data-idx="${idx}">✕ ${t("remove_part")}</button>` : ""}
      <input type="text" data-field="title" data-idx="${idx}" placeholder="${store.lang==='hi'?'भाग का शीर्षक (वैकल्पिक)':'Part title (optional)'}" value="${escapeHtml(part.title)}" style="width:100%; margin-bottom:10px; padding:10px 12px; border-radius:10px; border:1px solid var(--peach-line); background:var(--paper); color:var(--ink);">
      <div class="part-image-row">
        <button type="button" class="btn btn-outline btn-sm gen-part-img" data-idx="${idx}">✨ ${store.lang==='hi'?'इमेज बनाएँ':'Generate image'}</button>
        <input type="file" accept="image/*" data-imgupload="${idx}">
        ${part.image ? `<img src="${part.image}" alt="" style="width:60px;height:44px;object-fit:cover;border-radius:8px;">` : ""}
      </div>
      <textarea rows="4" data-field="text" data-idx="${idx}" placeholder="${t('part_content_ph')}">${escapeHtml(part.text)}</textarea>
    `;
    wrap.appendChild(block);
  });

  wrap.querySelectorAll("[data-field]").forEach(el=>{
    el.addEventListener("input", ()=>{
      const idx = +el.getAttribute("data-idx");
      editingPartsData[idx][el.getAttribute("data-field")] = el.value;
    });
  });
  wrap.querySelectorAll(".part-remove").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      editingPartsData.splice(+btn.getAttribute("data-idx"), 1);
      renderPartsEditor();
    });
  });
  wrap.querySelectorAll(".gen-part-img").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const idx = +btn.getAttribute("data-idx");
      editingPartsData[idx].image = generateCoverArt("part" + idx);
      renderPartsEditor();
    });
  });
  wrap.querySelectorAll("[data-imgupload]").forEach(input=>{
    input.addEventListener("change", e=>{
      const idx = +input.getAttribute("data-imgupload");
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{ editingPartsData[idx].image = reader.result; renderPartsEditor(); };
      reader.readAsDataURL(file);
    });
  });
}
document.getElementById("addPartBtn").onclick = ()=>{
  editingPartsData.push({title:"", image:"", text:""});
  renderPartsEditor();
};

function buildStoryFromEditor(){
  const title = document.getElementById("fieldTitle").value.trim();
  const author = document.getElementById("fieldAuthor").value.trim() || "Pakshi";
  const category = document.getElementById("fieldCategory").value;
  const description = document.getElementById("fieldDescription").value.trim();
  const validParts = editingPartsData.filter(p=> p.text && p.text.trim());
  return {title, author, category, description, validParts};
}

document.getElementById("previewStoryBtn").onclick = ()=>{
  const {title, author, category, description, validParts} = buildStoryFromEditor();
  if(!title){ toast(t("toast_need_title")); return; }
  if(!validParts.length){ toast(t("toast_need_part")); return; }
  const previewStory = {
    id:"preview", title, author, category, description,
    date:new Date().toISOString().slice(0,10),
    cover: coverDataUrl || generateCoverArt(title),
    likes:0, parts: validParts.map(p=>({title:p.title, image: p.image || coverDataUrl || generateCoverArt(title), text:p.text}))
  };
  const stories = store.stories;
  const existingIdx = stories.findIndex(s=>s.id==="preview");
  if(existingIdx>=0) stories[existingIdx] = previewStory; else stories.push(previewStory);
  store.stories = stories;
  editorOverlay.hidden = true;
  openStory("preview");
};

document.getElementById("saveDraftBtn").onclick = ()=>{
  const {title, author, category, description, validParts} = buildStoryFromEditor();
  if(!title){ toast(t("toast_need_title")); return; }
  const draft = {
    id:"draft-" + Date.now(), title, author, category, description,
    date:new Date().toISOString().slice(0,10),
    cover: coverDataUrl || generateCoverArt(title), likes:0,
    parts: (validParts.length?validParts:editingPartsData).map(p=>({title:p.title, image:p.image || "", text:p.text || ""})),
    draft:true
  };
  const stories = store.stories;
  stories.push(draft);
  store.stories = stories;
  toast(t("toast_draft"));
  editorOverlay.hidden = true;
};

document.getElementById("publishBtn").onclick = ()=>{
  const {title, author, category, description, validParts} = buildStoryFromEditor();
  if(!title){ toast(t("toast_need_title")); return; }
  if(!validParts.length){ toast(t("toast_need_part")); return; }
  const cover = coverDataUrl || generateCoverArt(title);
  const newStory = {
    id:"story-" + Date.now(), title, author, category, description,
    date:new Date().toISOString().slice(0,10), cover, likes:0,
    parts: validParts.map(p=>({title:p.title, image: p.image || cover, text:p.text}))
  };
  const stories = store.stories.filter(s=>s.id!=="preview");
  stories.unshift(newStory);
  store.stories = stories;
  coverDataUrl = "";
  editorOverlay.hidden = true;
  toast(t("toast_published"));
  navigate("stories");
};

/* ---------- Search ---------- */
document.getElementById("searchInput").addEventListener("input", e=>{
  searchTerm = e.target.value;
  renderStories();
});

/* ---------- Contact form ---------- */
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  toast(t("toast_contact"));
  e.target.reset();
});

/* ---------- Theme / language toggles ---------- */
document.getElementById("themeToggle").onclick = toggleTheme;
document.getElementById("footerTheme").onclick = toggleTheme;
document.getElementById("langToggle").onclick = ()=>{ store.lang = store.lang === "en" ? "hi" : "en"; applyI18n(); };
document.getElementById("footerLang").onclick = ()=>{ store.lang = store.lang === "en" ? "hi" : "en"; applyI18n(); };

/* ---------- Mobile nav ---------- */
document.getElementById("hamburger").onclick = ()=>{
  document.getElementById("navLinks").classList.toggle("open");
};

/* ---------- Scroll indicator ---------- */
document.getElementById("scrollIndicator").onclick = ()=> navigate("stories");

/* ---------- Init ---------- */
function renderAll(){
  renderStories();
  renderCategories();
  renderGallery();
}
document.getElementById("footerYear").textContent = new Date().getFullYear();
applyTheme();
applyI18n();
navigate("home");