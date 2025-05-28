import { GrGallery } from "react-icons/gr";

function GalleryPage(){
    const images = [
        {
            filepath: '/src/assets/python-code-lcs-algorithm.png',
            alt: 'A python code snippet showing a longest common substring algorithm.',
            caption: 'A code snippet shows part of an algorithms project in Python.',
            title: `Dynamic Programming Algorithm, \u00A9 2024 Kevin Klein`
        },
        {
            filepath: '/src/assets//halloween-potion-pong-game.jpg',
            alt: 'Teacher Kevin wears a fancy red vaquero costume with a big hat as he stands behind a table covered with colorful potions.',
            caption: 'Teacher Kevin stands behind his Potion Pong game for Halloween.',
            title: "Halloween Class Game, \u00A9 2023 Kevin Klein"
        },
        {
            filepath: '/src/assets/lantern-festival-pig-taiwan.jpg',
            alt: 'Colorful larger-than-life-sized cloth lanterns in the shapes of a pineapple, pig, cartoon dragonfruit, and cartoon banana.',
            caption: 'Larger-than-life lanterns create a festive atmosphere in PingTung County, Taiwan.',
            title: "Lantern Festival, \u00A9 2019 Kevin Klein"
        },
        {
            filepath: '/src/assets/clay-leaf-dish-unfired.jpg',
            alt: 'A shallow, reddish-brown, unfired clay sauce dish sculpted in the shape of a leaf with vein lines, with a few clay particles sticking to the top.',
            caption: 'An leaf-shaped clay sauce dish is almost finished and ready to be fired.',
            title: "Clay Leaf Dish, \u00A9 2023 Kevin Klein"
        },
        {
            filepath: '/src/assets/k-icon-pink-transparent.png',
            alt: 'A strawberry-pink square icon with rounded corners and a big transparent K in the middle.',
            caption: "A single letter extending to the edge of its background makes for a fine website icon.",
            title: "K icon, \u00A9 2024 Kevin Klein"
        },
    ]
    
    return (
        <>
            <h2><GrGallery /> Gallery</h2>
            <p>Behold the cool collection of creations Kevin has accumulated! The images wrap to the next row, with fewer pictures per row when the viewport width is shrunk.</p>
            <article className="gallery">
                {
                    images.map((image) => 
                        <figure>
                            <img src={image.filepath} alt={image.caption} title={image.title} />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    )
                }
        </article>
        </>
    )
}
export default GalleryPage;