document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    if (!slug) {
        console.error('No blog slug found');
        return;
    }
    
    fetch('blogs/' + slug + '.md')
    .then(response => response.text())
    .then(markdown => {
        const html = marked.parse(markdown);
        document.getElementById('blog-content').innerHTML = html;
    })
    .catch(error => console.error('Error fetching the Markdown file:', error));
});
