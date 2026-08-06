import joblib

encoders = joblib.load("models/label_encoders.pkl")

for name, encoder in encoders.items():
    print("=" * 50)
    print(name)
    print(encoder.classes_)