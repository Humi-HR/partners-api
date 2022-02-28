# Company Created Webhook

The Company Created webhook is triggered upon creation of a new company in the system.

**Method** : `POST`

### Payload

```json
{
  "company": {
    "id": "e39baea3-e8fc-44b2-92ba-fa2ef34c0d28",
    "name": "Stracke PLC",
    "website": "goyette.com",
    "notification_email": "miller.sandra@harris.biz",
    "status": "N/A",
    "employee_counts": {
      "onboarding": 0,
      "active": 99,
      "terminated": 4,
      "total": 103
    },
    "departments": [
      {
        "id": "cfdb9e10-3359-4bba-8d82-0dd875347e62",
        "name": "Human Resources"
      },
      {
        "id": "5ad2e3d1-14e6-445e-a7b1-07f03595d6f6",
        "name": "Marketing"
      },
      {
        "id": "97a4397b-3465-46c2-a96f-755c7f19fd6b",
        "name": "Customer Service"
      },
      {
        "id": "7acf5b9f-3a8d-4db1-8338-61b674d06974",
        "name": "IT Support"
      },
      {
        "id": "6d7ff651-ff44-480d-b308-4c4dfe7bca0b",
        "name": "Sales"
      },
      {
        "id": "5c685cb1-81e5-4012-9671-c9982806fe25",
        "name": "Accounting and Finance"
      },
      {
        "id": "e21f5e74-bdfa-4e41-b16b-0955f75beb74",
        "name": "Operations"
      },
      {
        "id": "cbb6de84-d8f3-4a16-b8f2-44e710754941",
        "name": "Purchasing"
      },
      {
        "id": "ebb17c54-d02b-4b3a-9e3d-a49732f908b3",
        "name": "Legal"
      },
      {
        "id": "f88d30ed-0c40-4ad9-a037-33a6523d3ebd",
        "name": "Warehouse"
      },
      {
        "id": "b1b5dbed-27a3-4e1c-a39d-cd9d195ccc8f",
        "name": "Human Resources"
      },
      {
        "id": "f2ae3f9b-4137-445e-92e5-98ee6efc7071",
        "name": "Marketing"
      },
      {
        "id": "5215f826-a391-442b-87a9-06810dfe3473",
        "name": "Customer Service"
      },
      {
        "id": "b64d03d9-6e60-4319-b64e-7c0b70d4cdbc",
        "name": "IT Support"
      },
      {
        "id": "859a956e-ee9e-44a8-814f-0c4a84a3d46f",
        "name": "Sales"
      },
      {
        "id": "91a94a32-bbc1-4216-a25d-c1c577172f06",
        "name": "Accounting and Finance"
      },
      {
        "id": "8d2f27b8-c027-41ef-8873-f9cd90241626",
        "name": "Operations"
      },
      {
        "id": "c2ed4241-4c90-4e97-b6ce-039e8e23b915",
        "name": "Purchasing"
      },
      {
        "id": "acd03853-e3f7-46d5-811e-59a001be9beb",
        "name": "Legal"
      },
      {
        "id": "d589c8b4-bf65-481c-a7e2-8e321f9b1e42",
        "name": "Warehouse"
      }
    ],
    "positions": [
      {
        "id": "b9af14cc-84fd-4c38-ba8c-051b11076f6e",
        "name": "Account Executive"
      },
      {
        "id": "591275ab-3bf1-4103-95ed-329335484628",
        "name": "Sales Associate"
      },
      {
        "id": "f32c0492-4b8a-4874-9e6a-474fb74b5ee0",
        "name": "Customer Service Rep"
      },
      {
        "id": "08eb4544-3cd1-482b-90e8-adc0a67cea96",
        "name": "Web Developer"
      },
      {
        "id": "2b5d08b6-d1c9-4594-aa84-ad17704af3ad",
        "name": "Director, Sales"
      },
      {
        "id": "c8f700b1-e5e8-4ecd-88b4-402c3230decc",
        "name": "Director, Finance"
      },
      {
        "id": "0d7d8239-e799-46dd-a82c-89c713704e84",
        "name": "Warehouse Foreman"
      },
      {
        "id": "982377ca-5fe5-49e5-8a70-e3f576fffa2a",
        "name": "Specialist"
      },
      {
        "id": "90d9ff2a-36db-4596-a89e-c458a3e6de71",
        "name": "Marketing Associate"
      },
      {
        "id": "069365e5-6e8f-4a94-a3bd-cabc5a599596",
        "name": "IT Manager"
      },
      {
        "id": "bd64ba18-32e1-49c7-98bc-cad6fe27a886",
        "name": "Web Developer"
      },
      {
        "id": "4da9db55-6306-41ad-8edb-ebae9f7a6234",
        "name": "Marketing Associate"
      },
      {
        "id": "8641ef90-39cd-426a-8d1f-5b224babf7af",
        "name": "Customer Service Rep"
      },
      {
        "id": "5072ecf5-61bd-4660-ae41-e4db8b4a2dae",
        "name": "Customer Service Rep"
      },
      {
        "id": "63bcb052-cff4-4b27-bc02-05c68a298edd",
        "name": "Marketing Associate"
      },
      {
        "id": "694e6ae4-0391-4ffe-8975-4b7f08053757",
        "name": "Director, Finance"
      },
      {
        "id": "514143b8-b449-45a5-a2d7-60a07f3b8cf0",
        "name": "Marketing Associate"
      },
      {
        "id": "f5bfc618-5687-4c2b-a8d2-bff28d02cd1d",
        "name": "Warehouse Foreman"
      },
      {
        "id": "08fd987a-ed9f-4d57-8f7c-8bc6b349cfb6",
        "name": "Web Developer"
      },
      {
        "id": "c8708e4b-f46c-477f-b0ae-40cfd91ce0bd",
        "name": "Sales Associate"
      }
    ],
    "modules": [
      "Payroll",
      "Recruiting",
      "Time Off"
    ]
  }
}
```
