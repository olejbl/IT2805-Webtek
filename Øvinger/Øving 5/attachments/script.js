/* Part 2 */
console.log('PART 2')

var x;
for (x = 1; x <= 20; x++) {
    console.log(x);
}


/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var y = 0;
for (y = numbers[y]; y <= numbers.length; y++) {

    if (y % 3 == 0 && y % 5 == 0)
        console.log("eplekake");
    else if (y % 3 == 0)
        console.log("eple");
    else if (y % 5 == 0)
        console.log("kake");
    else
        console.log(y)
}

/* Part 4 */

var title = document.getElementById("title").innerText = "Hello JavaScript";

/* Part 5 */
function changeDisplay() {
    document.getElementById("magic").style.display = "none";

}

function changeVisibility() {
    document.getElementById("magic").style.visibility = "hidden";

}

function reset() {
    document.getElementById("magic").style.visibility = "visible";
    document.getElementById("magic").style.display = "block";

}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

technologies.forEach(function (list) {
    var li = document.createElement('li');
    li.innerHTML += list;
    document.getElementById('tech').appendChild(li);
});
