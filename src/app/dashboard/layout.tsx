interface Props {
    children: React.ReactNode,
    section: React.ReactNode
}

export default function DashboardLayout(props: Props) {
  return (
    <section className="dashboard-layout">
        {props.children}
        {props.section}
    </section>
  )
}
