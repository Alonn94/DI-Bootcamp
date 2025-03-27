const form=document.getElementById('loginform');
const username=document.getElementById('username');
const password=document.getElementById('password');


const button=document.getElementById('button');



button.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
    const response =await fetch("http://localhost:4010/login",{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username.value, password:password.value})
   });

    const data = await response.json();
    
    console.log(data)
    if (username.value.includes('HR')) {
        window.location.href = 'hrdashboard.html';
    }
    if (response.ok) {
        console.log("Login successful:",data);
        window.location.href = 'dashboard.html';
    } else {
        console.error("Login failed",data);
    }
} catch (error){
    console.error("Network error:" ,error);
}
});

