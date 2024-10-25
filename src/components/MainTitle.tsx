export function MainTitle({text, uppercase} : {text: string, uppercase?: boolean}) {
    return (
        <h1 className={`${uppercase ? 'uppercase' : ''} text-center text-8xl font-bold`}>{text}</h1>
    )
}