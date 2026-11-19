export const profile = {
  name: "Mariam Anwer",
  full: "Mariam Anwer Mohammed Youssef",
  roles: ["AI Engineer", "LLM Applications", "Agentic AI", "Machine Learning"],
  location: "Cairo, Egypt",
  email: "mariam.anwer.mohammed@gmail.com",
  phone: "+20 115 131 1826",
  github: "https://github.com/MariamAnwer820",
  linkedin: "https://www.linkedin.com/in/mariamanwer",
  summary: "I design and build end-to-end AI systems: LLM-powered applications, RAG pipelines, semantic search, QLoRA fine-tuning and intelligent automation. I hold an M.Sc. in Artificial Intelligence and Data Science from Queen’s University and helped deliver an agentic AI system to production at Brightskies.",
};
export const stats = [
  ["7", "Projects built"], ["2", "Years teaching Python"], ["6", "AWS certifications"], ["1", "Published paper"],
];
export const projects = [
  { t: "Data-Driven Agentic Literature Reviewer", tag: "LLM", stack: ["Python", "LLMs", "Agentic AI", "Research automation"], d: "Agentic system that automates literature review and research analysis, built and delivered to production during my Brightskies training.", pts: ["Retrieves, analyses and compares research papers", "Surfaces methodologies, recurring themes and research gaps", "Delivered to production with the Brightskies team"] },
  { t: "Vehicle Insurance Claim Validator", tag: "LLM", stack: ["Python", "FastAPI", "Gemini", "YOLO", "NLP"], d: "AI workflow that checks insurance claims against descriptions, invoices, police reports and damage photos.", pts: ["Built the report-generation layer that merges upstream module outputs and connects them to the API", "Architecture covers damage detection, vehicle-part segmentation, consistency checks and Gemini-based reports"] },
  { t: "AI Student Assistant", tag: "LLM", stack: ["RAG", "LangChain", "Hugging Face", "Streamlit"], d: "Document question-answering app that grounds every answer in the documents you supply.", pts: ["Embedding generation, semantic search and context-aware retrieval", "Interactive Streamlit interface with Hugging Face tools"] },
  { t: "Recipe ChatBot", tag: "LLM", stack: ["AWS", "QLoRA", "LLMs", "Apache Spark"], d: "Cloud-based generative AI app powered by a QLoRA fine-tuned language model.", pts: ["Data preprocessing with Apache Spark, fine-tuning, inference and API integration", "Deployed on AWS EC2 with Ollama and OpenWebUI"] },
  { t: "Customer Churn Prediction", tag: "ML", stack: ["Python", "Scikit-learn", "Pandas", "XGBoost"], d: "Models that predict which customers will leave, to support retention analysis.", pts: ["Logistic Regression, Random Forest, SVM and XGBoost compared", "Evaluated with precision, recall, F1-score and ROC-AUC", "SMOTE applied to handle class imbalance"] },
  { t: "Document Image Classification", tag: "ML", stack: ["CNN", "OCR", "Image processing"], d: "Lightweight CNN classifier for document images, compared with OCR-based text classification.", pts: ["Tested robustness on noisy and rotated images", "Explored a fusion approach to improve accuracy"] },
  { t: "Uni-Assist App", tag: "Mobile", stack: ["Flutter", "REST APIs", "Clean Architecture"], d: "University assistance app with separate user and administrator workflows.", pts: ["Attendance, course materials and student data"] },
];
export const skills = [
  ["Programming", ["Python", "Dart"]],
  ["LLMs & GenAI", ["LLM applications", "RAG", "Semantic search", "Embeddings", "Prompt engineering", "QLoRA fine-tuning", "Hugging Face Transformers", "LangChain"]],
  ["AI engineering", ["REST APIs", "FastAPI", "Streamlit", "Model inference", "Document processing", "Structured outputs", "System integration"]],
  ["Machine learning", ["Scikit-learn", "XGBoost", "Logistic Regression", "Random Forest", "SVM", "CNN", "Feature engineering", "Model evaluation"]],
  ["Data", ["Pandas", "NumPy", "Exploratory analysis", "Data cleaning", "Apache Spark"]],
  ["Cloud & tools", ["AWS EC2", "AWS EMR", "Git", "GitHub", "Jupyter", "VS Code", "Google Colab"]],
];
export const jobs = [
  { r: "AI Engineer Trainee", o: "Brightskies", p: "Sep 2026 – Nov 2026", pts: ["Two-month AI engineering programme focused on real-world applications", "Contributed to development and production delivery of the Data-Driven Agentic Literature Reviewer"] },
  { r: "Python Instructor", o: "Codk Academy", p: "Sep 2024 – Oct 2025", pts: ["Taught Python, data-analysis fundamentals and introductory machine learning", "Guided learners through preprocessing, feature engineering and model development"] },
];
export const edu = [
  ["M.Sc. Artificial Intelligence and Data Science", "Queen’s University, Canada", "2025 – 2026"],
  ["B.Sc. Computer Science", "Benha University, Egypt", "2020 – 2024"],
];
export const paper = { t: "Clinically-Informed Machine Learning for Cardiovascular Disease Risk Prediction: Feature Engineering, Ensemble Modelling, and Decision Threshold Optimisation", v: "ITC Conference", d: "Contributed to the research on feature engineering, ensemble modelling and decision threshold optimisation." };
export const certs = ["AWS Certified Cloud Practitioner", "AWS Academy: Cloud Foundations", "AWS Academy: Machine Learning Foundations", "AWS Academy: Machine Learning for NLP", "AWS Academy: Data Engineering", "AWS Academy: Generative AI Foundations"];
