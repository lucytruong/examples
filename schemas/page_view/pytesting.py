import pandas as pd
from jsonschema import validate, ValidationError
import json as jsn

import os
print("Current working directory:", os.getcwd())

# Get directory of current script
script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, '../page_view/1_0_0.json')
# Normalize path
json_path = os.path.normpath(json_path)

with open(json_path, 'r') as file:
    loaded_data = jsn.load(file)
    print(loaded_data)

    #Load data validate
    #with open('data.json') as f:
    # data = jsn.load(f)
json_str = '''
    {
    "event" : "page_view",
    "event_name" : "testing_load",
    "customer_id" : "ffee344354",
    "page_name" : "main_home",
    "page_type" : "home",
    "page_login_status" : "logged",
    "schema_version" : "1_01_01"
}
     '''
data =jsn.loads(json_str)

# Step 3: Validate using Pydantic
try:
    validate(instance=data, schema=loaded_data["data"])
    print("✅ Data is valid.")
except ValidationError as e:
    print("❌ Validation failed:")
    print(e.message)