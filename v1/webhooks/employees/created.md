# Employee Created Webhook

The Employee Created webhook is triggered anytime a new employee is created in the system.

**Method** : `POST`

### Payload

```json
{
"account":{
    "email":"email@company.ca",
    "first_name":"John",
    "last_name":"Smith",
    "roles":{
        "1677":"Admin",
        "1679":"Employee"
    }
},
"employee":{
    "id":"49b29733-6465-4479-a180-12774cf934bf",
    "first_name":"John",
    "last_name":"Smith",
    "work_phone":"909-111-1111",
    "mobile_phone":"909-111-1111",
    "status":"active",
    "start_date":"2011-02-09",
    "end_date":null,
    "payroll_enabled":false,
    "updated_at":"2022-01-12T18:57:48.000000Z",
    "created_at":"2022-01-12T16:32:55.000000Z"
},
"job":{
    "department":"Staff",
    "position":"Employee",
    "office":"123 Fake Street",
    "employment_type":"full-time"
},
"company":{
    "name":"My Company"
},
"timestamp":1642013868
}
```
