const infoData = {
    linne: `Linne är ett av våra äldsta och mest miljövänliga textilmaterial, tillverkat av stjälkarna från linväxten. 

Varför det är bra:
• Minimal vattenåtgång: Lin kräver betydligt mindre vatten än bomull och kan ofta växa i regniga klimat utan extra bevattning.
• Kemikaliefritt: Växten är naturligt tålig mot skadedjur och behöver därför sällan bekämpningsmedel.
• Hudvänligt: Linne är naturligt antiseptiskt och transporterar bort fukt, vilket gör det idealiskt för känslig hud och varma nätter.
• Hållbarhet: Det är ett av de starkaste naturfibrerna som finns och blir bara mjukare och vackrare för varje tvätt.`,

    hampa: `Hampa beskrivs ofta som framtidens supermaterial. Det är en extremt snabbväxande planta som ger mer fiber per kvadratmeter än nästan något annat material.

Fördelar för miljön och dig:
• Regenerativt: Hampan förbättrar faktiskt jorden den växer i genom att binda koldioxid och rensa marken från tungmetaller.
• Inga bekämpningsmedel: Plantan växer så tätt att ogräs inte får plats, vilket eliminerar behovet av gifter.
• Skyddande: Tyget har ett naturligt UV-skydd och är resistent mot mögel.
• Slitstyrka: Hampatyger är kända för att hålla i generationer.`,

    polyester: `Polyester är ett syntetiskt material som i grunden är tillverkat av råolja (plast). Det är idag det vanligaste materialet i modeindustrin, men har ett högt pris för planeten.

Problematiken:
• Mikroplaster: Vid varje tvätt lossnar tusentals små plastpartiklar som hamnar i våra hav och till slut i näringskedjan.
• Andningsförmåga: Syntetiska fibrer stänger in värme och fukt mot huden, vilket kan leda till irritation och obehag.
• Ej biologiskt nedbrytbart: En tröja i polyester kan ta flera hundra år att brytas ner i naturen.`,

    akryl: `Akryl är ett syntetiskt fiber som ofta används som ett billigt alternativ till ull. Tyvärr är det ett av de mest kemikalieintensiva materialen att framställa.

Varför vara försiktig:
• Kemikalier: Framställningen kräver stora märker lösningsmedel som är skadliga för både arbetare och miljön.
• Hudirritation: Många upplever att akryl "sticks" eller orsakar klåda då materialet inte kan reglera temperatur naturligt.
• Brandfarligt: Till skillnad från naturmaterial smälter akryl vid hög värme, vilket utgör en säkerhetsrisk.`, // HÄR lade jag till kommatecknet som saknades!

    bomull: `Ekologisk bomull är ett mycket bättre val för både bönderna och jorden.
    
• Inga gifter: Inga syntetiska bekämpningsmedel används.
• Vatten: Ofta används mer regnvatten än vid konventionell odling.
• Hudvänligt: Inga kemikalierester finns kvar i det färdiga tyget.`,

    tencel: `Tencel är ett varumärke för lyocell, en fiber som är både lyxig och miljövänlig.
    
    • Slutet system: 99% av kemikalierna och vattnet som används i tillverkningen återanvänds.
    • Komposterbart: Fibern är helt biologiskt nedbrytbar.
    • Fuktabsorberande: Det transporterar bort fukt bättre än bomull.`,

    silke: `Natursilke (Mullbärssilke) är ett av de mest hudvänliga materialen som finns.
    
• Hypoallergent: Silke drar inte till sig kvalster och är naturligt resistent mot mögel.
• Fuktbevarande: Till skillnad från bomull absorberar inte silke hudens naturliga fukt, vilket är bra för torr hud.
• Temperatur: Fungerar som en naturlig termostat – svalt på sommaren och värmande på vintern.`,

    bambu: `Bambulyocell är ett modernt och hållbart sätt att använda den snabbväxande bambun.
    
• Miljövänlig process: Till skillnad från vanlig bambuviskos används här en giftfri process där vattnet återanvänds.
• Extremt mjukt: Känns som en blandning mellan silke och bomull.
• Antibakteriellt: Bambu har naturliga egenskaper som håller tyget fräscht längre.`
};

// Välj ut elementen från HTML
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-button");

// Lägg till klick-funktion på alla "Läs mer"-knappar
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        // Kontrollera om texten faktiskt finns i infoData för att undvika fel
        if (infoData[target]) {
            modalTitle.innerText = button.parentElement.querySelector('h3').innerText;
            modalText.style.whiteSpace = "pre-line"; 
            modalText.innerText = infoData[target];
            modal.style.display = "block";
        } else {
            console.error("Hittade ingen text för:", target);
        }
    });
});

// Stäng modalen när man klickar på X
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Stäng modalen om man klickar utanför själva rutan
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};