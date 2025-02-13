#-------------- Exercise 2

import json

sample_json ="""{
    "company":{
        "employee":{
            "name":"emma",
            "payable":{
                "salary":7000,
                "bonus":800
            }
        }
    }
}"""

data = json.loads(sample_json)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1990-01-01"

json_file="my_file.json"

with open(json_file, "w") as json_obj:
    json.dump(data, json_obj)
