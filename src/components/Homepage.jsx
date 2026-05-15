import { useState, useEffect } from "react";
import MoodInput from "./MoodInput";
import MoodList from "./MoodList";

const Homepage = () => {
    const [moodHistory, setMoodHistory] = useState(() => {
        const savedMoods = localStorage.getItem('moodHistory');
        return savedMoods ? JSON.parse(savedMoods) : []
    });
    const addMood = (mood) => {
        const now = new Date();
        const newMood = {
            id: Date.now(),
            name: mood.name,
            emoji: mood.emoji,
            color: mood.color,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            timestamp: now
        };
        setMoodHistory((prev) => [...prev, newMood]);
    }

    
    // useEffect(() => {
    //     const savedMoods = JSON.parse(
    //         localStorage.getItem('moodHistory')
    //     );

    //     if (savedMoods) {
    //         setMoodHistory(savedMoods);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory)
        );
    }, [moodHistory]);

    return (
        <div>
            <MoodInput addMood = { addMood } />
            <MoodList moodHistory = { moodHistory } />
        </div>
    )
    
}

export default Homepage