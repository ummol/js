document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image");
    const previewPics = document.querySelectorAll(".preview");
    const defaultText = "Наведите курсор на изображение ниже, чтобы отобразить его здесь.";
    
    previewPics.forEach(pic => {
        pic.addEventListener("mouseover", function() {
            console.log("Событие mouseover сработало");
            console.log("Источник изображения:", this.src);
            console.log("Alt текст:", this.alt);
            
            imageContainer.style.backgroundImage = `url('${this.src}')`;
            imageContainer.textContent = this.alt;
        });
        
        pic.addEventListener("mouseout", function() {
            console.log("Событие mouseout сработало");
            
            imageContainer.style.backgroundImage = "url('')";
            imageContainer.textContent = defaultText;
        });
    });
});
