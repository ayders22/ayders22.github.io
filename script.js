document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display the welcome markdown file when the page loads
  fetch('welcome.md') // Use the correct path to your welcome markdown
    .then(response => {
      if (!response.ok) {
        throw new Error('Welcome file not found');
      }
      return response.text();
    })
    .then(data => {
      const renderedMarkdown = marked(data); // Convert markdown to HTML
      document.getElementById('file-content').innerHTML = renderedMarkdown; // Display the rendered HTML
    })
    .catch(err => {
      console.error(err); // Log the error for debugging
      document.getElementById('file-content').textContent = 'Error loading welcome file';
    });
});

// Handle folder toggling
document.querySelectorAll('.folder-toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const folder = document.getElementById(targetId);

    if (folder.style.display === "none" || !folder.style.display) {
      folder.style.display = "block";
      this.classList.add("open");
    } else {
      folder.style.display = "none";
      this.classList.remove("open");
    }
  });
});

// Handle file loading and markdown rendering
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const file = this.getAttribute('data-file');
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found');
        }
        return response.text();
      })
      .then(data => {
        const renderedMarkdown = marked(data); // Convert markdown to HTML using Marked.js
        document.getElementById('file-content').innerHTML = renderedMarkdown;
      })
      .catch(err => {
        console.error(err); // Log the error for debugging
        document.getElementById('file-content').textContent = 'Error loading fileeeee';
      });
  });
});

