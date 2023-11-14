interface Props {
    params: {
        id: number
    }
}

function DashboardProject({ params }: Props) {
    return (
      <div>
        <h2>DashboardProject: {params.id}</h2>
      </div>
    );
}

export default DashboardProject;
