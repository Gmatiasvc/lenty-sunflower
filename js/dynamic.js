// Initialize Icons
lucide.createIcons();

// --- MENU LOGIC ---
const menuButton = document.getElementById('menu-button');
const menuPanel = document.getElementById('menu-panel');

menuButton.addEventListener('click', (e) => {
	e.stopPropagation();
	menuPanel.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
	if (!menuPanel.contains(event.target) && !menuButton.contains(event.target)) {
		menuPanel.classList.add('hidden');
	}
});

// --- THEME OBSERVER LOGIC (Core Feature) ---
document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");
	const root = document.documentElement;
	const toggleBtn = document.getElementById("theme-toggle");
	
	// State variables
	let currentTheme = "dark"; // Default theme
	let currentSection = sections[0]; // Default to first section
  
	const options = {
	  root: null,
	  rootMargin: "-20% 0px -20% 0px", // Trigger when section is mostly in view
	  threshold: 0.4
	};
  
	// Helper function to update the root variables based on theme and section
	const updateColors = (section) => {
	  if (!section) return;
  
	  const computedStyle = window.getComputedStyle(section);
	  
	  const getVar = (name) => {
		// Tries to get --light-bg-1 or --dark-bg-1 based on theme
		const val = computedStyle.getPropertyValue(`--${currentTheme}-${name}`).trim();
		return val || computedStyle.getPropertyValue(`--dark-${name}`).trim(); 
	  };
  
	  // Update global CSS variables
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
  
	const observer = new IntersectionObserver(callback, options);
	sections.forEach(section => {
	  observer.observe(section);
	});
  
	// Toggle Logic
	if (toggleBtn) {
	  toggleBtn.addEventListener('click', () => {
		currentTheme = currentTheme === "dark" ? "light" : "dark";
		
		// Visual toggle update
		if(currentTheme === "light") {
			// In light mode, button is dark
			toggleBtn.style.backgroundColor = "#1c1d21"; 
			toggleBtn.style.color = "#ffffff";
		} else {
			// In dark mode, button is light
			toggleBtn.style.backgroundColor = "#ffffff"; 
			toggleBtn.style.color = "#000000";
		}
  
		// Re-apply colors
		updateColors(currentSection);
	  });
	}
});