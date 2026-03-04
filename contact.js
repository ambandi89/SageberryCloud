// ===========================
// CONTACT FORM — add to bottom of facts.js
// Replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE with your deployed Apps Script Web App URL
// ===========================

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRCeHxTxq3PgmguaLwuBMcTfUEEAdbO5XbGtKWh-6ixnYtsMQsbk0pB5GxesFqQWyGOA/exec';

document.getElementById('contactSubmitBtn').addEventListener('click', async function () {
    const btn = this;
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!fullName || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show loading state
    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    try {
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('message', message);

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // Clear form
            document.getElementById('fullName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            successMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'block';
        }
    } catch (err) {
        errorMsg.style.display = 'block';
    }

    // Reset button
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
});