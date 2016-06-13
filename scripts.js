setInterval(function () { bgchange(); }, 7000);

preloads = "bg.jpg,bg2.jpg,bg3.jpg,bg4.jpg,bg5.jpg,bg6.jpg,bg7.jpg,bg8.jpg,bg9.jpg,bg10.jpg,bg11.jpg".split(",");
var tempImg = [];

for(var x=0;x<preloads.length;x++) {
    tempImg[x] = new Image();
    tempImg[x].src = preloads[x];
}

function bgchange()
{
    var bg;
    var a = Math.random()*10;
    a=Math.floor(a);
    
    if(a==0) bg = "url('bg.jpg')";
    if(a==1) bg = "url('bg2.jpg')";
    if(a==2) bg = "url('bg3.jpg')";
    if(a==3) bg = "url('bg4.jpg')";
    if(a==4) bg = "url('bg5.jpg')";
    if(a==5) bg = "url('bg6.jpg')";
    if(a==6) bg = "url('bg7.jpg')";
    if(a==7) bg = "url('bg8.jpg')";
    if(a==8) bg = "url('bg9.jpg')";
    if(a==9) bg = "url('bg10.jpg')";
    document.body.style.transition = "all 0.4s";
    document.body.style.backgroundImage = bg;
}
function faduj()
{
    var showinfo = document.getElementById("showinfo");

    style = window.getComputedStyle(showinfo),
    disp = style.getPropertyValue('display');
    
    if(disp == "block")
    {
        showinfo.style.opacity = 0;
        $(showinfo).animate({opacity: 1});
    }
    
    $(showinfo).animate({ width: 'show' },450); 
    
    showinfo.style.display = "block";
}

function eksport(titlep, txtp)
{
        var title=document.getElementById("headh");
	var txt=document.getElementById("info");
        title.innerHTML="<h2>"+titlep+"</h2>";
	txt.innerHTML=txtp;
        
        faduj();
}
function about()
{
    var title = "O Nas";
    var txt = "<span style=\"font-weight:bold;font-size:13px;\">Lith Theme jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com/\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.</span><br /><br /><img src=\"ok-icon.png\"><h2>Kontakt</h2>E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski (<a href=\"http://a.test10.besaba.com/\">A.Test10</a>)<br />Cena: Do negocjacji";
    
    eksport(title,txt);
}
function offer()
{
    var title = "Oferta";
    var txt = "<span style=\"font-weight:bold;font-size:13px;\">- Przejrzytość strony <br />- Intuicyjna nawigacja<br />- Łatwość edycji kodu<br />- Nowoczesny wyglądd<br />- Szybkość wczytywania<br />- Zgodnośc wyświetlania na różnych platformach<br /><br /><span style=\"font-size:15px;\"><a href=\"http://a.test10.besaba.com/\">Vertigo Project</a></span>";
    
    eksport(title,txt);
}
function contact()
{
    var title = "Kontakt";
    var txt = "<h2>Kontakt</h2>E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski (<a href=\"http://a.test10.besaba.com/\">A.Test10</a>)<br />Cena: Do negocjacji";
    
    eksport(title,txt);
}
function start()
{
    var showinfo = document.getElementById("showinfo");
    
    $(showinfo).animate({ width: 'hide' },450); 
}