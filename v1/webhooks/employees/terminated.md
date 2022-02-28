# Employee Terminated Webhook

The Employee Terminated webhook is triggered anytime an employee is terminated.

**Method** : `POST`

### Payload

```json
{
  "account": {
    "email": "employee59@humi.ca",
    "first_name": "Lottie",
    "last_name": "Tremblay",
    "roles": [
      "Employee"
    ]
  },
  "employee": {
    "id": "83f265b8-e0bc-46b3-b810-dd5e08ab8272",
    "first_name": "Lottie",
    "last_name": "Tremblay",
    "language": "en_CA",
    "birthday": "1984-01-01",
    "work_phone": "(830) 610-0519",
    "mobile_phone": "+18728841197",
    "home_phone": "+1 (219) 649-7782",
    "emergency_contact": {
      "primary": {
        "name": "Aylin Yost",
        "relation": "father",
        "phone": "(858) 712-5830"
      },
      "secondary": {
        "name": "Dr. Marjorie DuBuque Sr.",
        "relation": "father",
        "phone": "+1.681.997.5505"
      }
    },
    "status": "terminated",
    "start_date": "2018-10-23",
    "end_date": "2022-02-28",
    "payroll_enabled": false,
    "updated_at": "2022-02-28T19:07:10.000000Z",
    "created_at": "2022-02-28T17:28:12.000000Z",
    "terminated_on": "2022-02-28",
    "termination_reason": "Strike or lockout",
    "termination_comments": "Test"
  },
  "job": {
    "id": "f211208d-a560-4416-aff2-ae1c6e7e187d",
    "department": {
      "id": "d383bb7f-089d-40c8-a5eb-84add4e9bd69",
      "name": "Purchasing"
    },
    "position": "Account Executive",
    "office": "6043 Immanuel Way Apt. 309, Port Stanley ON, N5L 2Y6, Canada",
    "employment_type": "consultant",
    "salary": {
      "name": "Regular Pay",
      "primary": true,
      "rate": "56274",
      "frequency": "year",
      "hours_per_week": "40.00",
      "vacation_pay_percentage": null,
      "effective_from": "2022-01-19",
      "effective_to": "2022-02-28",
      "created_at": "2022-02-28T17:28:13.000000Z",
      "updated_at": "2022-02-28T19:07:11.000000Z"
    }
  },
  "company": {
    "id": "57b9af4c-9ff0-4778-ba58-ab3e7d1fc9c1",
    "name": "Collins Group"
  },
  "timestamp": 1646075232
}
```
