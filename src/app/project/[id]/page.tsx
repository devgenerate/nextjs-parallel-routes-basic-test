interface Props {
    params: {
        id: number
    }
}

function ProjectPage({ params }: Props) {
    return (
        <h2>Project: {params.id}</h2>
    );
}

export default ProjectPage;
