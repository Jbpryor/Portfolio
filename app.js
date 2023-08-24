const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', (event) => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            let clickedBtn = event.target;
            clickedBtn.className += ' active-btn';
        })
    }

    // Sections Active
    allSections.addEventListener('click', (e) => {
       const id = e.target.dataset.id;
       if(id){
        // remove selected from the other btns
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // hide other sections
        sections.forEach((section) => {
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
       }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('dark-mode')
    })
}

PageTransitions();

// Select the span and image elements
const nameText = document.querySelector('.right-header .name span');
const heroImage = document.querySelector('.left-header .image img');
const rightHeader = document.querySelector('.right-header');

// Function to apply CSS changes to the image
const applyImageHover = () => {
    heroImage.style.opacity = '1';
    heroImage.style.filter = 'grayscale(0)';
    heroImage.style.animation = 'resetGreyscale 5s ease-in-out 3s forwards';
};

// Function to revert the CSS changes on the image
const revertImageHover = () => {
    heroImage.style.opacity = '0';
    heroImage.style.filter = 'grayscale(100%)';
    heroImage.style.animation = '';
};

const applyHeaderPadding = () => {
    rightHeader.style.paddingRight = '18rem';
    rightHeader.style.paddingLeft = '0';
}

// Add event listeners to both the span and image elements
nameText.addEventListener('mouseenter', applyImageHover);
nameText.addEventListener('mouseenter', applyHeaderPadding);
nameText.addEventListener('mouseleave', revertImageHover);
heroImage.addEventListener('mouseenter', applyImageHover);
heroImage.addEventListener('mouseleave', revertImageHover);

// Email
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_husq3kf";
    const templateID = "template_q7yi1ac"

    emailjs
    .send(serviceID, templateID, params)
    .then(res => {
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("subject").value = "",
            document.getElementById("message").value = "",
            console.log(res);
            alert("Message Sent")
        })
        .catch((err) => console.log(err));
}
document.getElementById("submitBtn").addEventListener("click", () => {
    sendEmail();
});


// Function for Full Screen Certificates

function openFullScreenCertificate(event) {
    const clickedCertificate = event.target;

    const fullScreenDiv = document.createElement('div')
    fullScreenDiv.classList.add('full-screen-certificate');

    const fullScreenCertificate = new Image();
    fullScreenCertificate.src = clickedCertificate.src;
    fullScreenCertificate.classList.add('full-screen-image');

    fullScreenDiv.appendChild(fullScreenCertificate);

    document.body.appendChild(fullScreenDiv);

    fullScreenDiv.addEventListener('click', () => {
        fullScreenDiv.remove();
    });
}

const   fullScreenCertificates = document.querySelectorAll('.certificate img'),
        fullScreenCertificatesText = document.querySelectorAll('.certificate-text');

fullScreenCertificates.forEach(certificate => {
    certificate.addEventListener('click', openFullScreenCertificate);
});

fullScreenCertificatesText.forEach(certificate => {
    certificate.addEventListener('click', event => {
        const   clickedText = event.currentTarget,
                container = clickedText.closest('.certificate'),
                certificateImg = container.querySelector('img');

        openFullScreenCertificate({ target: certificateImg });
    });
});