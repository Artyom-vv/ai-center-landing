export function scrollToSection(section: string) {
    const el = document.getElementById(section);
    el?.scrollIntoView({behavior: "smooth"});
}