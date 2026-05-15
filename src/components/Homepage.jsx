import { useState } from "react";
import MoodInput from "./MoodInput";
import MoodList from "./MoodList";

const Homepage = () => {
    const [moodHistory, setMoodHistory] = useState([]);
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

    return (
        <div>
            <MoodList moodHistory = { moodHistory } />
        </div>
    )
    
}

export default Homepage