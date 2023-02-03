# module9_homework
Задание 1.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать XML в JS-объект и выводить его в консоль.

Задание 2.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
который будет преобразовывать JSON в JS-объект и выводить его в консоль.

Задание 3
Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR 
по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.

Задание 4
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, 
где первое число — ширина картинки, второе — высота.

Задание 5.
Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — 
выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.


FRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFR


Exercice 1.
On vous donne un blanc et le résultat que vous devriez obtenir. Votre travail consiste à écrire le code
qui convertira le XML en un objet JS et le sortira sur la console.

Exercice 2.
On vous donne un blanc et le résultat que vous devriez obtenir. Votre travail consiste à écrire le code
qui convertira le JSON en objet JS et le sortira sur la console.

Exercice 3
Écrivez le code d'une application dont l'interface est une entrée et un bouton.
Vous pouvez saisir n'importe quel nombre en entrée. Lorsque le bouton est cliqué, voici ce qui se passe :
Si le nombre n'est pas dans la plage de 1 à 10, affichez le texte "le nombre est en dehors de la plage de 1 à 10" ci-dessous.
Si le nombre est compris entre 1 et 10 - faites une demande en utilisant XHR
par l'URL https://picsum.photos/v2/list?limit=10, où la limite get-parameter est le nombre saisi.

Exercice 4
Écrivez un code d'application dont l'interface est composée de 2 entrées et d'un bouton de soumission. Vous pouvez saisir n'importe quel nombre en entrée.
Lorsque le bouton est cliqué, voici ce qui se passe :
Si les deux nombres ne se situent pas dans la plage de 100 à 300 ou non, un nombre est saisi -
afficher en dessous le texte "un des nombres en dehors de la plage de 100 à 300" ;
Si les nombres sont compris entre 100 et 300, faites une demande de récupération à l'aide de l'URL https://picsum.photos/200/300,
où le premier nombre est la largeur de l'image, le second est la hauteur.

Exercice 5.
Écrivez le code d'application dont l'interface se compose de deux entrées et d'un bouton. Vous pouvez saisir n'importe quel nombre en entrée.
Le titre de la première entrée est "numéro de page".
Le titre de la deuxième entrée est "limite".
Le titre du bouton est « demande ».
Lorsque le bouton est cliqué, voici ce qui se passe :

Si le nombre de la première entrée n'est pas compris entre 1 et 10 ou n'est pas un nombre -
afficher sous le texte "Le numéro de page est hors plage de 1 à 10" ;
Si le nombre dans la deuxième entrée ne tombe pas dans la plage de 1 à 10 ou n'est pas un nombre -
afficher le texte "Limite hors plage de 1 à 10" ci-dessous ;
Si la première et la deuxième entrée ne sont pas dans des plages ou ne sont pas des nombres -
afficher en dessous le texte "Numéro de page et limite hors plage de 1 à 10" ;
Si les nombres sont compris entre 1 et 10, faites une demande à l'URL https://picsum.photos/v2/list?page=1&limit=10,
où la page de paramètres GET est le nombre de la première entrée et la limite de paramètre GET est le nombre entré dans la deuxième entrée.
