let myMap;

const init = () => {
    myMap =new ymaps.Map("map",{
        center:  [59.94851657, 30.26590746],
        zoom: 15,
        controls: []
    });
const coords = [
    [59.94851657, 30.26590746]
];
const myCollection = new ymaps.GeoObjectCollection({}, {
    draggble: false,
    iconLayout: 'default#image',
    iconImageHref: '../img/метка.svg',
    iconImageSize: [100, 100],
    iconImageOffset: [-46, -66]
});
coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
})
myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);