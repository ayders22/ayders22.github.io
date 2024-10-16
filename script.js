// welcome page
document.addEventListener('DOMContentLoaded', () => {
  fetch('welcome.md')
    .then(response => {
      if (!response.ok) {
        throw new Error('Welcome file not found');
      }
      return response.text();
    })
    .then(data => {
      const renderedMarkdown = marked(data);
      document.getElementById('file-content').innerHTML = renderedMarkdown;
    })
    .catch(err => {
      document.getElementById('file-content').textContent = 'Error loading welcome file';
    });
});

// left-bar toggle
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

// on-click file loader
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
        const renderedMarkdown = marked(data);
        document.getElementById('file-content').innerHTML = renderedMarkdown;
      })
      .catch(err => {
        document.getElementById('file-content').textContent = 'Error loading file';
      });
  });
});
