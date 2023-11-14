interface Props {
    children: React.ReactNode,
    user: React.ReactNode
}

export default function ProfileLayout(props: Props) {
  return (
    <section className="profile-layout">
        {props.children}
        <section className="profile-user-slot">
            {props.user}
        </section>
    </section>
  )
}
