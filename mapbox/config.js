var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
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
        // {
        //     id: 'page0',
        //     alignment: 'left',
        //     hidden: true,
        //     title: 'Soongsil University',
        //     // image: './path/to/image/source.png',
        //     // description: '인문대 학우들의 주서식지',
        //     location: {
        //         center: { lon: 127.49292, lat: 36.08664 },
        //         zoom: 6.56,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 1,
        //         //     duration: 5000
        //         // }
        //     ],
        //     onChapterExit: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 0
        //         // }
        //     ]
        // },
        {
            id: 'page00',
            alignment: 'left',
            hidden: true,
            title: 'Soongsil University',
            // image: './path/to/image/source.png',
            // description: '인문대 학우들의 주서식지',
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
                    layer: 'ca-district-fill',
                    opacity: 0.7,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ca-district-fill',
                    opacity: 0,
                }
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
                center: { lon: 127.25216, lat: 37.52301 },
                zoom: 8.73,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gg-district-fill',
                    opacity: 0.7,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'gg-district-fill',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'page02',
            alignment: 'right',
            hidden: true,
            title: '중앙도서관',
            // image: './path/to/image/source.png',
            description: '리모델링 필요',
            location: {
                center: { lon: 126.82289, lat: 37.32431 },
                zoom: 10.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'as-district-fill',
                    opacity: 0.7,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'as-district-fill',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'page03',
            alignment: 'right',
            hidden: true,
            title: '정보과학관',
            // image: './path/to/image/source.png',
            description: 'IT학부생들이 쓰는 건물. 혼자 떨어져있어서 정보섬이라고 불린다.',
            location: {
                center: { lon: 126.79465, lat: 37.32705 },
                zoom: 13.49,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'wg-district-fill',
                    opacity: 0.3,
                    duration: 1000
                },
                {
                    layer: 'wg-district-line',
                    opacity: 0.7,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'wg-district-fill',
                    opacity: 0,
                },
                {
                    layer: 'wg-district-line',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'page04',
            alignment: 'left',
            hidden: true,
            title: '학생회관',
            // image: './path/to/image/source.png',
            description: '학식과 동아리실 등 다양한 공간이 모여있는 학생회관',
            location: {
                center: { lon: 126.79594, lat: 37.32917 },
                zoom: 17.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
