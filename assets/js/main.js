document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    document.addEventListener('click', function (event) {
        // Only run on screen widths below 992px (Bootstrap's lg breakpoint)
        if (window.innerWidth >= 992) return;

        // Check if navbar is open
        const isNavbarOpen = navbar.classList.contains('show');

        // If open and click is outside navbar and toggler, close it
        if (
            isNavbarOpen &&
            !navbar.contains(event.target) &&
            !toggler.contains(event.target)
        ) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbar);
            if (bsCollapse) {
                bsCollapse.hide();
            } else {
                new bootstrap.Collapse(navbar).hide();
            }
        }
    });
});
