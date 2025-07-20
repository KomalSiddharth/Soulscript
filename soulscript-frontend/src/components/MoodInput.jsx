import { useState } from 'react';
import axios from 'axios';

function MoodInput() {
  const [mood, setMood] = useState('');
  const [verse, setVerse] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const generateStory = async () => {
    if (!mood || !verse) {
      setErrorMsg('Please enter both mood and verse.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/story/generate', {
        mood,
        verse,
      });
      setStory(res.data.story);
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to generate story. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">SoulScript — Get Your AI Story</h1>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="text"
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
        placeholder="Enter Bible verse"
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={generateStory}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
      >
        {loading ? 'Generating...' : 'Generate Story'}
      </button>

      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}

      {story && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated Story:</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
}

export default MoodInput;
