document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');
    const loadPrevButton = document.getElementById('load-prev');
    const loadNextButton = document.getElementById('load-next');

    let currentPage = 1;
    const updatesPerPage = 6;

    const sampleUpdates = [
        {
            title: 'Returning to +FuzzyMAD 2024: Another Year of Fuzzy Logic and Collaboration in Madrid!',
            content:
                "I'm thrilled to be heading back to the UCM Facultad de Ciencias Matemáticas on December 13th for the 17th edition of +FuzzyMAD, reconnecting with colleagues, sharing research, and exploring new collaborations in the field of fuzzy logic.",
            imageUrl: 'img/FuzzyMAD-2024.jpg',
            date: '2024-12-13',
            link: 'https://eventos.ucm.es/125571/detail/fuzzymad-2024.html',
        },
        {
            title: 'My Experience at +FuzzyMAD 2023: Celebrating 16 Years of Fuzzy Logic and Soft Computing in Madrid.',
            content:
                'I joined fellow researchers and professionals at the UCM Facultad de Ciencias Matemáticas to celebrate the 16th edition of +FuzzyMAD, where we explored fuzzy sets, soft computing, and collaborative projects.',
            imageUrl: 'img/FuzzyMAD-2023.jpg',
            date: '2023-11-17',
            link: 'https://eventos.ucm.es/105243/detail/fuzzymad-2023.html',
        },
        {
            title: 'Announcing the Release of the CGT Library on GitHub.',
            content:
                "We've launched the CGT library on GitHub! It's a Python toolkit for Cooperative Game Theory, enabling computations and visualizations of Shapley values, Grabisch interactions, and more. CGT includes modules for data exploration and features SHAP analysis for feature importance.",
            imageUrl: 'img/github_logo.png',
            date: '2023-10-30',
            link: 'https://github.com/perez-sechi/cgt',
        },
        {
            title: 'Launched the hyTeams app: Empowering Businesses with Dynamic Workspaces.',
            content:
                'Oversaw the complete lifecycle of hyTeams, a new digital workspace management solution, from initial design to successful launch in May 2022. hyTeams, developed by BICG, leverages 25+ years of experience to empower businesses to create flexible, efficient, and dynamic work environments through advanced technology and strategic insights.',
            imageUrl: 'img/hyteams_logo.png',
            date: '2022-05-17',
            link: 'https://hyteams.app/en/',
        },
        {
            title: 'Publication: Predicting User Engagement in Online News Through Behavior Analysis',
            content:
                "Published my Master's Thesis investigating user behavior in online news consumption. The thesis explores methods to predict user clicks on news articles by analyzing user interaction history and news features, addressing the cold-start problem in news recommendation. It leverages feature engineering and inference techniques, moving beyond traditional collaborative filtering approaches to improve the accuracy of news recommendations and user engagement.",
            imageUrl: 'img/mind.png',
            date: '2021-07-07',
            link: 'https://docta.ucm.es/entities/publication/a455257d-12ac-4867-905e-48f7501cc966',
        },
        {
            title: 'Graduated with MSc in Data Science and Business Intelligence - Universidad Complutense de Madrid',
            content:
                'Successfully completed the Master of Science in Data Science and Business Intelligence program at the Universidad Complutense de Madrid, specializing in advanced data analysis and its application in business strategy. The program culminated in the development of a comprehensive research project, demonstrating proficiency in applying data science methodologies to solve real-world business problems.',
            imageUrl: 'img/ucm_logo.png',
            date: '2021-06-22',
            link: 'https://estudiosestadisticos.ucm.es/master-cienciadatos',
        },
        {
            title: 'Co-founded and Launched the Decathlon Spain Open Source Community',
            content:
                "Spearheaded the initiative to establish and launch the Open Source Community for Decathlon in Spain, contributing to the company's strategic shift towards a digital-first approach. This community fosters collaboration and innovation within Decathlon's engineering team, 15% of which is dedicated to exploring new technologies, wearables, and other advancements.",
            imageUrl: 'img/decathlon-opne-innovation.jpg',
            date: '2017-11-05',
            link: 'https://github.com/customer-stories/decathlon',
        },
        {
            title: 'Awarded "Liberalizacion de las Telecomunicaciones" by COITT for Outstanding Thesis.',
            content:
                'Received the "Liberalizacion de las Telecomunicaciones" award, granted annually by the Official College of Graduates and Technical Engineers of Telecommunication (COITT) to the best Final Degree Projects in the four specializations of Telecommunication Engineering Degrees in Spain.',
            imageUrl: 'img/coitt_2016.jpg',
            date: '2016-12-01',
            link: 'https://www.etsist.upm.es/escuela/comunicaciones_escuela/escuela_actualidad?tipo_evento=2&anyoactual=2016&mesactual=12&idioma=EN?tipo_evento=2&anyoactual=2016&mesactual=12&idioma=EN',
        },
        {
            title: 'BSc Thesis: AROS - A Lightweight, Queue-Based Architecture for Cooperative Robotics',
            content:
                "Developed AROS (Arduino Robot Operating System), a compact and efficient architecture for cooperative robots, as my Bachelor's Thesis. AROS employs a queue-based communication system to facilitate coordination and resource management among robotic components. The project includes the creation of ATP (AROS Transport Protocol) for inter-application communication and demonstrates practical implementation using the Arduino platform and C++.",
            imageUrl: 'img/aros_preview.jpg',
            date: '2016-07-06',
            link: 'https://oa.upm.es/44527/',
        },
        {
            title: 'Graduated Cum Laude with BSc in Telematics Engineering - Universidad Politécnica de Madrid',
            content:
                'Completed the Bachelor of Science in Telematics Engineering program at the Universidad Politécnica de Madrid. This program provided a strong foundation in the design, management, and maintenance of telecommunication systems, telematic networks, and services.',
            imageUrl: 'img/upm_logo.png',
            date: '2016-06-16',
            link: 'https://www.etsist.upm.es/estudios-ingenieria-sistemas-telecomunicaciones-madrid/grados-ingenieria-Madrid/telematica',
        },
        {
            title: 'Released the AROS Project for Distributed Embedded Systems',
            content:
                'Architected and implemented the AROS Project, a decentralized communication framework for embedded devices. Released in December 2015, AROS enables scalable, peer-to-peer communication and collaboration, eliminating the need for centralized coordination. The system supports dynamic environments and is adaptable to changes in hardware and operational conditions, ideal for applications like swarm robotics.',
            imageUrl: 'img/arduino_logo.png',
            date: '2015-12-15',
            link: 'https://github.com/seccijr/es.upm.euitt.pfg.aros/tree/master',
        },
        {
            title: 'Contributed to Development and Design of Frontiersin.org Web Portal Redesign.',
            content:
                "Part of the core team that redesigned and developed the new Frontiersin.org web portal, launched in August 2013. Frontiers is a leading research publisher, and the redesigned portal provided a more streamlined and efficient publishing experience for scientists worldwide.",
            imageUrl: 'img/frontiersin_logo.png',
            date: '2013-08-01',
            link: 'https://www.frontiersin.org/'
        }
    ];

    function loadUpdates(page) {
        const start = (page - 1) * updatesPerPage;
        const end = start + updatesPerPage;
        const currentUpdates = sampleUpdates.slice(start, end);

        updatesContainer.innerHTML = '';

        currentUpdates.forEach((update) => {
            const updateElement = document.createElement('div');
            updateElement.classList.add('update-card');
            updateElement.innerHTML = `
                <img src="${update.imageUrl}" alt="${update.title}">
                <div class="update-info">
                    <a href="${update.link}" class="read-more"><h3>${update.title}</h3></a>
                    <p class="update-date">${update.date}</p>
                    <p>${update.content}</p>
                    <a href="${update.link}" class="read-more">Read More</a>
                </div>
            `;
            updatesContainer.appendChild(updateElement);
        });

        loadPrevButton.disabled = page === 1;
        loadNextButton.disabled = end >= sampleUpdates.length;
    }

    loadUpdates(currentPage);

    loadNextButton.addEventListener('click', () => {
        currentPage++;
        loadUpdates(currentPage);
    });

    loadPrevButton.addEventListener('click', () => {
        currentPage--;
        loadUpdates(currentPage);
    });
});
