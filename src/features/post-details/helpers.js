export function injectImages(html, images) {
    if (!images || images.length === 0) return html

    var root = document.createElement('html')
    root.innerHTML = html

    let paragraphs = root.getElementsByTagName('p')

    images.forEach((image, index) => {
        let img = document.createElement('img')

        img.src = image
        img.style.height = '248px'
        img.style.alignSelf = index % 2 == 0 ? 'flex-start' : 'flex-end'

        if (index < paragraphs.length) paragraphs[index].insertAdjacentElement('afterend', img)
    })

    return root.innerHTML
}
