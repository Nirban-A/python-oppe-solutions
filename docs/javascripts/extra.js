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

// 2. Fetch JSON Count and Display as Text
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://python-oppe.goatcounter.com/counter/TOTAL.json')
        .then(response => response.json())
        .then(data => {
            const el = document.getElementById('gc-stats');
            if (el) el.innerText = "👀 " + data.count + " Views";
        })
        .catch(err => console.log("Stats blocked by privacy setting."));
});
