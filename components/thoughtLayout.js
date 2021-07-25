
export const ThoughtLayout = ({ data }) => {
    return (
        <main className="flex flex-col h-screen text-center space-between justify-evenly mx-10">
            {data && data.map(obj =>
                <>
                    <h1 className="text-4xl font-bold">{obj.thought}</h1>
                    <p>--{obj.author}</p>
                </>
            )}
        </main>
    )
}