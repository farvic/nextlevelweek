const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'John Smith',
        avatar: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/71/David_Tennant.jpg/revision/latest/top-crop/width/360/height/450?cb=20100120222705',
        whatsapp: '8998877665',
        bio: 'Physics.',
    }

    classValue = {
        subject: 5,
        cost: '30',
        // prof_id will come from db
    }

    classScheduleValues = [
        {
            weekday: 2,
            time_from: 780,
            time_to: 1280
        },
        {
            weekday: 4,
            time_from: 840,
            time_to: 1300
        }
    ]

    //Consultar os dados inseridos

    // await createProffy(db,{proffyValue, classValue, classScheduleValues})

    // All proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // console.log(selectedProffys)

    // All classes and proffys

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    /*
    requested time has to be >= than time_from and <= than time_to
    */

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE sclass_schedule.class_id = "5"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "1200"
        AND class_schedule.time_to > "1200"
    `)
})