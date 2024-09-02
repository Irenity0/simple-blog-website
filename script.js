document.addEventListener('DOMContentLoaded', function() {
    fetch('blogs.json')
    .then(response => response.json())
    .then(data => {
        const blogList = document.getElementById('blog-list');
        data.blogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog');
            blogElement.innerHTML = `
                <h1 class="blog-title"><a href="blog-detail.html?slug=${blog.slug}">${blog.title}</a></h1>
                <div class="info grey d-f">
                    <span class="date">${blog.date}</span>
                    <span class="time">• ${blog.readTime}</span>
                </div>
                <p>${blog.excerpt}</p>
            `;
            blogList.appendChild(blogElement);
        });
    })
    .catch(error => console.error('Error fetching blog data:', error));
});


