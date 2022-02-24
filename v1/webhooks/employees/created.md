# Employee Created Webhook

**Method** : `POST`

### Payload

```json
{
"account":{
    "email":"kevin.langlois+ameegopoc@humi.ca",
    "first_name":"Kevin1",
    "last_name":"Langlois1",
    "roles":{
        "1677":"Admin",
        "1679":"Employee"
    }
},
"employee":{
    "id":"49b29733-6465-4479-a180-12774cf934bf",
    "first_name":"Kevin",
    "last_name":"Langlois",
    "work_phone":null,
    "mobile_phone":null,
    "status":"active",
    "start_date":"2011-02-09",
    "end_date":null,
    "payroll_enabled":false,
    "updated_at":"2022-01-12T18:57:48.000000Z",
    "created_at":"2022-01-12T16:32:55.000000Z"
},
"job":{
    "department":"N/A",
    "position":"N/A",
    "office":"N/A",
    "employment_type":"full-time"
},
"company":{
    "name":"Ameego Integration POC"
},
"timestamp":1642013868
}
```
