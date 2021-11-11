var config = {
    style: 'mapbox://styles/qlqhaks/ckvuia81q2tsr14s8212ic8ll',
    accessToken: 'pk.eyJ1IjoicWxxaGFrcyIsImEiOiJja3M5dGowM24wYzE3Mm9wNW15bjd6d2x3In0.JseYVwX4a3SzUSgKf0jnkg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'page00',
            alignment: 'left',
            hidden: true,
            title: 'Soongsil University',
            // image: './path/to/image/source.png',
            // description: '인문대 학우들의 주서식지',
            location: {
                center: { lon: 126.79465, lat: 37.32705 },
                zoom: 13.49,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'place-label',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'page01',
            alignment: 'left',
            hidden: true,
            title: '조만식기념관',
            // image: '조만식.jpg',
            description: '',
            location: {
                center: { lon: 127.67665, lat: 36.31330 },
                zoom: 6.53,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'place-label',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [

            ]
        },
    ]
};
