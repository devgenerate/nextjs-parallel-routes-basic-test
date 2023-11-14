const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function UserProfilePage() {
    await delay(2000)

    return (
        <h2>UserProfilePage</h2>
    );
}

export default UserProfilePage;
