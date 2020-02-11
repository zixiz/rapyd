# Rapyd home task

Shahar Gilad
0542036569

some Ewallets that I opened

`+972542036569
+972547213309
+972547689309
+972522935573
+972542035849`

The Api is contain 4 POST methods.

# Create Ewallet -

`http://localhost:3000/api/v1/ewallet`

Body Params:

first_name: String

last_name: String

phone_number: String ** Must be in E.164 format (mandatory)

email: String

Response example: 

`{
    "response": {
        "phone_number": "+972542985349",
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

`http://localhost:3000/api/v1/funds/add`

Example of Body Params, must include 'funds' object contain array of Add Funds objects:
`{
	"funds":[
		{"phone_number": "+972542036569","amount": 100,"currency": "ILS"},
		{"phone_number": "+972547213309","amount": 100,"currency": "ILS"},
		{"phone_number": "+972547689309","amount": 100,"currency": "ILS"}
		]
}`

Each Add Funds object must contain

**phone_number: String ** Must be in E.164 format (mandatory)**

**currency: String (mandatory) Three-letter ISO 4217 code**

**amount: String (mandatory)** 

here is example If you want add funds to 1 eWallet

`{"funds":[{"phone_number": "+972542036569","amount": 100,"currency": "ILS"}]}`

Response example for 2 add funds objects:

`[
  {
    "response": {
      "id": "5c2c1ca7-4cd7-11ea-833c-02e199f7f6f5",
      "account_id": "3c17076d-4c0f-11ea-833c-02e199f7f6f5",
      "phone_number": "+972547689309",
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
      "phone_number": "+972522935573",
      "amount": 161.9,
      "currency": "ILS",
      "metadata": {
        "merchant_defined": true
      }
    }
  }
]`

# Transfer Funds Between eWallets-

`http://localhost:3000/api/v1/funds/transfer`

Body Example:

Body Params:

amount: String (mandatory)

currency: String  **Three-letter ISO 4217 code (mandatory)

destination_phone_number:  String ** Must be in E.164 format (mandatory)

source_phone_number: String ** Must be in E.164 format (mandatory)

# Cancel/Accept/Decline Transfer API-

`http://localhost:3000/api/v1/funds/transfer/response
`

Body Params: 

id: String **this is the ID you get from `http://localhost:3000/api/transferfunds` response (mandatory)

status: String you can choose only between those 3 options

`"status":"accept" , "status":"decline" , "status":"cancel"` 