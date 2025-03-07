function toggleInfo() {
    let infoBox = document.getElementById("info");
    infoBox.style.display = "block";
    infoBox.style.zIndex = "1000";
}

function closeInfo() {
    document.getElementById("info").style.display = "none";
}

function openPopup(title, text, imgSrc) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup-img").alt = title;
    let popup = document.getElementById("popup");
    popup.classList.add("show");
    popup.style.zIndex = "1000";
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(() => { 
        popup.style.display = "none"; 
    }, 300);
}

function openPopup(title, text, imgSrc) {
    let popup = document.getElementById("popup");
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup-img").alt = title;
    
    popup.style.display = "flex";  
    setTimeout(() => {
        popup.classList.add("show");
    }, 10); 
}
