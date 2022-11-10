type HelloWorldProps = {
    name: string;
    onSendWaves?: (waves: string) => void;
};

export const HelloWorld = ({ name, onSendWaves }: HelloWorldProps) => {
    return (
        <div>
            <p>Hello {name}!</p>
            {!!onSendWaves && (
                <button
                type="button"
                onClick={() => 
                    onSendWaves(`Waves sent to ${name}!`)}
                >
                Send 👋
                </button>
            )}
        </div>
    );
};
    