// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

// scroll section 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
            // active sections for animation on scroll
            sec.classList.add("show-animate")
        }

        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show-animate")
        }
    });

    // sticky header
    let header = document.querySelector("header")

    header.classList.toggle("sticky", window.scrollY > 100)

    // remove toggle icon and remove navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")

    // animation footer on scroll
    let footer = document.querySelector("footer");

    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
};

// download cv.pdf 

function downloadPDF() {
    // Replace 'your_pdf_url_here.pdf' with the actual URL of the PDF file you want to download
    var pdfUrl = 'cv-minarcik.pdf';

    // Create an invisible anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute with the desired file name
    link.download = 'minarcik_cv.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the body
    document.body.removeChild(link);
}