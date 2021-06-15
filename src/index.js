console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


const init = () => {

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(element => {
                const dogContainer = document.querySelector('#dog-image-container')
                let image = document.createElement('img')
                image.src = element
                image.style.height = '400px'
                image.style.width = 'auto'
                dogContainer.appendChild(image)
            });

        })

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            Object.keys(data.message).forEach(breed => {
                const breedContainer = document.querySelector('#dog-breeds')
                let listItem = document.createElement('li')
                listItem.innerText = breed
                breedContainer.appendChild(listItem)
            })
        })

    const breedContainer = document.querySelector('#dog-breeds')
    breedContainer.addEventListener('click', function (event) {
        event.target.style.color = '#228B22'
    })

    const letterSelect = document.getElementById('breed-dropdown')
    letterSelect.addEventListener('change', function () {
        let selection = letterSelect.value[0]
        const breedItems = document.querySelectorAll('#dog-breeds li');



        if (selection === undefined) {
            [...breedItems].forEach(function (item) { item.style.display = 'list-item' })
        } else {
            
            [...breedItems].forEach(function (item) {

                if (item.innerText[0] === selection) {
                    item.style.display = 'list-item'
                } else {
                    item.style.display = 'none'
                }
            })
        }




    })
}

document.addEventListener('DOMContentLoaded', init);