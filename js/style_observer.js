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
		  const wh = computedStyle.getPropertyValue('--dark-white').trim();
		  const re = computedStyle.getPropertyValue('--dark-red').trim();
		  const or = computedStyle.getPropertyValue('--dark-orange').trim();
		  const ye = computedStyle.getPropertyValue('--dark-yellow').trim();
		  const bl = computedStyle.getPropertyValue('--dark-blue').trim();
		  const gr = computedStyle.getPropertyValue('--dark-green').trim();
		  const pu = computedStyle.getPropertyValue('--dark-purple').trim();
  
		  // 3. Update the "active" global variables on the :root
		  root.style.setProperty('--color-bg-1', bg1);
		  root.style.setProperty('--color-bg-2', bg2);

		  
		  root.style.setProperty('--color-white',wh);
		  root.style.setProperty('--color-red',re);
		  root.style.setProperty('--color-orange',or);
		  root.style.setProperty('--color-yellow',ye);
		  root.style.setProperty('--color-green',gr);
		  root.style.setProperty('--color-blue',bl);
		  root.style.setProperty('--color-purple',pu);
		}
	  });
	};
  
	// Create and start the observer
	const observer = new IntersectionObserver(callback, options);
	sections.forEach(section => {
	  observer.observe(section);
	});
  });