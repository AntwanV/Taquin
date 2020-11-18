//FONCTIONS "globales"

function listeDivVersHTML(listeDiv){
  L=[];
  for (var i = 0; i<listeDiv.length; i++){
    L[i] = listeDiv[i].innerHTML;
  }
  return L
}

function reinit(){
  caseUn = document.getElementsByClassName("case-1")[0];
  caseDeux = document.getElementsByClassName("case-2")[0];
  caseTrois = document.getElementsByClassName("case-3")[0];
  caseQuatre = document.getElementsByClassName("case-4")[0];
  caseCinq = document.getElementsByClassName("case-5")[0];
  caseSix = document.getElementsByClassName("case-6")[0];
  caseSept = document.getElementsByClassName("case-7")[0];
  caseHuit = document.getElementsByClassName("case-8")[0];
  caseNeuf = document.getElementsByClassName("case-9")[0];

  caseUn.onclick = function(){
    echanger(caseUn);
  }

  caseDeux.onclick = function(){
    echanger(caseDeux);
  }

  caseTrois.onclick = function(){
    echanger(caseTrois);
  }

  caseQuatre.onclick = function(){
    echanger(caseQuatre);
  }

  caseCinq.onclick = function(){
    echanger(caseCinq);
  }

  caseSix.onclick = function(){
    echanger(caseSix);
  }

  caseSept.onclick = function(){
    echanger(caseSept);
  }

  caseHuit.onclick = function(){
    echanger(caseHuit);
  }

  caseNeuf.onclick = function(){
    echanger(caseNeuf);
  }

}
//VARIABLES
var cases = document.getElementsByClassName('case');

var listeNumeros = listeDivVersHTML(cases);
var listeInit= listeDivVersHTML(cases); listeInit[8]="";

var nouvellePartie = document.getElementsByClassName("nouvelle-partie");

var caseUn = document.getElementsByClassName("case-1")[0];
var caseDeux = document.getElementsByClassName("case-2")[0];
var caseTrois = document.getElementsByClassName("case-3")[0];
var caseQuatre = document.getElementsByClassName("case-4")[0];
var caseCinq = document.getElementsByClassName("case-5")[0];
var caseSix = document.getElementsByClassName("case-6")[0];
var caseSept = document.getElementsByClassName("case-7")[0];
var caseHuit = document.getElementsByClassName("case-8")[0];
var caseNeuf = document.getElementsByClassName("case-9")[0];

var ligneUn = document.getElementsByClassName("ligne-1");
var ligneDeux = document.getElementsByClassName("ligne-2");
var ligneTrois = document.getElementsByClassName("ligne-3");



//Jeu
function mouvementPossible(Case){
  var numeroCase = Case.innerHTML;
  var indiceCase = listeNumeros.indexOf(numeroCase);
  var indiceVide = listeNumeros.indexOf(" ");
  if (indiceVide==-1){
    indiceVide = listeNumeros.indexOf("");
  };
  if (indiceCase===indiceVide+1 || indiceCase===indiceVide-1 || indiceCase===indiceVide+3 || indiceCase===indiceVide-3){
    return true;
  } else{
  return false;
  }
}

function echanger(Case){
  var numeroCase = Case.innerHTML;
  if (mouvementPossible(Case) === true){

    var l = listeNumeros.indexOf(numeroCase);
    var k = listeNumeros.indexOf(" ");
    if (k==-1){
      k = listeNumeros.indexOf("");
      listeNumeros[k] = numeroCase;
      listeNumeros[l] = "";

      cases[k]["className"] = cases[l]['className'];
      cases[k].innerHTML = cases[l].innerHTML;
      cases[l]["className"] = "case case-9";
      cases[l].innerHTML = "";
    }else{
    listeNumeros[k] = numeroCase;
    listeNumeros[l] = " ";

    cases[k]["className"] = cases[l]['className'];
    cases[k].innerHTML = cases[l].innerHTML;
    cases[l]["className"] = "case case-9";
    cases[l].innerHTML = " ";
  }


    for(var a = 0; a < 3; a++){
        ligneUn[0]["children"][a]["className"] = cases[a]["className"];
        ligneUn[0]["children"][a].innerHTML = cases[a].innerHTML;
        ligneDeux[0]["children"][a]["className"] = cases[a+3]["className"];
        ligneDeux[0]["children"][a].innerHTML = cases[a+3].innerHTML;
        ligneTrois[0]["children"][a]["className"] = cases[a+6]["className"];
        ligneTrois[0]["children"][a].innerHTML = cases[a+6].innerHTML;
    }
    reinit()
  }

}

function newGame(){
  var randomCases=_.sampleSize(cases,9);
  listClasses=[];
  listNumbers=[];
  for(var a = 0; a < 3; a++){
      listClasses.push(randomCases[a]["className"]);
      listNumbers.push(randomCases[a].innerText);
    }
  for(var a = 0; a < 3; a++){
      listClasses.push(randomCases[a+3]["className"]);
      listNumbers.push(randomCases[a+3].innerText);

      }
  for(var a = 0; a < 3; a++){
      listClasses.push(randomCases[a+6]["className"]);
      listNumbers.push(randomCases[a+6].innerText);

        }
  for(var a = 0; a < 3; a++){
    ligneUn[0]["children"][a]["className"] = listClasses[a];
    ligneDeux[0]["children"][a]["className"] = listClasses[a+3];
    ligneTrois[0]["children"][a]["className"] = listClasses[a+6];
    ligneUn[0]["children"][a].innerText = listNumbers[a];
    ligneDeux[0]["children"][a].innerText = listNumbers[a+3];
    ligneTrois[0]["children"][a].innerText = listNumbers[a+6];
    }
  listeNumeros=listNumbers;
  reinit()
  bool=0;z=0;
  while (bool && z<9){
    bool=listeNumeros[z]==listeInit[z];
    z++;
  }
  if (z==9){
    var result = confirm( "BRAVO!!! Nouvelle Partie?" );
    if ( result ) {
      window.open("3-par-3.html", "_top");
    }
  }
}


newGame();


nouvellePartie[0].onclick = function(){
  newGame();
}

caseUn.onclick = function(){
  echanger(caseUn);
}

caseDeux.onclick = function(){
  echanger(caseDeux);
}

caseTrois.onclick = function(){
  echanger(caseTrois);
}

caseQuatre.onclick = function(){
  echanger(caseQuatre);
}

caseCinq.onclick = function(){
  echanger(caseCinq);
}

caseSix.onclick = function(){
  echanger(caseSix);
}

caseSept.onclick = function(){
  echanger(caseSept);
}

caseHuit.onclick = function(){
  echanger(caseHuit);
}

caseNeuf.onclick = function(){
  echanger(caseNeuf);
}
