const hiddenDivs = document.querySelectorAll('.container .d-none');
const hoverables = document.querySelectorAll('.hover');

console.log("live");



hoverables.forEach(function (hoverable, i) {
    hoverable.addEventListener('mouseover', function hover() {
        hiddenDivs[i].classList.remove('d-none')
    });

    hoverable.addEventListener('mouseleave', function leave() {
        hiddenDivs[i].classList.add('d-none')

    });
});
