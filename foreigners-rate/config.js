var config = {
    style: 'mapbox://styles/qlqhaks/cku80ewhp06hi18mqhyptsaud/draft',
    accessToken: 'pk.eyJ1IjoicWxxaGFrcyIsImEiOiJja3M5dGowM24wYzE3Mm9wNW15bjd6d2x3In0.JseYVwX4a3SzUSgKf0jnkg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'page00',
            alignment: 'left',
            hidden: false,
            title: '한국',
            location: {
                center: { lon: 127.65341, lat: 36.15872 },
                zoom: 6.28,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '01',
            alignment: 'left',
            hidden: false,
            title: '안산',
            // image: '조만식.jpg',
            description: '',
            location: {
                center: { lon: 126.65843, lat: 37.33656 },
                zoom: 10.15,
                pitch: 59.00,
                bearing: -20.62
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '3D-extrusions',
                    opacity: 1,
                },
                // {
                //     layer: 'label-black',
                //     opacity: 0,
                // },
                // {
                //     layer: 'label-white',
                //     opacity: 0,
                // }
            ],
            onChapterExit: [
                {
                    layer: '3D-extrusions',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'page02',
            alignment: 'right',
            hidden: false,
            title: '원곡동',
            // image: './path/to/image/source.png',
            description: '',
            location: {
                center: { lon: 126.79727, lat: 37.32144 },
zoom: 12.44,
pitch: 0.00,
bearing: -19.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'choropleth-fill',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'page03',
            alignment: 'right',
            hidden: false,
            title: '외국인 비율 5%이상 도시',
            // image: './path/to/image/source.png',
            description: '',
            location: {
                center: { lon: 127.65341, lat: 36.15872 },
                zoom: 6.58,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-district-fill',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ca-district-fill',
                    opacity: 0,
                }
            ]
        }
    ]
};
