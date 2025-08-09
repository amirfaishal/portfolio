from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from transformers import pipeline
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = FastAPI()

# Load your resume and split into chunks by lines
with open("resume.txt", "r", encoding="utf-8") as f:
    resume_chunks = [line.strip() for line in f if line.strip()]

# Load sentence-transformers embedding model (PyTorch backend)
embedder = SentenceTransformer('all-MiniLM-L6-v2')
resume_embeddings = embedder.encode(resume_chunks)

# Load question-answering pipeline (extractive QA)
qa_pipeline = pipeline("question-answering", model="deepset/roberta-base-squad2")

class Query(BaseModel):
    question: str

@app.post("/ask")
def ask_resume(query: Query):
    question = query.question
    question_emb = embedder.encode([question])[0]

    # Find the most similar chunk from the resume
    similarities = cosine_similarity([question_emb], resume_embeddings)[0]
    best_idx = np.argmax(similarities)
    context = resume_chunks[best_idx]

    # Use the QA pipeline to extract the answer from the context chunk
    result = qa_pipeline(question=question, context=context)

    # Return the extracted answer
    return {"answer": result['answer']}
