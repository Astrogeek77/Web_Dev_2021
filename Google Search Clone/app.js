const query = document.querySelector('.query')
const searchBtn = document.querySelector('.searchBtn')
const googleMain = document.querySelector('.google-main')

searchBtn.onclick = () => searchHandler()


query.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        searchHandler()
    }
})

const randomNum = Math.round(Math.random() * (15-1) + 1);
console.log(randomNum)

googleMain.src = 'images/google-' + randomNum + '.png';

function searchHandler(){
    let url = "https://www.google.com/search?q=" + query.value

        window.open(url, '_self')
        query.value = '' 
}