// function 
window.openTab= function (evt, tabName) {
    var i, tabcontent, tablinks;
    
    // إخفاء كل المحتويات
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }
    
    // إزالة الصفة النشطة من الأزرار
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // إظهار التبويب الحالي وإضافة الكلاس النشط للزر المكبوس
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// function openTab(evt, tabName) { var i, tabcontent, tablinks; // إخفاء كل المحتويات tabcontent = document.getElementsByClassName("tab-content"); for (i = 0; i < tabcontent.length; i++) { tabcontent[i].classList.remove("active-content"); } // إزالة الصفة النشطة من الأزرار tablinks = document.getElementsByClassName("tab-btn"); for (i = 0; i < tablinks.length; i++) { tablinks[i].classList.remove("active"); } // إظهار التبويب الحالي وإضافة الكلاس النشط للزر المكبوس document.getElementById(tabName).classList.add("active-content"); evt.currentTarget.classList.add("active");}