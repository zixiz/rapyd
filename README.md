# Rapyd Home Task

The Api contains 4 POST methods.


# Create eWallet -

`POST /api/v1/ewallet`

Body Params:

"first_name": String;

"last_name": String;

**"phone_number": String; Must be in E.164 format (mandatory)**

"email": String;

**Response Example:** 

`{
    "response": {
        "phone_number": "+972542218349",
        "email": "Bigi@gmail.com",
        "first_name": "Bigi",
        "last_name": "Gilad",
        "id": "ewallet_fa5e3d7226cef8d0ade76b6454011fc5",
        "status": "ACT",
        "accounts": [],
        "verification_status": "not verified",
        "type": "person",
        "business_details": null,
        "metadata": {
            "merchant_defined": true
        },
        "ewallet_reference_id": null,
        "category": null
    }
}`


# Add Funds -

`POST /api/v1/funds/add`

Example of Body Params, must include **_'funds' object_** containing an array of Add Funds objects:

`{
	"funds":[
		{"phone_number": "+972546851569","amount": 100,"currency": "ILS"},
		{"phone_number": "+972547213354","amount": 100,"currency": "ILS"},
		{"phone_number": "+972547689985","amount": 100,"currency": "ILS"}
		]
}`

#### Add Funds objects - Body Params -

**Each Add Funds object must contain:**

**""phone_number"": String; Must be in E.164 format (mandatory)**

**""currency"": String; (mandatory) Three-letter ISO 4217 code**

**""amount"":String; (mandatory)** 

#### Here is an example of adding an individual fund to an eWallet:

`{"funds":[{"phone_number": "+972542036518","amount": 100,"currency": "ILS"}]}`

**Response Example:**

`[
  {
    "response": {
      "id": "5c2c1ca7-4cd7-11ea-833c-02e199f7f6f5",
      "account_id": "3c17076d-4c0f-11ea-833c-02e199f7f6f5",
      "phone_number": "+972547689678",
      "amount": 100,
      "currency": "ILS",
      "metadata": {
        "merchant_defined": true
      }
    }
  },
  {
    "response": {
      "id": "5c2afa27-4cd7-11ea-833c-02e199f7f6f5",
      "account_id": "a09abdb0-4c36-11ea-833c-02e199f7f6f5",
      "phone_number": "+972522935582",
      "amount": 161.9,
      "currency": "ILS",
      "metadata": {
        "merchant_defined": true
      }
    }
  }
]`


# Transfer Funds Between eWallets-

`POST /api/v1/funds/transfer`

Body Params:

**"amount": String; (mandatory)**

**"currency": String; Three-letter ISO 4217 code (mandatory)**

**"destination_phone_number":  String;  Must be in E.164 format (mandatory)**

**"source_phone_number": String;  Must be in E.164 format (mandatory)**

**Response Example:**

`{
    "response": {
        "id": "ae7b2060-4d03-11ea-833c-02e199f7f6f5",
        "status": "PEN",
        "amount": 55,
        "currency_code": "USD",
        "destination_phone_number": "+972542565469",
        "transfer_response_at": 0,
        "created_at": 1581448879,
        "metadata": {
            "merchant_defined": true
        },
        "response_metadata": {}
    }
}`


# Cancel/Accept/Decline Transfer API-

`POST /api/v1/funds/transfer/response
`

Body Params: 

**"id": String; this is the ID you get from `/api/v1/funds/transfer` API response (mandatory)**

**"status": String; you can only choose between these 3 options:**
`"status":"accept" , "status":"decline" , "status":"cancel"` (mandatory) 

**Response Example:** 

`{
    "response": {
        "id": "38903205-4cd8-11ea-833c-02e199f7f6f5",
        "status": "CAN",
        "amount": 55.5,
        "currency_code": "USD",
        "destination_phone_number": "+972542565469",
        "transfer_response_at": 1581430364,
        "created_at": 1581430213,
        "metadata": {
            "merchant_defined": true
        },
        "response_metadata": {
            "merchant_defined": true
        }
    }
}`
