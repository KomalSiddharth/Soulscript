const storyTemplates = [
  (mood, verse) => `In a quiet village, someone woke up feeling "${mood}". They stumbled upon the verse "${verse}" and it changed their perspective forever.`,
  (mood, verse) => `Life seemed heavy on a "${mood}" morning. But reading the words — "${verse}" — lifted their heart with hope.`,
  (mood, verse) => `They wandered, lost in thoughts of "${mood}". Then, from an old Bible, these words echoed — "${verse}". It felt like a divine whisper.`,
  (mood, verse) => `Even in a crowd, they felt "${mood}". But the verse "${verse}" reminded them — they were never alone.`,
  (mood, verse) => `A storm raged within, stirred by "${mood}". As they read "${verse}", the calm they longed for finally came.`,
  (mood, verse) => `During their darkest "${mood}" moment, a stranger shared "${verse}". Sometimes, God sends answers in unexpected ways.`,
  (mood, verse) => `The weight of "${mood}" seemed unbearable until their eyes caught these words — "${verse}". Suddenly, the burden felt lighter.`,
  (mood, verse) => `Standing by the window, lost in "${mood}", they whispered a prayer. The verse "${verse}" came to mind, and peace followed.`,
  (mood, verse) => `"${mood}" tried to break them. But the verse "${verse}" reminded them that God’s love never fails — not even in brokenness.`,
  (mood, verse) => `They didn’t expect much from that day. But reading "${verse}" in a moment of "${mood}" gave them a new hope.`,
  (mood, verse) => `When fear and "${mood}" crept in, they opened the Bible randomly — and landed on "${verse}". Coincidence? They believed it was God.`,
  (mood, verse) => `On a silent night, overwhelmed by "${mood}", they wrote in their journal. Their heart whispered the words — "${verse}".`,
  (mood, verse) => `While searching for answers to their "${mood}", they discovered "${verse}". And suddenly, things started making sense.`,
  (mood, verse) => `Every day felt like a battle with "${mood}". But this verse — "${verse}" — became their daily armor.`,
  (mood, verse) => `They weren’t sure if they could face another "${mood}" day. But "${verse}" was the reminder they needed to hold on.`
];

exports.generateStory = (req, res) => {
  const { mood, verse } = req.body;

  if (!mood || !verse) {
    return res.status(400).json({ error: 'Mood and Verse are required.' });
  }

  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const story = storyTemplates[randomIndex](mood, verse);

  res.json({ story });
};
