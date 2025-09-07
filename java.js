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
