
// old
// Get modal elements
// const loginModal = document.getElementById('loginModal');
// const signupModal = document.getElementById('signupModal');

// Get buttons to open/close modals
// const loginBtn = document.getElementById('loginBtn');
// const closeLoginModal = document.getElementById('closeModal');
// const closeSignupModal = document.getElementById('closeSignupModal');
// const openSignupLink = document.getElementById('openSignup');
// const backToLoginLink = document.getElementById('backToLogin');

// Event to open login modal
// loginBtn.addEventListener('click', () => {
//   loginModal.style.display = 'block';
// });

// Event to close login modal
// closeLoginModal.addEventListener('click', () => {
//   loginModal.style.display = 'none';
// });// Select modal elements





// Event to close sign-up modal
// closeSignupModal.addEventListener('click', () => {
//   signupModal.style.display = 'none';
// });

// Event to switch from login to sign-up modal
// openSignupLink.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent default anchor behavior
//   loginModal.style.display = 'none';
//   signupModal.style.display = 'block';
// });

// Event to switch from sign-up to login modal
// backToLoginLink.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent default anchor behavior
//   signupModal.style.display = 'none';
//   loginModal.style.display = 'block';
// });

// Close modal when clicking outside of it
// window.addEventListener('click', (e) => {
//   if (e.target === loginModal) {
//     loginModal.style.display = 'none';
//   }
//   if (e.target === signupModal) {
//     signupModal.style.display = 'none';
//   }
// });




// new
// Get modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const openSignup = document.getElementById('openSignup');
const backToLogin = document.getElementById('backToLogin');

// Open login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close login modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Open sign-up modal from login modal
openSignup.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

// Close sign-up modal
closeSignupModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Go back to login modal from sign-up modal
 backToLogin.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    signupModal.style.display = 'none';
   loginModal.style.display = 'flex';
});

// Close modals when clicking outside of them
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});



// new
// Toggle menu visibility on small screens
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar ul');

    menuBtn.addEventListener('click', () => {
        // Toggle the active class to show or hide the menu
        navbar.classList.toggle('active');
    });
});

