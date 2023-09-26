import Carousel from 'react-material-ui-carousel';
import Item from './items';
const items = [
    {
        name: "Random Name #1",
        url: 'https://user-images.githubusercontent.com/58407215/193787047-b47877f1-9b92-467f-9ed7-fd4a4cdd1199.png'
    },
    {
        name: "Random Name #2",
        url: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-blue-tech-theme-globe-poster-background-image_153891.jpg'
    }
];
const CarouselSection = () => {
    return (
        <Carousel>
            {items.map((item, index) => <Item key={index} item={item} />)}
        </Carousel>
    )
}

export default CarouselSection;