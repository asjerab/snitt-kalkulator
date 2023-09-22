


//Denne koden definerer en JavaScript-funksjon snitt() som beregner antall subjekter (forteller) med en positiv verdi, hentet fra brukerinndata fra HTML-skjemaet med elementer som har ids som engelsk, matte osv. Koden bruker if-setninger for å sjekke hvis verdien av hvert emne er større enn 0, og i så fall, øker tellertellingen og logger en melding til konsollen. Denne koden ser ut til å være en del av et karaktersporingssystem for flere fag.
function snitt()    {
    let teller = 0;
    let engelsk = Number(document.getElementById("engelsk").value);
    if (engelsk > 0) {
        teller++;
        console.log("engelsk > 0")
    }
    let naturfag = Number(document.getElementById("naturfag").value);
    if (naturfag > 0) {
        teller++;
        console.log("engelsk > 0")
    }
    let matte = Number(document.getElementById("matte").value);
    if (matte > 0) {
        teller++;
        console.log("matte > 0")
    }
    let krle = Number(document.getElementById("krle").value);
    if (krle > 0) {
        teller++;
        console.log("krle > 0")
    }
    let kroppsoving = Number(document.getElementById("kroppsoving").value);
    if (kroppsoving > 0) {
        teller++;
        console.log("kroppsoving > 0")
    }
    let samfunnsfag = Number(document.getElementById("samfunnsfag").value);
    if (samfunnsfag > 0) {
        teller++;
        console.log("samfunnsfag > 0")
    }
    let norsk = Number(document.getElementById("norsk").value);
    if (norsk > 0) {
        teller++;
        console.log("norsk > 0")
    }
    let spansk = Number(document.getElementById("spansk").value);
    if (spansk > 0) {
        teller++;
        console.log("spansk > 0")
    }
    let tysk = Number(document.getElementById("tysk").value);
    if (tysk > 0) {
        teller++;
        console.log("tysk > 0")
    }
    let fransk = Number(document.getElementById("fransk").value);
    if (fransk > 0) {
        teller++;
        console.log("fransk > 0")
    }
    let englesk_fordypning = Number(document.getElementById("engelskFordypning").value);
    if (englesk_fordypning > 0) {
        teller++;
        console.log("engelsk_fordypning > 0")
    }
    let programmering = Number(document.getElementById("programmering").value);
    if (programmering > 0) {
        teller++;
        console.log("programmering > 0")
    }
    let fysiskAktivitet = Number(document.getElementById("fysiskAktivitet").value);
    if (fysiskAktivitet > 0) {
        teller++;
        console.log("fysiskAktivitet > 0")
    }
    let designRedesign = Number(document.getElementById("designRedesign").value);
    if (designRedesign > 0) {
        teller++;
        console.log("designRedesign > 0")
    }
    let friluftsliv = Number(document.getElementById("friluftsliv").value);
    if (friluftsliv > 0) {
        teller++;
        console.log("friluftsliv > 0")
    }

    //Denne koden beregner gjennomsnittet (snitt) av de positive emneverdiene ved å summere alle verdiene og dele på antall positive emner (forteller). Gjennomsnittet avrundes deretter til 2 desimaler ved å bruke toFixed()-metoden, og resultatet vises i HTML-elementet med id-utdata ved hjelp av innerHTML-tilordning. Snittverdien er gjennomsnittskarakteren for alle de positive fagene i karaktersporingssystemet.

    let snitt = (engelsk + naturfag + matte + krle + kroppsoving + samfunnsfag + norsk + spansk + tysk + englesk_fordypning + fransk + programmering + fysiskAktivitet + designRedesign + friluftsliv) / teller;
    snitt = snitt.toFixed(2);
    output.innerHTML = "snittet er " + snitt;

    console.log(snitt)
}

function sjekkTall(fag) {
    if (fag.value > 6) {
        fag.value = 0;
        alert("skriv in tall mellom 1 - 6");
    }



}


//Dette er en JavaScript-funksjon kalt sjekkTall som tar inn en parameter fag, som antas å være et input-element i HTML-en. Funksjonen sjekker om verdien av fag er større enn 6 og i så fall setter verdien til 0 og viser en varselmelding "skriv i tall mellom 1 - 6" (skriv inn et tall mellom 1 - 6). Hensikten med denne funksjonen er å validere brukerens input og sørge for at den er innenfor det spesifiserte området 1 til 6.

function myFunction() {
    const hei = document.getElementById('demo')
    hei.classList.remove('show')
}

function myFunction2() {
    const hei = document.getElementById('demo2')
    hei.classList.remove('how')
}

function myFunction3() {
    const hei = document.getElementById('demo3')
    hei.classList.remove('show')
}

function myFunction4() {
    const hei = document.getElementById('demo4')
    hei.classList.remove('show')
}

function myFunction5() {
    const hei = document.getElementById('demo5')
    hei.classList.remove('show')
}

function myFunction6() {
    const hei = document.getElementById('demo6')
    hei.classList.remove('show')
}

function myFunction7() {
    const hei = document.getElementById('demo7')
    hei.classList.remove('how')
}

function myFunction8() {
    const hei = document.getElementById('demo8')
    hei.classList.remove('show')
}

function myFunction9() {
    const hei = document.getElementById('demo9')
    hei.classList.remove('show')
}

function myFunction10() {
    const hei = document.getElementById('demo10')
    hei.classList.remove('show')
}

function myFunction11() {
    const hei = document.getElementById('demo11')
    hei.classList.remove('show')
}

function myFunction12() {
    const hei = document.getElementById('demo12')
    hei.classList.remove('show')
}

function myFunction13() {
    const hei = document.getElementById('demo13')
    hei.classList.remove('show')
}

function myFunction14() {
    const hei = document.getElementById('demo14')                   
} 

function myFunction15() {
    const hei = document.getElementById('demo15')
    hei.classList.remove('show')
}


// Denne koden er en JavaScript-kode som legger til interaktivitet på en nettside. Den setter opp hendelseslyttere for å håndtere ulike brukerinteraksjoner. Legg_til_fag-knappen legger til klassen "show" til et element med id "subject_list" når den klikkes, og gjør det synlig på siden. Close_subject-knappen fjerner klassen "show" fra det samme elementet når det klikkes, og skjuler det igjen. Subject_list-matrisen inneholder knapper for hvert emne, og når en knapp klikkes, vises det tilsvarende emneelementet ved å legge til klassen "show". En varselmelding vises når et emne legges til.

    const subject_list = Array.from(document.querySelector('#subject_list').children) 
    const legg_til_fag = document.getElementById('legg_til_fag')
    const close_subject = document.getElementById('close_subject')
    const alleFagene = Array.from(document.querySelector('.main_content_pack').children)

    legg_til_fag.addEventListener('click', ()=> {
        console.log('hei')
        document.getElementById('subject_list').classList.add('show')
    })

    

    close_subject.addEventListener('click', ()=> {
        document.getElementById('subject_list').classList.remove('show')
        console.log('hva skjer')
    })
  

    subject_list.forEach((button,index) => {
        button.addEventListener('click', ()=> {
            alleFagene[index].classList.add('show')
            alert('la til fag')
        })
    })


