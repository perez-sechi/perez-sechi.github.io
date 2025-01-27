document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');
    const loadPrevButton = document.getElementById('load-prev');
    const loadNextButton = document.getElementById('load-next');

    let currentPage = 1;
    const updatesPerPage = 6; // Adjust as needed

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
            imageUrl: 'img/github.png',
            date: '2023-10-30',
            link: 'https://github.com/perez-sechi/cgt',
        },
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
