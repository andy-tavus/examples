document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');

    fetch('https://api.github.com/users/andy-tavus/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                if (repo.has_pages && !repo.name.startsWith('x')) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `https://${repo.owner.login}.github.io/${repo.name}`;
                    link.textContent = repo.name;
                    listItem.appendChild(link);

                    const description = document.createElement('p');
                    description.textContent = repo.description;
                    listItem.appendChild(description);

                    repoList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
