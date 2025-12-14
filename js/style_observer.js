document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");
	const root = document.documentElement;
	const toggleBtn = document.getElementById("theme-toggle");
	
	// State variables
	let currentTheme = "dark"; // Default theme
	let currentSection = sections[0]; // Default to first section
  
	const options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.6
	};
  
	// Helper function to update the root variables based on theme and section
	const updateColors = (section) => {
	  if (!section) return;
  
	  const computedStyle = window.getComputedStyle(section);
	  
	  // Helper to get variable value safely
	  const getVar = (name) => {
		// Tries to get --light-black-1 or --dark-black-1
		const val = computedStyle.getPropertyValue(`--${currentTheme}-${name}`).trim();
		return val || computedStyle.getPropertyValue(`--dark-${name}`).trim(); // Fallback to dark if light is missing
	  };
  
	  // Update global properties using the prefix (dark or light)
	  // Note: This expects your CSS to have matching names like --light-black-1
	  root.style.setProperty('--color-bg-1', getVar('bg-1'));
	  root.style.setProperty('--color-bg-2', getVar('bg-2'));
	  root.style.setProperty('--color-white', getVar('text'));
	  
	  root.style.setProperty('--color-text-1', getVar('text-1'));
	  root.style.setProperty('--color-text-2', getVar('text-2'));
	  root.style.setProperty('--color-text-3', getVar('text-3'));
	  root.style.setProperty('--color-text-4', getVar('text-4'));
	  root.style.setProperty('--color-text-5', getVar('text-5'));
	  root.style.setProperty('--color-text-6', getVar('text-6'));
	  
	  root.style.setProperty('--color-hyperlink', getVar('hyperlink'));
	};
  
	// Intersection Observer Callback
	const callback = (entries) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  currentSection = entry.target;
		  updateColors(currentSection);
		}
	  });
	};
  
	// 1. Start Observer
	const observer = new IntersectionObserver(callback, options);
	sections.forEach(section => {
	  observer.observe(section);
	});
  
	// 2. Button Event Listener
	if (toggleBtn) {
	  toggleBtn.addEventListener('click', () => {
		// Toggle state
		currentTheme = currentTheme === "dark" ? "light" : "dark";
		
		// Update Button visual (optional, simple color flip)
		if(currentTheme === "light") {
			toggleBtn.style.backgroundColor = "#1c1d21"; // dark bg for button
			toggleBtn.style.color = "#ffffff";
		} else {
			toggleBtn.style.backgroundColor = "#ffffff"; // light bg for button
			toggleBtn.style.color = "#000000";
		}
  
		// Re-apply colors to current section
		updateColors(currentSection);
	  });
	}
  });