# Additional Incomes Index

Get the list of additional incomes for a company

**URL**: `/v1/payroll/additional_incomes`

**Method**: `GET`

**Auth required**: YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests

### Request Query Parameters

At this time the API does not support query parameters

### Example Request
```
curl -G \
     -H "Authorization: Bearer valid-token-here" \
     https://partners.humi.ca/v1/payroll/additional_incomes
```

## Responses
Responses follw the [JSON:API](https://jsonapi.org) spec.

Responses are ordered by the `name` attribute of each Additional Income.

#### Data
The `data` attribute is an `array` of `AdditionalIncome` objects

#### AdditionalIncome
An `AdditionalIncome` has an `id` which is a unique identifier.

An `AdditionalIncome` has `attributes` which contain the information about the additional income.

Humi only returns the standard list of AdditionalIncomes which are the same across all companies. These items **do not** share IDs across companies.

#### AdditionalIncome Attributes

| Attribute   | Data Type | Description                                                                                           |
|-------------|-----------|-------------------------------------------------------------------------------------------------------|
| id          | uuid (v4) | a unique identifier for this additional income                                                        |
| name        | string    | the machine_readable_name of the additional income                                                    |
| displayName | string    | the human readable name of the additional income. This may contain punctuation and special characters |

### Success Response

**Code**: `200 OK`

Given a request to `partners.humi.ca/v1/payroll/additional_incomes` with a [valid token](../../../README.md#humi-partners-api-token) we can expect a response similar to the one below

```json
{
    "data": [
        {
            "id": "9e266309-a1d3-4585-8939-ed272fea960f",
            "type": "additionalIncome",
            "attributes": {
                "name": "bonus_work_related",
                "displayName": "Bonus Work-related"
            }
        },
        {
            "id": "f5d1ef09-7e51-4c12-8915-c6430e0af873",
            "type": "additionalIncome",
            "attributes": {
                "name": "bonus_discretionary",
                "displayName": "Bonus Discretionary"
            }
        },
        {
            "id": "d8871964-852c-4739-9d6f-f67d0e1a1a7c",
            "type": "additionalIncome",
            "attributes": {
                "name": "commission",
                "displayName": "Commission"
            }
        },
        {
            "id": "36f72d71-9deb-4d43-bc34-ee74a2548ad7",
            "type": "additionalIncome",
            "attributes": {
                "name": "car",
                "displayName": "Car Allowance"
            }
        },
        {
            "id": "a684e80c-0736-43e8-addf-aab4eec935e2",
            "type": "additionalIncome",
            "attributes": {
                "name": "cell_phone",
                "displayName": "Cell Phone Allowance"
            }
        },
        {
            "id": "41371d8f-f96a-49d8-919b-cf9e59db8742",
            "type": "additionalIncome",
            "attributes": {
                "name": "extra_pay",
                "displayName": "Extra Pay"
            }
        },
        {
            "id": "517251a7-dc26-486d-ac72-4298b5308da2",
            "type": "additionalIncome",
            "attributes": {
                "name": "double_overtime",
                "displayName": "Double Overtime"
            }
        },
        {
            "id": "7354c7da-227b-4174-ab53-ee3b59adc684",
            "type": "additionalIncome",
            "attributes": {
                "name": "vacation_payout",
                "displayName": "Vacation Payout"
            }
        },
        {
            "id": "cc3e07ae-f830-4b61-8b51-7032984a24a1",
            "type": "additionalIncome",
            "attributes": {
                "name": "holiday_pay",
                "displayName": "Holiday Pay"
            }
        },
        {
            "id": "3f5c883b-d6a4-41e0-bc2b-ebba7456fbb2",
            "type": "additionalIncome",
            "attributes": {
                "name": "time_worked_on_holiday",
                "displayName": "Time Worked on Holiday"
            }
        },
        {
            "id": "e175d31a-c66e-4a51-91c9-482b70076975",
            "type": "additionalIncome",
            "attributes": {
                "name": "sick_pay",
                "displayName": "Sick Pay"
            }
        },
        {
            "id": "662ecc8f-3a3d-4e3b-8265-5abf6eca5eb2",
            "type": "additionalIncome",
            "attributes": {
                "name": "retro_pay",
                "displayName": "Retroactive Pay"
            }
        },
        {
            "id": "76d30895-b78c-4e1d-ad7b-0c6ee54f95fc",
            "type": "additionalIncome",
            "attributes": {
                "name": "retro_pay_hourly",
                "displayName": "Retroactive Pay Hourly"
            }
        },
        {
            "id": "9b9ed269-dcf5-4857-9d01-4c07323d6ee6",
            "type": "additionalIncome",
            "attributes": {
                "name": "controlled_tips",
                "displayName": "Controlled Tips"
            }
        },
        {
            "id": "68390ce6-84bd-4d73-9819-eeb1bd9cfe42",
            "type": "additionalIncome",
            "attributes": {
                "name": "other_pay",
                "displayName": "Other Pay"
            }
        },
        {
            "id": "3b9ea09c-0783-4b3c-8903-d3ea9fc72f9b",
            "type": "additionalIncome",
            "attributes": {
                "name": "severance",
                "displayName": "Severance"
            }
        },
        {
            "id": "cccbd9df-75c7-40e8-9c25-e65f093b393a",
            "type": "additionalIncome",
            "attributes": {
                "name": "pay_in_lieu",
                "displayName": "Pay in Lieu of Notice"
            }
        },
        {
            "id": "95d0f201-2e55-4f7d-90d3-1fa4d6ce2d7a",
            "type": "additionalIncome",
            "attributes": {
                "name": "vacation_payout_for_time_off",
                "displayName": "Vacation Payout - Time Off"
            }
        }
    ]
}
```
