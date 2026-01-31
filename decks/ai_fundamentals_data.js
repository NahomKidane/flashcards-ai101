
const allFlashcards = [
    //Core AI Concepts
    { topic: 'Core AI Concepts', question: 'What is the core aim of Artificial Intelligence (AI)?', answer: 'To develop systems that simulate human intelligence and act rationally to solve complex problems through data-driven decisions.' },
    { topic: 'Core AI Concepts', question: 'Which core component of AI involves logical frameworks and symbolic approaches to draw conclusions?', answer: 'Reasoning' },
    { topic: 'Core AI Concepts', question: 'What is Knowledge Representation in the context of AI foundations?', answer: 'Focuses on structuring and organizing information in a meaningful way for computational processing.' },
    { topic: 'Core AI Concepts', question: 'Which AI component focuses on formulating strategies to achieve specific goals?', answer: 'Planning' },

    // Natural Language Processing
    { topic: 'Natural Language Processing', question: 'What is the primary role of Natural Language Processing (NLP) in AI?', answer: 'To enable communication between humans and machines through language.' },
    { topic: 'Natural Language Processing', question: 'Which discipline provides AI with structures and rules that govern language?', answer: 'Linguistics' },
    { topic: 'Natural Language Processing', question: 'What architectural innovation in 2018 revolutionized natural language processing?', answer: 'Transformers' },

    // Perception & Robotics
    { topic: 'Perception & Robotics', question: 'Which AI sensory systems provide environmental awareness through computer vision?', answer: 'Perception' },
    { topic: 'Perception & Robotics', question: 'What is the role of actuators in AI robotics?', answer: 'Physical components such as motors or hydraulics that enable a robot to perform movements.' },
    { topic: 'Perception & Robotics', question: 'In robotics, which component processes sensor data to manage the behavior of actuators?', answer: 'Control Systems' },
    { topic: 'Perception & Robotics', question: 'What is the purpose of Human-Robot Interaction components in robotics?', answer: 'To provide interfaces for communication between robots and people.' },

    // Machine Learning Fundamentals
    { topic: 'Machine Learning Fundamentals', question: 'Is Machine Learning a branch of AI that focuses on creating systems that learn from data?', answer: 'Yes, Machine Learning enables systems to learn and improve from experience without being explicitly programmed.' },
    { topic: 'Machine Learning Fundamentals', question: 'Which machine learning approach uses labeled input-output pairs for training?', answer: 'Supervised Learning' },
    { topic: 'Machine Learning Fundamentals', question: 'What is the primary goal of Unsupervised Learning?', answer: 'To discover hidden structures and patterns in unlabeled data without explicit guidance.' },
    { topic: 'Machine Learning Fundamentals', question: 'How does Reinforcement Learning (RL) optimize the behavior of an agent?', answer: 'Through trial and error using a system of rewards and penalties.' },
    { topic: 'Machine Learning Fundamentals', question: 'What is Customer Segmentation an example of in Machine Learning?', answer: 'Unsupervised Learning' },
    { topic: 'Machine Learning Fundamentals', question: 'Which machine learning paradigm is used to train self-driving cars to navigate complex road conditions?', answer: 'Reinforcement Learning' },

    // Deep Learning
    { topic: 'Deep Learning', question: 'What is the relationship between Deep Learning and Machine Learning?', answer: 'Deep Learning is a specialized subset of Machine Learning based on Artificial Neural Networks.' },
    { topic: 'Deep Learning', question: 'What does the term deep represent in the phrase Deep Learning?', answer: 'The presence of multiple processing layers within the neural network.' },
    { topic: 'Deep Learning', question: 'Which specific Deep Learning model revolutionized protein structure prediction?', answer: 'AlphaFold' },
    { topic: 'Deep Learning', question: 'What does End-to-End Learning refer to in Deep Learning?', answer: 'The ability of a system to learn directly from raw input to the desired output.' },
    { topic: 'Deep Learning', question: 'What is Automatic Feature Extraction in Deep Learning?', answer: 'The system\'s ability to learn important data features directly without human engineering.' },

    // AI Classification
    { topic: 'AI Classification', question: 'What is the defining characteristic of Narrow AI (ANI)?', answer: 'It is specialized and trained to excel at one specific task or domain.' },
    { topic: 'AI Classification', question: 'Which classification of AI refers to human-level intelligence across diverse tasks but remains theoretical?', answer: 'General AI (AGI)' },
    { topic: 'AI Classification', question: 'What is Superintelligence (ASI)?', answer: 'A purely hypothetical level of AI that would exceed human capabilities across all domains.' },
    { topic: 'AI Classification', question: 'Why is it difficult to expand Narrow AI systems beyond their niche?', answer: 'Their algorithms do not easily transfer to different domains without extensive retraining.' },
    { topic: 'AI Classification', question: 'Which AI classification describes spam filters and product recommendation engines?', answer: 'Narrow AI (ANI)' },
    { topic: 'AI Classification', question: 'Which classification describes an AI that can apply intelligence across any intellectual task a human can?', answer: 'General AI (AGI)' },

    // AI History
    { topic: 'AI History', question: 'Which era of AI history was characterized by rule-based systems and explicit knowledge representation?', answer: 'Classical AI (mid-20th century to 1980s)' },
    { topic: 'AI History', question: 'Why were classical AI systems described as brittle?', answer: 'They performed poorly when encountering scenarios outside their explicitly programmed rules.' },
    { topic: 'AI History', question: 'What was the purpose of the 1970s expert system MYCIN?', answer: 'To diagnose infectious diseases using human knowledge encoded into the machine.' },
    { topic: 'AI History', question: 'How did IBM\'s Deep Blue defeat world champion Garry Kasparov in 1997?', answer: 'Through brute-force search and evaluation algorithms to find optimal chess moves.' },
    { topic: 'AI History', question: 'Which AI era moved from hand-coded rules to data-driven learning?', answer: 'The Modern AI Era (1990s-Today)' },

    // Traditional vs AI Systems
    { topic: 'Traditional vs AI Systems', question: 'What defines the functionality of a non-AI or traditional computing system?', answer: 'It relies on explicit, predefined rules and human-programmed instructions.' },
    { topic: 'Traditional vs AI Systems', question: 'What does it mean for a non-AI system to be deterministic?', answer: 'It will always produce the same output for a given input based on fixed instructions.' },
    { topic: 'Traditional vs AI Systems', question: 'What is a primary limitation of traditional thermostats compared to smart thermostats?', answer: 'They operate on fixed rules and lack the ability to learn or adapt to user preferences.' },

    // Generative vs Predictive Models
    { topic: 'Generative vs Predictive Models', question: 'Which type of Artificial Neural Networks generates data similar to the data it was trained on?', answer: 'Generative AI' },
    { topic: 'Generative vs Predictive Models', question: 'What is the primary goal of a Predictive Model in AI?', answer: 'To map input data to an output prediction or classification.' },
    { topic: 'Generative vs Predictive Models', question: 'How do Generative Models create new, original data instances?', answer: 'By learning and modeling the underlying probability distribution of the training data.' },
    { topic: 'Generative vs Predictive Models', question: 'Is Sentiment Analysis an example of a Predictive or Generative model?', answer: 'Sentiment Analysis is a Predictive Model.' },

    // Generative AI
    { topic: 'Generative AI', question: 'What is Fine-tuning in Generative AI?', answer: 'Specializing a pre-trained model for specific tasks or with additional guidance.' },
    { topic: 'Generative AI', question: 'Approximately how much did it cost to train the GPT-3 model?', answer: 'Between 4 and 5 million dollars.' },
    { topic: 'Generative AI', question: 'How can you distinguish if an output is NOT Generative AI?', answer: 'The output is a simple number, a discrete class, or a probability rather than new content.' },
    { topic: 'Generative AI', question: 'How can Generative AI assist in the healthcare sector?', answer: 'By synthesizing realistic patient data for research or drafting clinical notes.' },
    { topic: 'Generative AI', question: 'What is Pattern Recognition in the context of Generative AI foundation models?', answer: 'The ability to understand context and relationships within billions of training examples.' },

    // AI Ethics & Safety
    { topic: 'AI Ethics & Safety', question: 'In AI development, what does it mean for a model to be prone to bias?', answer: 'The system learns and perpetuates human prejudices found in its historical training data.' },
    { topic: 'AI Ethics & Safety', question: 'What is a hallucination in AI ethics?', answer: 'When a model presents incorrect information with the same confidence as factual data.' },
    { topic: 'AI Ethics & Safety', question: 'What is a Deepfake?', answer: 'Convincing fake media created by AI for purposes such as disinformation or fraud.' },

    // Interdisciplinary Foundations
    { topic: 'Interdisciplinary Foundations', question: 'How does AI use the academic field of Philosophy?', answer: 'By drawing on logic, ethics, and epistemology to guide system behavior and development.' },
    { topic: 'Interdisciplinary Foundations', question: 'Which academic field contributes to AI by providing computational theory and algorithms?', answer: 'Computer Science' },
    { topic: 'Interdisciplinary Foundations', question: 'Which academic field helps AI practitioners understand human reasoning and learning?', answer: 'Cognitive Science' },

    // Unsupervised Learning
    { topic: 'Unsupervised Learning', question: 'What is an example of an Unsupervised Learning task in image classification?', answer: 'Grouping visually similar images into clusters based on discovered features.' },
    { topic: 'Unsupervised Learning', question: 'What is Topic Modeling an example of in Machine Learning?', answer: 'Unsupervised Learning' },

    // Supervised Learning
    { topic: 'Supervised Learning', question: 'How does the model learn to classify images in Supervised Learning?', answer: 'By associating visual features with explicit tags such as cat or dog provided in the training set.' },

    // Reinforcement Learning Applications
    { topic: 'Reinforcement Learning Applications', question: 'Why is Reinforcement Learning suitable for financial trading?', answer: 'It can learn optimal buying and selling strategies to maximize rewards in dynamic markets.' },

    // AI Applications
    { topic: 'AI Applications', question: 'What is an example of AI content recommendation in everyday life?', answer: 'Platforms such as Netflix or Spotify suggesting media based on user behavior.' },
    { topic: 'AI Applications', question: 'What is the primary data requirement for modern AI models to learn effectively?', answer: 'They require vast amounts of data examples to identify patterns effectively.' },
    { topic: 'AI Applications', question: 'What is Brute-force search in the context of Classical AI?', answer: 'An algorithm that evaluates all possible solutions to find the optimal one.' },
    { topic: 'AI Applications', question: 'What is a significant innovation advantage of Artificial Narrow Intelligence?', answer: 'It serves as the building block for technologies such as computer vision and autonomous systems.' }
];

