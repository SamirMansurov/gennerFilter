import{movies} from "./db.js"
console.log(movies);


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// №1
const remuve = document.querySelectorAll('.remuve_img')
remuve.forEach(function(remuves) {
    remuves.parentNode.removeChild(remuves)
})

// №2   
const genre = document.querySelector('.promo__genre')
genre.textContent = 'Драма'

// №3
const  poster = document.querySelector('.promo__bg')
poster.style.background = "url(img/bg.jpg) center center/cover no-repeat"

const cont = document.querySelector('.promo__interactive-list')
const promo__bg = document.querySelector('.promo__bg')
const uls = document.querySelector(".promo__menu-list ul")
const genres = ['All', ...new Set(movies.map(elem => elem.Genre))]



reload(movies, cont)
genreList(genres, uls)


function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let idx = arr.indexOf(item)
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = `${idx + 1} ${item.Title}`

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.append(del)
        place.append(li)

        del.onclick = () => {
            movies.splice(idx, 1)
            reload(movies, cont)
        }

        li.onclick = () => {
          promo__bg.style.backgroundImage = `url(${item.Poster})`
        }
    }
}





function genreList(arr, place) {
    place.innerHTML = ""
    
    for(let item of arr) {
        let indx = arr.indexOf(item)
        let li = document.createElement("li") 
        let a = document.createElement("a")

        a.classList.add("promo__menu-item")
        a.innerHTML = item

        a.href = "#"
        
        li.append(a) 
        place.append(li)

        if(indx === 0) {
            a.classList.add("promo__menu-item_active")
        }
    }
}



const genreLinks = document.querySelectorAll('.promo__menu-item')

  genreLinks.forEach(link => {
    link.onclick = () => {
    
const selectedGenre = link.textContent.trim()
        const filteredMovies =movies.filter(movie => movie.Genre === selectedGenre)
        reload(filteredMovies, cont)

        genreLinks.forEach(link => link.classList.remove(' promo__menu-item_active'))
        link.classList.add(' promo__menu-item_active')

}
        
    })




