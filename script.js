// Scroll animations
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add("show")}
    })
});
document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Cursor glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Listen button smooth scroll
document.querySelector('.btn-primary')?.addEventListener('click', e=>{
    e.preventDefault();
    const beatsSection = document.querySelector('.beats');
    beatsSection.scrollIntoView({behavior:'smooth'});
});