// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="architecture.html"><strong aria-hidden="true">2.</strong> Architecture</a></li><li class="chapter-item expanded "><a href="design.html"><strong aria-hidden="true">3.</strong> Design</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="design/multi-tenant.html"><strong aria-hidden="true">3.1.</strong> Multi-Tenant</a></li><li class="chapter-item expanded "><a href="design/reference_table.html"><strong aria-hidden="true">3.2.</strong> Reference Table</a></li><li class="chapter-item expanded "><a href="design/authentication-authorization.html"><strong aria-hidden="true">3.3.</strong> Authentication Authorization</a></li><li class="chapter-item expanded "><a href="design/fine-grained-authorization.html"><strong aria-hidden="true">3.4.</strong> Fine-Grained Authorization</a></li><li class="chapter-item expanded "><a href="design/json-schema-registry.html"><strong aria-hidden="true">3.5.</strong> JSON Schema Registry</a></li><li class="chapter-item expanded "><a href="design/light-controller.html"><strong aria-hidden="true">3.6.</strong> Light Controller</a></li><li class="chapter-item expanded "><a href="design/yaml-rule-registry.html"><strong aria-hidden="true">3.7.</strong> YAML Rule Registry</a></li><li class="chapter-item expanded "><a href="design/react-schema-form.html"><strong aria-hidden="true">3.8.</strong> React Schema Form</a></li><li class="chapter-item expanded "><a href="design/user-management.html"><strong aria-hidden="true">3.9.</strong> User Management</a></li></ol></li><li class="chapter-item expanded "><a href="implementation.html"><strong aria-hidden="true">4.</strong> Implementation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="implementation/signin.html"><strong aria-hidden="true">4.1.</strong> Sign In</a></li></ol></li><li class="chapter-item expanded "><a href="configuration.html"><strong aria-hidden="true">5.</strong> Configuration</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="config/light-gateway.html"><strong aria-hidden="true">5.1.</strong> light-gateway</a></li><li class="chapter-item expanded "><a href="config/light-reference.html"><strong aria-hidden="true">5.2.</strong> light-reference</a></li></ol></li><li class="chapter-item expanded "><a href="license.html"><strong aria-hidden="true">6.</strong> License</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="license/bronze.html"><strong aria-hidden="true">6.1.</strong> Bronze</a></li><li class="chapter-item expanded "><a href="license/silver.html"><strong aria-hidden="true">6.2.</strong> Silver</a></li><li class="chapter-item expanded "><a href="license/gold.html"><strong aria-hidden="true">6.3.</strong> Gold</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_1.html"><strong aria-hidden="true">7.</strong> Chapter 1</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
