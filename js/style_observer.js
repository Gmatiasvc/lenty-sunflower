document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");
	const root = document.documentElement; 
  
	const options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.6 
	};
  
	const callback = (entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  
		  // 1. Get the computed style of the section in view
		  const computedStyle = window.getComputedStyle(entry.target);
  
		  // 2. Read the "source" variables from that section's CSS
		  const bg1 = computedStyle.getPropertyValue('--dark-black-1').trim();
		  const bg2 = computedStyle.getPropertyValue('--dark-black-2').trim();
		  const whi = computedStyle.getPropertyValue('--dark-white').trim();
		  const co1 = computedStyle.getPropertyValue('--dark-text-1').trim();
		  const co2 = computedStyle.getPropertyValue('--dark-text-2').trim();
		  const co3 = computedStyle.getPropertyValue('--dark-text-3').trim();
		  const co4 = computedStyle.getPropertyValue('--dark-text-4').trim();
		  const co5 = computedStyle.getPropertyValue('--dark-text-5').trim();
		  const co6 = computedStyle.getPropertyValue('--dark-text-6').trim();
		  const hyp = computedStyle.getPropertyValue('--dark-hyperlink').trim();
		  // 3. Update the "active" global variables on the :root
		  root.style.setProperty('--color-bg-1', bg1);
		  root.style.setProperty('--color-bg-2', bg2);

		  
		  root.style.setProperty('--color-white', whi);
		  root.style.setProperty('--color-text-1',co1);
		  root.style.setProperty('--color-text-2',co2);
		  root.style.setProperty('--color-text-3',co3);
		  root.style.setProperty('--color-text-4',co4);
		  root.style.setProperty('--color-text-5',co5);
		  root.style.setProperty('--color-text-6',co6);

		  root.style.setProperty('--color-hyperlink',hyp);
		}
	  });
	};
  
	// Create and start the observer
	const observer = new IntersectionObserver(callback, options);
	sections.forEach(section => {
	  observer.observe(section);
	});
  });