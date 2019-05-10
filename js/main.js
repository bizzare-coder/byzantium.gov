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
//Функция проверки того что пользователь вощел на сайт
function checkLogin(){
    xhr.open("GET", "php/check.php", false);
    xhr.send(null);
    return xhr.responseText == "";
}
//Получаем логин текущего пользователя
function getLogin(){
    xhr.open("GET", "php/getlogin.php", false);
    xhr.send(null);
    return xhr.responseText;
}
//Меняем внешний вид пункта войти в зависимости от того вошел юзверь или нет
function logonView(){
    l = document.getElementsByName("login")[0];
    if (checkLogin()){
        l.innerHTML = getLogin();
    } else {
        l.innerHTML = "Войти";
    }
}
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
 функция применяет стиль при наведении
*/
function OverItem(id)
{
    if(s != id){
        if(s != o) n[o].className = "itemcalm";
        o = id;
        n[o].className = "itemcalm itemover";
    }
}
//Показывает подгруженный контент
function ShowHTML(addr, id){
  n[s].className = "itemcalm";
  s = id;
  n[s].className = "itemcalm itemselect";
  //Получаем текст нужного нам файла
  xhr.open("GET", "html/"+addr, false);
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

function ShowLogin(){
  if(checkLogin()){
    addr = "user.html";
  } else {
    addr = "login.html";
  }
  ShowHTML(addr, 15);
}

//Устанавливаем разделом по умолчанию о правительстве
ShowHTML('about.html', 1);
