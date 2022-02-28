# Employee Updated Webhook

The Employee Updated webhook is triggered anytime employee information is updated.

**Method** : `POST`

### Payload

```json
{
  "account": {
    "email": "employee22@humi.ca",
    "first_name": "Cecil",
    "last_name": "Blocks",
    "roles": [
      "Employee"
    ]
  },
  "employee": {
    "id": "2dad89f2-62ee-4d7c-8f8d-706ce5ed30d1",
    "first_name": "Cecil",
    "last_name": "Block",
    "language": "en_CA",
    "birthday": "1997-01-08",
    "work_phone": "+1-917-717-4113",
    "mobile_phone": "+1-936-227-0973",
    "home_phone": "1-843-497-5656",
    "emergency_contact": {
      "primary": {
        "name": "Prof. Damien Schaden IV",
        "relation": "mother",
        "phone": "534.720.2722"
      },
      "secondary": {
        "name": "Vicky Robel",
        "relation": "father",
        "phone": "1-979-786-5595"
      }
    },
    "status": "active",
    "start_date": "2020-06-02",
    "end_date": null,
    "payroll_enabled": false,
    "updated_at": "2022-02-22T17:11:24.000000Z",
    "created_at": "2021-11-29T18:29:40.000000Z"
  },
  "job": {
    "id": "63bcb052-cff4-4b27-bc02-05c68a298edd",
    "department": {
      "id": "b64d03d9-6e60-4319-b64e-7c0b70d4cdbc",
      "name": "IT Support"
    },
    "position": "Marketing Associate",
    "office": "643 Aliyah Way, Sussex NB, E4E 2Y7, Canada",
    "employment_type": "full-time",
    "salary": {
      "name": "Regular Pay",
      "primary": false,
      "rate": "60000",
      "frequency": "year",
      "hours_per_week": "36.00",
      "vacation_pay_percentage": null,
      "effective_from": "2022-02-22",
      "effective_to": null,
      "created_at": "2022-02-22T12:00:35.000000Z",
      "updated_at": "2022-02-22T17:14:31.000000Z"
    }
  },
  "company": {
    "id": "e39baea3-e8fc-44b2-92ba-fa2ef34c0d28",
    "name": "Stracke PLC"
  },
  "timestamp": 1645550072
}
```
