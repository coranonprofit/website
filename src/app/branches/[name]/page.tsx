export default function BranchPage({ params }: { params: { name: string } }) {
    return <p>Branch page for {params.name}</p>
}