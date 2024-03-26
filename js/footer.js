const STORAGE_KEY = "feedback-form-footer";

const form = document.querySelector(".footer-form-btn");

form.addEventListener("input", () => {
    const userEmail = form.elements.email.value;
    
    const data = {
    email: userEmail,   
    };

  saveToLS(STORAGE_KEY, data);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // валідація поля email
  const userEmail = form.elements.email.value;
  
  if (userEmail.trim() === '') {
      // alert('введіть email.');
      Swal.fire({
        title: "Введіть email",
        // text: "Це може бути кращим варіантом для кастомізації і стилізації.",
        icon: "warning", // Може бути 'success', 'error', 'warning', 'info', тощо
        confirmButtonText: "ОК",
      });
    return;
  }
// ====================
  const data = loadFromLS(STORAGE_KEY) || {};
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function loadFromLS(key = "empty") {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || "";
}

restoreData();
