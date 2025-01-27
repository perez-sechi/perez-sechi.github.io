document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');
    const loadPrevButton = document.getElementById('load-prev');
    const loadNextButton = document.getElementById('load-next');

    let currentPage = 1;
    const updatesPerPage = 6; // Adjust as needed

    const sampleUpdates = [
        {
            title: 'Attending the International Conference on AI',
            content:
                "Excited to be a speaker at this year's International Conference on Artificial Intelligence, presenting our latest research on network visualization.",
            imageUrl: 'conference.jpg',
            date: '2023-11-15',
            link: '#',
        },
        {
            title: 'Published New Research on Digital Transformation',
            content:
                "Our team's latest paper, 'Strategies for Successful Digital Transformation in Large Enterprises', has been published in the Journal of Business Technology.",
            imageUrl: 'research.jpg',
            date: '2023-11-01',
            link: '#',
        },
        {
            title: 'Webinar on Cloud Migration Strategies',
            content:
                "Join me in a free webinar where I'll be discussing best practices for migrating legacy systems to the cloud. Register now!",
            imageUrl: 'webinar.jpg',
            date: '2023-10-15',
            link: '#',
        },
        {
            title: 'hyTeams Featured in Tech Magazine',
            content:
                "Proud to see hyTeams highlighted in this month's edition of Tech Solutions Magazine. Our platform is recognized for its innovative approach to optimizing corporate resources.",
            imageUrl: 'magazine-feature.jpg',
            date: '2023-10-01',
            link: '#',
        },
        {
            title: 'Reflecting on a Successful Digital Transformation Project',
            content:
                'Completed a major digital transformation project for a leading retail company, resulting in significant improvements in operational efficiency and customer satisfaction.',
            imageUrl: 'project-success.jpg',
            date: '2023-09-15',
            link: '#',
        },
        {
            title: 'Joining the Advisory Board of a Tech Startup',
            content:
                'Thrilled to join the advisory board of InnovateTech, a promising startup focused on developing AI-driven solutions for the healthcare industry.',
            imageUrl: 'startup.jpg',
            date: '2023-09-01',
            link: '#',
        },
        {
            title: 'Speaking at the National Data Science Symposium',
            content:
                'Honored to be a keynote speaker at the National Data Science Symposium, sharing insights on the future of data science and its impact on business.',
            imageUrl: 'symposium.jpg',
            date: '2023-08-15',
            link: '#',
        },
        {
            title: 'Celebrating 5 Years of Digital Transformation at bicg',
            content:
                "This month marks my 5th anniversary at bicg. Reflecting on the incredible journey and the numerous successful digital transformation initiatives we've launched.",
            imageUrl: 'anniversary.jpg',
            date: '2023-08-01',
            link: '#',
        },
        {
            title: 'Launching the Decathlon Open-Source Community Blog',
            content:
                'Excited to announce the launch of our new blog, where members of the Decathlon Open-Source Community will share their knowledge and experiences.',
            imageUrl: 'community-blog.jpg',
            date: '2023-07-15',
            link: '#',
        },
        {
            title: 'Achieving AWS Certification',
            content:
                'Pleased to announce that I have recently obtained the AWS Certified Solutions Architect certification, further enhancing my cloud expertise.',
            imageUrl: 'certification.jpg',
            date: '2023-07-01',
            link: '#',
        },
        {
            title: 'Volunteering at a Coding Bootcamp for Underprivileged Youth',
            content:
                'Giving back to the community by volunteering as a mentor at a coding bootcamp aimed at providing underprivileged youth with valuable programming skills.',
            imageUrl: 'coding-bootcamp.jpg',
            date: '2023-06-15',
            link: '#',
        },
        {
            title: 'Exploring the Latest Trends in Cybersecurity',
            content:
                'Attending a cybersecurity conference to stay up-to-date with the latest threats and defense strategies in the ever-evolving world of cybersecurity.',
            imageUrl: 'cybersecurity.jpg',
            date: '2023-06-01',
            link: '#',
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
                    <h3>${update.title}</h3>
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
