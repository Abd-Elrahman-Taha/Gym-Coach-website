  let trainees = []; // مصفوفة تخزن كل المتدربين

  // حفظ البيانات
  document.getElementById("traineeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // جلب القيم من الفورم
    let name = document.getElementById("traineeName").value; // الاسم الثلاثي
    let whatsapp = document.getElementById("traineeWhatsapp").value; // رقم الواتس
    let packageType = document.getElementById("traineePackage").value; // الباقة
    let weight = document.getElementById("traineeWeight").value; // الوزن الحالي
    let trainingDays = document.getElementById("traineeDays").value; // عدد الأيام

    // تخزين البيانات في المصفوفة
    trainees.push({
      name,
      whatsapp,
      packageType,
      weight,
      trainingDays
    });

    alert("✅ تم حفظ بيانات المتدرب");

    // تصفير الفورم
    this.reset();
  });

  // زر عرض البيانات
  document.getElementById("showBtn").addEventListener("click", function() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    if (trainees.length === 0) {
      output.innerHTML = `<p class="text-center text-muted">مفيش بيانات متسجلة</p>`;
      return;
    }

    // عرض كل المتدربين
    trainees.forEach((t, i) => {
      output.innerHTML += `
        <div class="card p-3 mb-3">
          <h5 class="card-title">${t.name}</h5>
          <p><strong>📱 رقم الواتس:</strong> ${t.whatsapp}</p>
          <p><strong>📦 الباقة:</strong> ${t.packageType}</p>
          <p><strong>⚖️ الوزن الحالي:</strong> ${t.weight} كجم</p>
          <p><strong>🏋️‍♂️ عدد أيام التدريب (آخر أسبوعين):</strong> ${t.trainingDays} يوم</p>
        </div>
      `;
    });
  });function showAllImages() {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // مسح أي صور قديمة

  const imagePaths = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg",
    "Images/image6.jpg",
    "Images/image7.jpg",
    "Images/image8.jpg",
    "Images/image9.jpg",
    "Images/image10.jpg"
  ];

  // إضافة الصور واحدة واحدة بدون overlay
  imagePaths.forEach((src) => {
    const imageBox = document.createElement("div");
    imageBox.classList.add("image-box");

    const img = document.createElement("img");
    img.src = src;
    img.alt = ""; // ممكن تخلي alt فاضي

    imageBox.appendChild(img);
    imageContainer.appendChild(imageBox);
  });
}

// ربط الزرار
document.getElementById("showImagesBtn").addEventListener("click", showAllImages);
