export default function Header(props: any) {
    return (
        <div className="flex w-full h-12 shadow-sm items-center justify-end">
            <div className="w-full md:w-1/2 lg:w-1/4 flex gap-2 items-center">
                <h1>Active Player:</h1>
                <h1 className="animate-pulse text-purple-80">Player 1</h1>
            </div>
        </div>
    );
}