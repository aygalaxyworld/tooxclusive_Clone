export default async function songsId({params, searchParams}: {params: Promise<{songsId: string}>; searchParams: Promise<{search?: string, filter?: string}>}) {
  const {songsId} = await params; 
  const {search} = await searchParams; 
  const {filter} = await searchParams; 
  
  return (
    <div>
    <h1>Welcome to the {songsId} page</h1>
    {
      search || filter? (<h1>Music by {search} and filtered to {filter}</h1>) : null
    }
    </div>
  )
}
