const tagsEl = document.getElementById('tags');
const textAria = document.getElementById('textarea');

textAria.focus();

textAria.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if(e.key == 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
});

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '');
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerHTML = tag;
        tagsEl.appendChild(tagElement);
    });
}
function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);

    }, times * 100);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag){
    tag.classList.add('highlight');
}
function unHighlightTag(tag){
    tag.classList.remove('highlight');
}