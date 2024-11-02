/* start code */
window.onload = function() {
  const sections = document.querySelectorAll("section");
  const navA = document.querySelectorAll(".navbar .menu-container12 a"); /* edited menu-container12 */

  function updateActiveSection() {
    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);

      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });

    navA.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(activeSection)) {
        a.classList.add("active");
      }
    });
  }

  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
  }

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
};
// Rest of the code