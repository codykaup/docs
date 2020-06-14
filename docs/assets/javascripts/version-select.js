window.addEventListener("DOMContentLoaded", function() {
    var VERSION = window.location.pathname.split('/')[1];
    var VERSION_LATEST = ".";

    function makeSelect(options, selected) {
        var select = document.createElement("select");
        select.classList.add("form-control");
  
        options.forEach(function(i) {
            var option = new Option(i.text, "/" + i.value, undefined,
                                    i.value === selected);
            select.add(option);
        });
  
        return select;
    }
  
    var xhr = new XMLHttpRequest();
    // Obtain JSON listing all available versions
    xhr.open("GET", window.location.origin + "/versions.json");
    xhr.onload = function() {
        var versions = JSON.parse(this.responseText);
  
        // Identify which is the current version
        var currentVersion = versions.find(function(i) {
            return i.version === VERSION ||
                   i.aliases.includes(VERSION)
        });

        if(!currentVersion) {
            // If VERSION was not found in the parsed JSON,
            // it means that the version is the latest
            currentVersion = versions.find(function(i) {
                return i.version === VERSION_LATEST;
            });
        }

        // Build the HTML select element
        var select = makeSelect(versions.map(function(i) {
            return {text: i.title, value: i.version};
        }), currentVersion.version);
  
        // Navigate to the selected version
        select.addEventListener("change", function(event) {
            window.location.href = window.location.origin + this.value;
        });
  
        // Place the HTML select element in the DOM
        var container = document.createElement("div");
        container.id = "version-selector";
        container.className = "md-nav__item";
        container.appendChild(select);
  
        var sidebar = document.querySelector(".md-nav--primary > .md-nav__list");
        sidebar.parentNode.insertBefore(container, sidebar);
    };
    xhr.send();
});
