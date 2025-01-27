// Sample data for the "Latest Insights" section
const latestInsights = [
    {
        title: 'The Future of Hybrid Work: Trends and Strategies',
        imageUrl: 'https://placehold.co/600x400?text=Future+of+Work',
        link: '#', // Replace with actual link
        description:
            'Explore the evolving landscape of hybrid work and discover key strategies for success in this new era of work.',
    },
    {
        title: 'Data-Driven Decision Making: A Practical Guide',
        imageUrl: 'https://placehold.co/600x400?text=Data+Driven',
        link: '#', // Replace with actual link
        description: 'Learn how to leverage data analytics to make informed decisions and drive business growth.',
    },
    {
        title: 'Building High-Performing Teams in a Remote World',
        imageUrl: 'https://placehold.co/600x400?text=Remote+Teams',
        link: '#', // Replace with actual link
        description:
            'Discover effective strategies for building and managing high-performing teams in a remote or hybrid work environment.',
    },
    {
        title: 'Cybersecurity Best Practices for the Modern Enterprise',
        imageUrl: 'https://placehold.co/600x400?text=Cybersecurity',
        link: '#', // Replace with actual link
        description:
            'Stay ahead of cyber threats with these essential cybersecurity best practices for businesses of all sizes.',
    },
];

// Function to dynamically populate the "Latest Insights" section
function populateInsightsGrid() {
    const insightsGrid = document.getElementById('insightsGrid');

    latestInsights.forEach((insight) => {
        const insightCard = document.createElement('div');
        insightCard.classList.add('insight-card');

        const img = document.createElement('img');
        img.src = insight.imageUrl;
        img.alt = insight.title;
        insightCard.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('insight-content');

        const title = document.createElement('h3');
        title.textContent = insight.title;
        contentDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = insight.description;
        contentDiv.appendChild(description);

        const link = document.createElement('a');
        link.href = insight.link;
        link.textContent = 'Read More';
        contentDiv.appendChild(link);

        insightCard.appendChild(contentDiv);
        insightsGrid.appendChild(insightCard);
    });
}

// Call the function to populate the grid when the page loads
window.addEventListener('load', populateInsightsGrid);
