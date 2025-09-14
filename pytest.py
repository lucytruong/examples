import pandas as pd
data = {
    "Name":["Alice","Bob","Charlie"],
    "Score":[85,90,95]
}
df = pd.DataFrame(data)
print("Sudent Scores:")
print(df)
print("Average Score:",df["Score"].mean())