import { JsonMapper } from "./jsonMapper";

let eventMapping = {
    eventName: "checkout_completed",
    userId: {
        path: '$.eventPayload.customer.email',
    },
    anonymousId: {
        path: '$.eventPayload.webengage.anonymousId',
    },
    eventTime: {
        path: '$.timestamp',
        transformer: (value: string | number | Date) => {
            return `${new Date(value).toISOString().split('.')[0]}+0000`;
        }
    },
    eventData: {
        "abandoned checkout url": {
            path: '$.eventPayload.checkout.checkout_token_id',
            transformer: (value: string | number | Date) => {
                return `${process.env.CHECKOUT_BASE_URL}?tokenId=${value}`;
            }
        },
        "buyer_accepts_marketing": {
            path: "$.eventPayload.customer.account_attributes.attributes.marketing_consent",
            defaultValue: true
        },
        "cart token": {
            path: "$.eventPayload.checkout.metadata.cart.token",
            defaultValue: 'no token'
        },
        "Created At": {
            path: '$.timestamp',
            transformer: (value: string | number | Date) => {
                return `${new Date(value).toISOString().split('.')[0]}+0000`;
            }
        },
        "currency": {
            path: "$.eventPayload.checkout.metadata.cart.currency"
        },
        "customer accepts marketing": {
            path: "$.eventPayload.customer.account_attributes.attributes.marketing_consent"
        },
        "customer created at": {
            path: '$.timestamp',
            transformer: (value: string | number | Date) => {
                return `${new Date(value).toISOString().split('.')[0]}+0000`;
            }
        },
        "customer email": {
            path: '$.eventPayload.customer.email'
        },
        "customer first name": {
            path: '$.eventPayload.customer.account_attributes.attributes.name'
        },
        "customer last name": {
            path: '$.eventPayload.customer.account_attributes.attributes.name'
        },
        "customer phone": {
            path: '$.eventPayload.customer.phone'
        },
        "customer updated at": {
            path: '$.timestamp',
            transformer: (value: string | number | Date) => {
                return `${new Date(value).toISOString().split('.')[0]}+0000`;
            }
        },
        "default address city": {
            path: "$.eventPayload.shipping_address.data.city"
        },
        "default address country": {
            path: "$.eventPayload.shipping_address.data.country"
        },
        "default address country code": {
            path: "$.eventPayload.shipping_address.data.country"
        },
        "default address province": {
            path: "$.eventPayload.shipping_address.data.state"
        },
        "default address province code": {
            path: "$.eventPayload.shipping_address.data.state_code"
        },
        "default address zip": {
            path: "$.eventPayload.shipping_address.data.zip"
        },
        "email": {
            path: "$.eventPayload.customer.email"

        },
        "line_items": {
            path: "$.eventPayload.checkout.metadata.cart.items"
        },
        "name": {
            path: '$.eventPayload.customer.account_attributes.attributes.name'
        },
        "phone": {
            path: '$.eventPayload.customer.phone'
        },
        "shipping address city": {
            path: "$.eventPayload.shipping_address.data.city"
        },
        "shipping address country": {
            path: "$.eventPayload.shipping_address.data.country"
        },
        "shipping address country code": {
            path: "$.eventPayload.shipping_address.data.country"
        },
        "shipping address province": {
            path: "$.eventPayload.shipping_address.data.state"
        },
        "shipping address province code": {
            path: "$.eventPayload.shipping_address.data.state_code"
        },
        "shipping address zip": {
            path: "$.eventPayload.shipping_address.data.zip"
        },
        "source name": {
            path: '$.source',
            defaultValue: "Shopflo"
        },
        "total price": {
            path: "$.eventPayload.checkout.pricing.total"
        },
        "total spent": {
            path: "$.eventPayload.checkout.pricing.total"
        },
        "Updated At": {
            path: '$.timestamp',
            transformer: (value: string | number | Date) => {
                return `${new Date(value).toISOString().split('.')[0]}+0000`;
            }
        },
    }
    }
let analyticsData = {
"requestId": "2159d2fd4b6c8587f9d50a2516bb7250",
"sessionId": "1654744617752",
"eventName": "checkout_completed",
"timestamp": 1655969774,
"merchantId": "81d8d613-1392-4931-912d-52043f496a2f",
"eventPayload": {
    "checkoutId": "e5bbbeb7-a3e6-4898-9fa2-e7fc143b9676",
    "tokenId": "",
    "currency": "INR",
    "totalItems": 1,
    "totalPrice": 100,
    "webengage": {
        "anonymousId": "123"
    },
    "checkout": {
        "created_at": "2022-06-08T13:21:43.598446Z",
        "modified_at": "2022-06-08T13:37:54.914830Z",
        "uid": "e5bbbeb7-a3e6-4898-9fa2-e7fc143b9676",
        "platform": "SHOPIFY",
        "merchant_id": "b60ef5a6-6a02-4bd9-a994-72da2a1fb4ba",
        "customer_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
        "items": [
            {
                "price": "1.20",
                "item_id": "41646179680451",
                "quantity": 1,
                "item_data": {
                    "id": 41646179680451,
                    "sku": "",
                    "grams": 0,
                    "price": "1.20",
                    "title": "Default Title",
                    "images": null,
                    "weight": 0,
                    "barcode": "",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "taxable": true,
                    "image_id": null,
                    "position": 1,
                    "created_at": "2022-03-28T11:42:39+05:30",
                    "product_id": 7206654902467,
                    "updated_at": "2022-04-05T20:20:40+05:30",
                    "weight_unit": "kg",
                    "parent_title": "Antique Drawers",
                    "default_images": [
                        {
                            "id": 34289804804291,
                            "alt": null,
                            "src": "https://cdn.shopify.com/s/files/1/0614/9544/3651/products/babys-room_925x_944a1618-167d-4419-9f17-9609bdeb1a65.jpg?v=1648447959",
                            "width": 925,
                            "height": 617,
                            "position": 1,
                            "created_at": "2022-03-28T11:42:39+05:30",
                            "product_id": 7206654902467,
                            "updated_at": "2022-03-28T11:42:39+05:30",
                            "variant_ids": [],
                            "admin_graphql_api_id": "gid://shopify/ProductImage/34289804804291"
                        }
                    ],
                    "compare_at_price": "300.00",
                    "inventory_policy": "deny",
                    "inventory_item_id": 43741077176515,
                    "requires_shipping": true,
                    "inventory_quantity": -77,
                    "fulfillment_service": "manual",
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/41646179680451",
                    "inventory_management": "shopify",
                    "old_inventory_quantity": -77
                }
            }
        ],
        "discounts": null,
        "pricing": {
            "cod": 0,
            "tax": 0.18,
            "total": 1.2,
            "discount": 0,
            "shipping": 0,
            "sub_total": 1.2,
            "cod_enabled": false,
            "serviceable": true,
            "taxes_included": true,
            "prepaid_discount": 0
        },
        "addresses": {
            "billing_address_id": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63",
            "shipping_address_id": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63"
        },
        "status": "ABANDONED",
        "checkout_token_id": "2b05e4e8-e56d-4cdb-a5a4-5187640adfcd",
        "sync_needed": false,
        "metadata": {
            "cart": {
                "note": null,
                "items": [
                    {
                        "id": 41646179680451,
                        "key": "41646179680451:894b304560e2c8f68e7292f94236a80c",
                        "sku": "200000",
                        "url": "/products/antique-drawers?variant=41646179680451",
                        "grams": 0,
                        "image": "https://cdn.shopify.com/s/files/1/0614/9544/3651/products/babys-room_925x_944a1618-167d-4419-9f17-9609bdeb1a65.jpg?v=1648447959",
                        "price": 120,
                        "title": "Antique Drawers",
                        "handle": "antique-drawers",
                        "vendor": "Company 123",
                        "taxable": true,
                        "quantity": 1,
                        "discounts": [],
                        "gift_card": false,
                        "line_price": 120,
                        "product_id": 7206654902467,
                        "properties": null,
                        "variant_id": 41646179680451,
                        "final_price": 120,
                        "product_type": "Indoor",
                        "product_title": "Antique Drawers",
                        "variant_title": null,
                        "featured_image": {
                            "alt": "Antique Drawers",
                            "url": "https://cdn.shopify.com/s/files/1/0614/9544/3651/products/babys-room_925x_944a1618-167d-4419-9f17-9609bdeb1a65.jpg?v=1648447959",
                            "width": 925,
                            "height": 617,
                            "aspect_ratio": 1.499
                        },
                        "original_price": 120,
                        "total_discount": 0,
                        "variant_options": [
                            "Default Title"
                        ],
                        "discounted_price": 120,
                        "final_line_price": 120,
                        "requires_shipping": true,
                        "options_with_values": [
                            {
                                "name": "Title",
                                "value": "Default Title"
                            }
                        ],
                        "original_line_price": 120,
                        "product_description": "Antique wooden chest of drawers",
                        "line_level_total_discount": 0,
                        "line_level_discount_allocations": [],
                        "product_has_only_default_variant": true
                    }
                ],
                "token": "11a93ef409da4923081a2cfe0804cf9a",
                "currency": "INR",
                "attributes": {},
                "item_count": 1,
                "total_price": 120,
                "total_weight": 0,
                "total_discount": 0,
                "requires_shipping": true,
                "items_subtotal_price": 120,
                "original_total_price": 120,
                "cart_level_discount_applications": []
            },
            "type": "ONLINE",
            "discounts": [],
            "tax_lines": [
                {
                    "rate": 0.18,
                    "price": "0.18",
                    "title": "IGST",
                    "channel_liable": null
                }
            ],
            "shipping_lines": [
                {
                    "code": "Standard",
                    "price": "0.0",
                    "title": "Standard",
                    "presentment_title": "Standard"
                }
            ],
            "shipping_details": {
                "Standard": {
                    "title": "Standard",
                    "amount": "0.0"
                }
            }
        }
    },
    "customer": {
        "created_at": "2022-03-21T05:16:57.113321Z",
        "modified_at": "2022-05-31T07:56:59.868387Z",
        "uid": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
        "email": "ppriyranjan@gmail.com",
        "phone": "+918368350715",
        "account_type": "CUSTOMER",
        "verified": true,
        "account_attributes": {
            "created_at": "2022-03-21T05:16:57.118673Z",
            "modified_at": "2022-06-16T05:33:40.446379Z",
            "account_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
            "account_type": "CUSTOMER",
            "attributes": {
                "name": "Vivek",
                "pg_data": {
                    "pg_type": "RAZORPAY",
                    "user_id": "cust_J9cXHrkwvjdTF1"
                },
                "addresses": {
                    "default_billing_address_id": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63",
                    "default_shipping_address_id": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63"
                },
                "marketing_consent": true
            }
        },
        "addresses": [
            {
                "created_at": "2022-03-21T05:17:54.438492Z",
                "modified_at": "2022-03-21T05:17:54.438515Z",
                "uid": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63",
                "account_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
                "address_type": "HOME",
                "data": {
                    "zip": "560102",
                    "city": "BENGALURU",
                    "name": "Priy Ranjan",
                    "type": "HOME",
                    "email": "ppriyranjan@gmail.com",
                    "phone": "8368350715",
                    "state": "Karnataka",
                    "country": "INDIA",
                    "address2": "212 Hsr layout 7th cross 27th main",
                    "state_code": "KA"
                }
            },
            {
                "created_at": "2022-06-13T09:00:46.912496Z",
                "modified_at": "2022-06-13T09:00:46.912520Z",
                "uid": "092d332a-0396-45a9-bf9a-fc12fb604d52",
                "account_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
                "address_type": "HOME",
                "data": {
                    "zip": "110071",
                    "city": "Delhi",
                    "name": "Priy ranjan",
                    "type": "Home",
                    "email": "ppriyranjan@gmail.com",
                    "phone": "+918368350715",
                    "state": "Delhi",
                    "country": "India",
                    "address2": "D-262, D-Block\nQutub Vihar Phase 1",
                    "state_code": "DL"
                }
            }
        ]
    },
    "shipping_address": {
        "created_at": "2022-03-21T05:17:54.438492Z",
        "modified_at": "2022-03-21T05:17:54.438515Z",
        "uid": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63",
        "account_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
        "address_type": "HOME",
        "data": {
            "zip": "560102",
            "city": "BENGALURU",
            "name": "Priy Ranjan",
            "type": "HOME",
            "email": "ppriyranjan@gmail.com",
            "phone": "8368350715",
            "state": "Karnataka",
            "country": "INDIA",
            "address2": "212 Hsr layout 7th cross 27th main",
            "state_code": "KA"
        }
    },
    "billing_address": {
        "created_at": "2022-03-21T05:17:54.438492Z",
        "modified_at": "2022-03-21T05:17:54.438515Z",
        "uid": "65c2e5ab-da9e-4d16-a0cc-0d0e2aec4e63",
        "account_id": "bcab8eb1-e648-4b86-97f3-4e9a79fa1a99",
        "address_type": "HOME",
        "data": {
            "zip": "560102",
            "city": "BENGALURU",
            "name": "Priy Ranjan",
            "type": "HOME",
            "email": "ppriyranjan@gmail.com",
            "phone": "8368350715",
            "state": "Karnataka",
            "country": "INDIA",
            "address2": "212 Hsr layout 7th cross 27th main",
            "state_code": "KA"
        }
    }
}
}
console.log((new JsonMapper().map(eventMapping, analyticsData)));