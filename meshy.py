import requests

payload = {
"mode": "refine",
"preview_task_id": "018a210d-8ba4-705c-b111-1f1776f7f578"
}
headers = {
"Authorization": f"Bearer msy_s2Je5Mdiz9NUcBE4x2RaBkDacmkNRD6IRESL"
}

response = requests.post(
"https://api.meshy.ai/v2/text-to-3d",
headers=headers,
json=payload,
)
response.raise_for_status()
print(response.json())
