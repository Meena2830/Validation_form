document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();  
  
    
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  
    const phonePattern = /^\d{10}$/;
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    const successMessage = document.getElementById('successMessage');
    
  
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const phoneError = document.getElementById('phoneError');
    
    let valid = true;
    
    if (!namePattern.test(name)) {
      nameError.textContent = 'Please enter a valid name';
      nameError.style.display = 'block';
      valid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email';
      emailError.style.display = 'block';
      valid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    
    if (!passwordPattern.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long with one number';
      passwordError.style.display = 'block';
      valid = false;
    } else {
      passwordError.style.display = 'none';
    }
  
    
    if (!phonePattern.test(phone)) {
      phoneError.textContent = 'Please enter a valid 10-digit phone number';
      phoneError.style.display = 'block';
      valid = false;
    } else {
      phoneError.style.display = 'none';
    }
  
    
  
  if (valid) {
    successMessage.innerText = 'Registration Successful!';
    successMessage.style.display = 'block';  
    successMessage.style.color = 'green';    
  } else {
    successMessage.style.display = 'none';   
  }

  

  });
  
  const toggleButton = document.getElementById('mode-toggle');
  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  