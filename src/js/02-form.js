
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Formun mevcut durumunu geri yükle
const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedState.email) form.elements.email.value = savedState.email;
if (savedState.message) form.elements.message.value = savedState.message;

// input olayı ile her değişiklikte localStorage'a kaydet
form.addEventListener('input', () => {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const state = {
        email,
        message,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
});

// submit işlemi
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});
