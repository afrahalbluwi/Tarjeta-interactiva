function updateCardNumber() {
    const input = document.getElementById("cardnumberinput").value;
    document.getElementById("displayCardNumber").textContent = input || "0000 0000 0000 0000";
  }
  
  function updateCardName() {
    const name = document.getElementById("cardnumberinfo1").value;
    document.getElementById("displayCardName").textContent = name || "Afrah ALBLUWI";
  }
  
  function updateCardDate() {
    const date = document.getElementById("expirydate").value;
    document.getElementById("displayCardDate").textContent = date || "00/00";
  }
  
  function updateCVV() {
    const cvv = document.getElementById("cvvinput").value;
    document.getElementById("displayCVV").textContent = cvv || "123";
  }
  
  document.getElementById("submitbutton").addEventListener("click", function (e) {
    e.preventDefault(); // يمنع الصفحة من التحديث
  
    // 1. نجيب الحقول
    const name = document.getElementById("cardnumberinfo1");
    const number = document.getElementById("cardnumberinput");
    const date = document.getElementById("expirydate");
    const cvv = document.getElementById("cvvinput");
  
    let isValid = true;
  
    // 2. تحقق من الاسم
    if (name.value.trim() === "") {
      name.style.border = "2px solid red";
      isValid = false;
    } else {
      name.style.border = "";
    }
  
    // 3. تحقق من رقم البطاقة (لازم 19 حرف مع الفراغات)
    if (number.value.trim().length < 19) {
      number.style.border = "2px solid red";
      isValid = false;
    } else {
      number.style.border = "";
    }
  
    // 4. تحقق من التاريخ (مثلاً MM/YY = 5 خانات)
    if (date.value.trim().length < 5) {
      date.style.border = "2px solid red";
      isValid = false;
    } else {
      date.style.border = "";
    }
  
    // 5. تحقق من CVV (3 أرقام)
    if (cvv.value.trim().length < 3) {
      cvv.style.border = "2px solid red";
      isValid = false;
    } else {
      cvv.style.border = "";
    }
  
    // 6. النتيجة النهائية
    if (!isValid) {
      alert("Please fill in all fields correctly.");
    } else {
      alert("Card submitted successfully!");
    }
  });
  