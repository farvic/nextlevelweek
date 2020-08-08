const Database = require('./db')

Database.then( (db) => {
    // Inserir dados

    proffy = {
        name: 'John Smith',
        avatar: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/71/David_Tennant.jpg/revision/latest/top-crop/width/360/height/450?cb=20100120222705',
        whatsapp: '8998877665',
        bio: 'Matemágico.',
    }

    classValue = {
        subject: 'Matemática',
        cost: '30',
        // prof_id will come from db
    }

    classSchedule = [
        {
            weekday: 2,
            time_from: 780,
            time_to: 1280
        },
        {
            weekday: 4,
            time_from: 840,
            time_to: 1320
        }
    ]

    //Consultar os dados inseridos


})