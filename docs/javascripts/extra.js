// Python Buddy - minor enhancements

// Add copy-friendly formatting to IO blocks
document.addEventListener("DOMContentLoaded", function () {
  // Nothing needed for now - placeholder for future interactivity
});

// Load GoatCounter asynchronously (Zero impact on page load speed)
var script = document.createElement('script');
script.dataset.goatcounter = 'https://python-oppe.goatcounter.com/count';
script.async = true;
script.src = '//gc.zgo.at/count.js';
document.head.appendChild(script);

// 2. Fetch JSON Count and Display at Bottom Right
/*
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://python-oppe.goatcounter.com/counter/TOTAL.json')
        .then(response => response.json())
        .then(data => {
            // Find the social icons container in the footer
            const socialContainer = document.querySelector('.md-footer-meta .md-social');
            
            if (socialContainer) {
                // Allow the container to wrap so the text drops to a new line
                socialContainer.style.flexWrap = 'wrap';
                socialContainer.style.justifyContent = 'flex-end';
                
                // Create the text element (No emoji)
                const viewStats = document.createElement('div');
                viewStats.innerText = data.count + " Views";
                
                // Style it to sit cleanly below the logos
                viewStats.style.width = '100%';
                viewStats.style.textAlign = 'right';
                viewStats.style.marginTop = '0px';
                viewStats.style.fontSize = '0.7rem';
                viewStats.style.opacity = '0.8';
                
                // Inject it
                socialContainer.appendChild(viewStats);
            }
        })
        .catch(err => console.log("Stats blocked by privacy setting."));
});
*/
