
const MoodInput = ({addMood}) => {
    const handleMoodClick = (mood) => {
        addMood(mood);
    };

    return (
        <div>
            <button onClick={() => handleMoodClick({
                name: 'Silly',
                emoji: '😋',
                color:''
            })}>
                Silly
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Happy',
                emoji: '☺️',
                color:''
            })}>
                Happy
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Sad',
                emoji: '🥺',
                color: ''
            })}>
                Sad
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Mad',
                emoji: '🤬',
                color: ''
            })}>
                Mad/Furious
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Embarrassed',
                emoji: '🫪',
                color: ''
            })}>
                Embarrassed
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Anxious',
                emoji: '😰',
                color: ''
            })}>
                Anxious
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Tired',
                emoji: '🫩',
                color: ''
            })}>
                Tired/Sleepy
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Detached',
                emoji: '🫥',
                color: ''
            })}>
                Detached
            </button>
            &nbsp;
            <button onClick={() => handleMoodClick({
                name: 'Relieved',
                emoji: '😮‍💨',
                color: ''
            })}>
                Relieved
            </button>
        </div>
    )
}

export default MoodInput