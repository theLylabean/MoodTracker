

const MoodList = ({ moodHistory }) =>{

    return (
        <>
            <div>
                {moodHistory && moodHistory.length > 0 ? (moodHistory.map((mood) => (
                    <div key={mood.id}>
                        {mood.name} &nbsp;
                        {mood.emoji}
                    </div>
                ))
            ) : (
                <p>No mood history.</p>
            )}
            </div>
        </>
    )
}

export default MoodList