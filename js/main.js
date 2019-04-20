/*Получаем узел элемента содержащего контент страницы*/
e = document.getElementsByTagName("article")[0];
/*Получаем список излов элементов пунктов меню*/
n = document.getElementById("menu").childNodes;
s=1; /*храним номер текущего выделенного пункта меню*/
o=1; /*храним номер текущего наведённого пункта меню*/
/*Стоит учитывать что переносы текста в HTML javascript тоже считает за узлы DOM
поэтому у узлов пунктов менб лишь нечетные номера*/
xhr = new XMLHttpRequest(); /*Создаём новый объект для запросов http*/
par = new DOMParser(); /*создаём парсер*/

/*
Эта функция вставляет скриптовый тег в голову документа
В качестве параметров берёт адрес и соедржимое тега
*/
function include_script(url, inner) {
    script = document.createElement('script');
    if(url != null) script.src = url;
    script.innerHTML = inner;
    document.getElementsByTagName('head')[0].appendChild(script);
}
/*
Тоже самое но для прилинкованых объектов
*/
function include_link(url, rel) {
    link = document.createElement('link');
    link.href = url;
    link.rel = rel;
    document.getElementsByTagName('head')[0].appendChild(link);
}
/*
Возвращает исходный стиль после снятия наведения
*/
function OutItem(){
    if(s != o){
        //просто меняем тегу атрибут
        n[o].className = "itemcalm";
    }
}
/*
Следующие функции применяют стиль при наведении
*/
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
//Следующие функции применяют стиль выделения для пунктов меню и загружают контент раздела
function ShowAbout()
{
    //Применяем стиль к новому активному разделу
    n[s].className = "itemcalm";
    s = 1;
    n[s].className = "itemcalm itemselect";
    //Получаем текст нужного нам файла
    xhr.open("GET", "html/about.html", false);
    xhr.send(null);
    res = xhr.responseText;
    //Получаем дерево DOM из текста файла
    res = par.parseFromString(res,"text/html");
    //Находим там тело файла и сохраняем его
    bod = res.getElementsByTagName("body")[0];
    //Находим скрипты и линки
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    //Перебираем их все и добавляем в текущий документ
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    //Заполняем тег артикл содержимым тега body из загруженного файла
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowNews()
{
    n[s].className = "itemcalm";
    s = 3;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/news.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowCulture()
{
    n[s].className = "itemcalm";
    s = 5;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/culture.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowHistory()
{
    n[s].className = "itemcalm";
    s = 7;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/history.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowLaw()
{
    n[s].className = "itemcalm";
    s = 9;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/law.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowReports()
{
    n[s].className = "itemcalm";
    s = 11;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/reports.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowForum()
{
    n[s].className = "itemcalm";
    s = 13;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/forum.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}

function ShowLogin()
{
    n[s].className = "itemcalm";
    s = 15;
    n[s].className = "itemcalm itemselect";
    xhr.open("GET", "html/login.html", false);
    xhr.send(null);
    res = xhr.responseText;
    res = par.parseFromString(res,"text/html");
    bod = res.getElementsByTagName("body")[0];
    scripts = res.getElementsByTagName("script");
    links = res.getElementsByTagName("link");
    for(var i = 0; i < scripts.length; i++){
        src = scripts[i].getAttribute("src");
        include_script(scripts[i].getAttribute("src"), scripts[i].innerHTML);
    }
    for(var i = 0; i < links.length; i++){
        include_link(links[i].getAttribute("href"), links[i].getAttribute("rel"));
    }
    document.getElementsByTagName("article")[0].firstChild.remove();
    document.getElementsByTagName("article")[0].innerHTML = "<div>"+bod.innerHTML+"</div>";
}
//Устанавливаем разделом по умолчанию о правительстве
ShowAbout();