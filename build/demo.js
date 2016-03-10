$(function() {
    $('.search__field').focus(function(){
        $(this).closest('.search').find('.search-result').removeClass('hidden')
    })
    $('.search__field').blur(function(){
        $(this).closest('.search').find('.search-result').addClass('hidden')
    })

    $('.finder__field-text').focus(function(){
        $(this).closest('.finder__field').find('.search-result').removeClass('hidden')
    })
    $('.finder__field-text').blur(function(){
        $(this).closest('.finder__field').find('.search-result').addClass('hidden')
    })
    //$('#select-area').modal();

    function my_callback_function(s){
        console.log('lo=', s)
    }
    //my_callback_function()

    //$.ajax({
    //    url: "https://vrachi.dev.doc.ua/api/doctor/doctors?specialty=venerolog",
    //    data: {},
    //    success: function (data) {
    //        console.log('data=', data)   
    //    }
    //});
    
});

clinics = [
    {
        id: "c1",
        address: "пр. Петра Григоренка, 13 б",
        directions: "Гастроэнтерология, гинекология, кардиология, неврология, отоларингология, пластическая хирургия.",
        name: "Инсайт Медикал",
        image: "/i/_insightmedical.png",
        rating: 5,
        reviews: 134
    },
    {
        id: "c2",
        name: 'Исида',
        image: "/i/_isida.jpg",
        affilates: [
            {
                id: "f1",
                address: "ул. Раисы Окипной, 21",
                directions: "Гастроэнтерология, гинекология, кардиология, неврология",
                name: "Филиал «Левобережный»",
                rating: 2,
                reviews: 14
            },
            {
                id: "f2",
                address: "Богдана Хмельницкого 16-22",
                directions: "Гастроэнтерология, гинекология, кардиология, неврология",
                name: "Филиал «Оболонь»",
                rating: 5,
                reviews: 11
            },
            {
                id: "f3",
                address: "Богатырская 2",
                directions: "Гастроэнтерология, гинекология, кардиология, неврология",
                name: "Филиал «Оболонь 2»",
                rating: 4,
                reviews: 7
            },
            {
                id: "f4",
                address: "ул. Теодора Драйзера, 4",
                directions: "Гастроэнтерология, гинекология, кардиология, неврология",
                name: "Филиал «Троещина»",
                rating: 3,
                reviews: 17
            },
            {
                id: "f5",
                address: "Ирпенская 2",
                directions: "Гастроэнтерология, гинекология, кардиология, неврология",
                name: "Филиал «Святошин»",
                rating: 2,
                reviews: 7
            }
        ]
    },
    {
        id: "c3",
        address: "Набережно луговая 8",
        directions: "Гастроэнтерология, гинекология, кардиология, неврология, отоларингология, пластическая хирургия.",
        name: "Добробут",
        image: "/i/_insightmedical.png",
        rating: 3,
        reviews: 127

    }
]


clinics2 = [
    {
        id: "c6",
        address: "Харьковское шоссе 150",
        directions: "Гастроэнтерология, гинекология, кардиология, неврология, отоларингология, пластическая хирургия.",
        name: "Инсайт Медикал",
        image: "/i/_insightmedical.png",
        rating: 4,
        reviews: 151
    },
    {
        id: "c7",
        address: "Ивана Кудри 2",
        directions: "Гастроэнтерология, гинекология, кардиология, неврология, отоларингология, пластическая хирургия.",
        name: "Добробут",
        image: "/i/_insightmedical.png",
        rating: 5,
        reviews: 712
    }
]

doctors = [
    {
        id: "c1",
        name: "Александрийский Константин Константинович",
        rating: 4.2,
        specialty: "Дерматолог, Трихолог",
        image: "/i/_alexandriyskiy-constantin.jpg",
        affilates: [
            {
                id: "f1",
                name: "Здоровая семья",
                address: "проспект Науки 30"
            },
            {
                id: "f2",
                name: "Инсайт Медикал",
                address: "пр. Петра Григоренка, 13 б"
            }
        ]
    },
    {
        name: "Доктор Константин Сергеевич",
        rating: 3.8,
        specialty: "Косметолог",
        image: "/i/_alexandriyskiy-constantin.jpg",
        affilates: [
            {
                id: "f3",
                name: "Здоровая семья",
                address: "Артема 12"
            }
        ]
    }
]

var subUrl = location.pathname.split('/')[1];

if (subUrl === 'clinics.html')
    google.maps.event.addDomListener(window, 'load', docMaps.initialize(clinics, 'clinics', 'Киев', 'vrachi.dev.doc.ua'));

if (subUrl === 'map.html') {
    google.maps.event.addDomListener(window, 'load', docMaps.initialize(clinics, 'map', 'Киев', 'vrachi.dev.doc.ua'));
    //$.ajax({
    //    url: 'https://vrachi.dev.doc.ua/api/hospital/hospitals?cityId=1',
    //    data: {},
    //    success: function(data) {
    //        google.maps.event.addDomListener(window, 'load', docMaps.initialize(data, 'map', 'Киев', 'vrachi.dev.doc.ua'));
    //    }
    //})
}

if (subUrl === 'doctors.html')
    google.maps.event.addDomListener(window, 'load', docMaps.initialize(doctors, 'doctors', 'Киев', 'vrachi.dev.doc.ua'));

if (subUrl === 'doctor-consultation.html')
    google.maps.event.addDomListener(window, 'load', docMaps.initialize(doctors[0].affilates, 'doctorInner', 'Киев', 'vrachi.dev.doc.ua'));

if (subUrl === 'clinic-inner.html')
    google.maps.event.addDomListener(window, 'load', docMaps.initialize(doctors[0].affilates, 'clinicInner', 'Киев', 'vrachi.dev.doc.ua'));

$.mockjax({
    url: /\/map-doctors/i,
    responseText: {
        status: "success",
        doctors: doctors
    }
});