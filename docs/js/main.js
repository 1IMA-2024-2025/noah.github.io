const userTag = "Noahhalv";

const getPFP = async () => {
    const data = await axios('https://api.github.com/users/' + userTag);
    favicon.href = (data.data.avatar_url);
}

getPFP();

print()