e = document.getElementsByTagName("article")[0];
e.appendChild(document.createTextNode(""));
n = document.getElementById("menu").childNodes;
s=1;
o=1;
function OutItem(){
    if(s != o){
        n[o].className = "itemcalm";
    }
}
function OverAbout()
{
    if(s != 1){
        if(s != o) n[o].className = "itemcalm";
        o = 1;
        n[o].className = "itemcalm itemover";
    }
}
function OverNews()
{
    if(s != 3){
        if(s != o) n[o].className = "itemcalm";
        o = 3;
        n[o].className = "itemcalm itemover";
    }
}
function OverCulture()
{
    if(s != 5){
        if(s != o) n[o].className = "itemcalm";
        o = 5;
        n[o].className = "itemcalm itemover";
    }
}
function OverHistory()
{
    if(s != 7){
        if(s != o) n[o].className = "itemcalm";
        o = 7;
        n[o].className = "itemcalm itemover";
    }
}
function OverLaw()
{
    if(s != 9){
        if(s != o) n[o].className = "itemcalm";
        o = 9;
        n[o].className = "itemcalm itemover";
    }
}
function OverReports()
{
    if(s != 11){
        if(s != o) n[o].className = "itemcalm";
        o = 11;
        n[o].className = "itemcalm itemover";
    }
}
function OverForum()
{
    if(s != 13){
        if(s != o) n[o].className = "itemcalm";
        o = 13;
        n[o].className = "itemcalm itemover";
    }
}
function OverLogin()
{
    if(s != 15){
        if(s != o) n[o].className = "itemcalm";
        o = 15;
        n[o].className = "itemcalm itemover";
    }
}
function ShowAbout()
{
    n[s].className = "itemcalm";
    s = 1;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Здесь вы узнаете всё о нашем правительстве";
}

function ShowNews()
{
    n[s].className = "itemcalm";
    s = 3;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "А тут отображаются последние новости нашей империи";
}

function ShowCulture()
{
    n[s].className = "itemcalm";
    s = 5;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Всё о великой византйиской культуре";
}

function ShowHistory()
{
    n[s].className = "itemcalm";
    s = 7;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Изучайте историю от распада Римской Империи до династии палеологов";
}

function ShowLaw()
{
    n[s].className = "itemcalm";
    s = 9;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Чтобы блюсти законы империи - изучите их";
}

function ShowReports()
{
    n[s].className = "itemcalm";
    s = 11;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Тут принимаются все обращения наших граждан";
}

function ShowForum()
{
    n[s].className = "itemcalm";
    s = 13;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Вступите в дискуссию на просторах имперского форума";
}

function ShowLogin()
{
    n[s].className = "itemcalm";
    s = 15;
    n[s].className = "itemcalm itemselect";
    e.firstChild.data = "Войдите на сайт по вашему паспорту";
}
ShowAbout();