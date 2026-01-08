const infoData = {
    linne: "Ekologiskt linne kräver mycket lite bekämpningsmedel och vatten. Det är naturligt antibakteriellt och svalt mot huden, vilket gör det perfekt för allergiker.",
    hampa: "Hampa är en robust växt som förbättrar jordmånen där den växer. Tyget är UV-resistent och blir bara mjukare ju mer du använder det.",
    polyester: "Polyester är i grunden plast gjord av olja. Det andas dåligt, vilket kan irritera huden, och bidrar till den globala plastkrisen.",
    akryl: "Akryl framställs med starka kemikalier. Det är ofta inte återvinningsbart och kan orsaka statisk elektricitet som är obekväm för huden."
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-button");

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        modalTitle.innerText = button.parentElement.querySelector('h3').innerText;
        modalText.innerText = infoData[target];
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};