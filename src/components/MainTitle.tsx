export function MainTitle({text, uppercase} : {text?: string, uppercase?: boolean}) {
    return (
        <h1 className={`${uppercase ? 'uppercase' : ''} text-center text-5xl sm:text-6xl font-bold`}>{text}</h1>
    )
}
