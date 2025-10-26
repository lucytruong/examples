# 📊 Data Hygiene and Tracking Standards with JSON Schema & AJV

## Overview

This repository outlines our approach to enforcing **data hygiene** and **accurate tracking** using **JSON Schema** for data definition and **AJV** (Another JSON Validator) for runtime validation.

Included here we have also added a Python validator which could be added to the data pipeline to check data coming in from the source and into the views or tables you create.  If the an node AJV validator is added to data validation before data is actually ingested into storage this Python validator shoudl rerturn true all the time becuase the data in would be clean and verified.

By standardizing data validation across services, we improve reliability, analytics quality, and compliance.

---

## 🔍 Why This Matters

### ✅ Data Hygiene
- Prevents malformed or unexpected data from entering our systems.
- Ensures consistent structure and types across all data payloads.
- Reduces downstream bugs and reprocessing costs.

### 📈 Accurate Tracking
- Guarantees tracking events match expected formats.
- Avoids silent analytics failures.
- Improves observability, debugging, and data QA.

***Test files*** :
## The solution
For access to the source validator using AJV and the Python Backend Dataset validator solution and see the code working please contact me for a demo.
### Lucy Truong: Hoaanhl@hotmail.com