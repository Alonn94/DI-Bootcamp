    const form = document.getElementById('registerForm');
    const submitBtn = document.getElementById('submitBtn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');


    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.value, password: password.value })
      });
      alert(await res.text());
    });


    