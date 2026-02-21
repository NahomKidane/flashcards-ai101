
const allFlashcards = [
    {
        "question": "What is considered the foundational component of all modern Artificial Intelligence systems?",
        "answer": "High-quality data. Without reliable data, AI models cannot learn effectively.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "Why is data often called the 'fuel' of AI?",
        "answer": "Because AI systems rely on data to learn and improve.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What happens if an AI model is trained on poor-quality or unrepresentative data?",
        "answer": "The model produces unreliable, inaccurate, or biased results, learning the flaws of its input.",
        "topic": "Data Quality"
    },
    {
        "question": "What does 'Garbage In, Garbage Out' mean?",
        "answer": "Poor input data leads to poor model output.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What capability allows AI to identify patterns in data?",
        "answer": "Pattern recognition.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What type of analytics predicts future outcomes?",
        "answer": "Predictive analytics.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "Why is data volume important in AI?",
        "answer": "More data can improve model learning and generalization.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What is 'data-driven decision making' in the context of business and AI?",
        "answer": "The practice of making strategic choices based on concrete data analysis and interpretation rather than relying solely on intuition or observation.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What is structured data?",
        "answer": "Data organized in rows and columns like spreadsheets or databases.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What constitutes 'unstructured data'?",
        "answer": "Information that lacks a predefined data model or organizational structure, such as text documents, images, audio files, and video streams.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What is labeled data?",
        "answer": "Data that includes input-output pairs for training models.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What is unlabeled data?",
        "answer": "Data without predefined output labels.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What is supervised learning?",
        "answer": "Learning from labeled data.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What is unsupervised learning?",
        "answer": "Learning patterns from unlabeled data.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What is semi-supervised learning?",
        "answer": "Learning using both labeled and unlabeled data.",
        "topic": "Types of Data & Learning"
    },
    {
        "question": "What are the 5 Vs of Big Data?",
        "answer": "Volume, Velocity, Variety, Veracity, and Value.",
        "topic": "Big Data"
    },
    {
        "question": "What does 'Volume' refer to in Big Data?",
        "answer": "The amount of data generated.",
        "topic": "Big Data"
    },
    {
        "question": "What does 'Velocity' refer to in Big Data?",
        "answer": "The speed at which data is generated and processed.",
        "topic": "Big Data"
    },
    {
        "question": "What does 'Variety' refer to in Big Data?",
        "answer": "Different types and formats of data.",
        "topic": "Big Data"
    },
    {
        "question": "What does 'Veracity' refer to in Big Data?",
        "answer": "The reliability and trustworthiness of data.",
        "topic": "Big Data"
    },
    {
        "question": "What does 'Value' refer to in Big Data?",
        "answer": "The usefulness of data for decision-making.",
        "topic": "Big Data"
    },
    {
        "question": "Why is the data collection phase critical in developing an AI pipeline?",
        "answer": "Because the ultimate performance, accuracy, and fairness of the AI model directly depend on the quality, volume, and relevance of the data collected.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What does TACCV stand for?",
        "answer": "Timeliness, Accuracy, Completeness, Consistency, and Validity.",
        "topic": "Data Quality"
    },
    {
        "question": "What does Timeliness mean in data quality?",
        "answer": "Data is up-to-date and available when needed.",
        "topic": "Data Quality"
    },
    {
        "question": "What does Accuracy mean in data quality?",
        "answer": "Data correctly represents real-world values.",
        "topic": "Data Quality"
    },
    {
        "question": "What does Completeness mean in data quality?",
        "answer": "All required data is captured.",
        "topic": "Data Quality"
    },
    {
        "question": "What does Consistency mean in data quality?",
        "answer": "Data is uniform across different sources.",
        "topic": "Data Quality"
    },
    {
        "question": "What does Validity mean in data quality?",
        "answer": "Data measures what it is intended to measure.",
        "topic": "Data Quality"
    },
    {
        "question": "What is 'data drift' (or concept drift) in machine learning?",
        "answer": "A phenomenon where the statistical properties of the target variable change over time, causing a previously trained model's accuracy to degrade because its training data no longer represents the current environment.",
        "topic": "Data Quality"
    },
    {
        "question": "Why did the 'Google Flu Trends' predictive model ultimately fail?",
        "answer": "It suffered from 'big data hubris' and data drift. It relied on flawed assumptions, lacked proper data validation, and failed to account for changes in search behavior over time.",
        "topic": "Data Fundamentals"
    },
    {
        "question": "What is data preprocessing?",
        "answer": "Preparing raw data for analysis or model training.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What are missing values?",
        "answer": "Gaps in data where information is not recorded.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is mean imputation?",
        "answer": "Replacing missing values with the average value.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is median imputation?",
        "answer": "Replacing missing values with the middle value.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is deletion in handling missing data?",
        "answer": "Removing records with missing values.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What are outliers?",
        "answer": "Data points that differ significantly from others.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "In data analysis, why can outliers be problematic for certain AI algorithms?",
        "answer": "They can significantly distort statistical measures (like the mean) and disproportionately influence model training, leading to poorer generalization on typical data.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "When should outliers be kept?",
        "answer": "When they represent meaningful rare events.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is normalization?",
        "answer": "Rescaling data to a common range.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is Min-Max scaling?",
        "answer": "Scaling values to a 0–1 range.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is Z-score standardization?",
        "answer": "Centering data around the mean with unit variance.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "Why is normalization important?",
        "answer": "Because some algorithms are sensitive to feature scale.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is down-sampling?",
        "answer": "Reducing dataset size while preserving important information.",
        "topic": "Data Preprocessing"
    },
    {
        "question": "What is feature engineering?",
        "answer": "Creating or selecting useful input variables for a model.",
        "topic": "Feature Engineering"
    },
    {
        "question": "What is a feature in machine learning?",
        "answer": "A measurable property used as input to a model.",
        "topic": "Feature Engineering"
    },
    {
        "question": "What is feature extraction?",
        "answer": "Deriving meaningful features from raw data.",
        "topic": "Feature Engineering"
    },
    {
        "question": "What is feature selection?",
        "answer": "Choosing the most relevant features for a model.",
        "topic": "Feature Engineering"
    },
    {
        "question": "Why is feature selection important?",
        "answer": "It reduces complexity and improves generalization.",
        "topic": "Feature Engineering"
    },
    {
        "question": "What is dimensionality reduction?",
        "answer": "Reducing the number of features while preserving information.",
        "topic": "Feature Engineering"
    },
    {
        "question": "What is the 'curse of dimensionality' in machine learning?",
        "answer": "The phenomenon where as the number of features (dimensions) increases, the volume of the feature space grows exponentially, making the data sparse and causing model performance to degrade unless accompanied by a massive increase in data volume.",
        "topic": "Feature Engineering"
    },
    {
        "question": "Why do high-dimensional datasets require more data?",
        "answer": "Because more features require more samples to avoid overfitting.",
        "topic": "Data Fundamentals"
    }
];
