document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');

    fetch('https://api.github.com/users/andy-tavus/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                if (repo.has_pages) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `https://${repo.owner.login}.github.io/${repo.name}`;
                    link.textContent = repo.name;
                    listItem.appendChild(link);
                    repoList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
