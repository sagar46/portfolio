import React, {useEffect, useState} from 'react';

const Github = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = "sagar46"; // Replace with your GitHub username
    const excludedRepos = ["sagar46", "bootstrap"]; // List of repos to exclude

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    throw new Error("Failed to fetch repositories");
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto text-center py-10">
            <div>
                <h2 className="text-4xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                    GitHub
                </h2>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-white mb-6 inline-block pb-2 transition-all duration-300 border-b-2 border-transparent hover:border-white py-10">
                    My repositories
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos
                    .filter((repo) => !excludedRepos.includes(repo.name))
                    .map((repo) => (
                        <div
                            key={repo.id}
                            className="p-4 rounded-lg transform transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h3>
                            <p className="text-gray-300">{repo.description || "No description provided"}</p>
                            <div className="text-sm text-gray-400 mt-2">
                                ⭐ {repo.stargazers_count} | Forks: {repo.forks_count}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Github;
