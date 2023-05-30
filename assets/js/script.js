let app = new Vue({
    el: '#app',
    data: {
        name: 'Antonio',
        surnames: 'Madrid Carrasco',
        address: 'Santiago, Chile',
        phone: '+56971628685',
        email: 'antoniomadridc@gmail.com',
        job: 'Desarrollador front-end trainee',
        skills: [
            'HTML',
            'CSS',
            'JS',
            'Español nativo',
            'Inglés fluido'
        ],
        experiences: [
            {
                duration: '2023',
                place: 'EduTecno/Talento Digital',
                location: 'Santiago-Chile',
                title: 'Bootcamp Desarrollo de Aplicaciones Front-End Trainee',
                description: 'Programa orientado al desarrollo de las habilidades necesarias para construir y mantener aplicaciones o sitios web, usando el stack de tecnologías fundamentales para el desarrollo front end, es decir HTML, CSS y JavaScript.',
            },
            {
                duration: '2022 - 2023',
                place: 'HablaBonito',
                location: 'Santiago-Chile',
                title: 'Profesor de inglés',
                description: 'Clases individuales y feedback personalizados para los estudiantes, abordando variedad de tópicos.',
            },
            {
                duration: '2016 - 2022',
                place: 'Traductor Independiente',
                location: 'Santiago-Chile',
                title: 'Traductor inglés-español',
                description: 'Traducción y revisión de material publicitario, sitios web, manuales de usuario y atención al cliente, y otros para empresas de tecnología de comunicaciones.',
            },

        ]
    },

})