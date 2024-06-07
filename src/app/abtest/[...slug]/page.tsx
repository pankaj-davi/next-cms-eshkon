export default function Page({ params }: { params: { slug: string[] } }) {
  return <h1>{JSON.stringify(params)}</h1>;
}
