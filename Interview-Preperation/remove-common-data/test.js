const data = {
    "type": "or",
    "children": [
      {
        "type": "and",
        "children": [
          {
            "type": "equals",
            "path": "$.context.mode",
            "defaultResult": false,
            "value": [
              "PEER_TO_MERCHANT"
            ],
            "extractValueFromPath": false
          },
        ]
      },
      {
        "type": "and",
        "children": [
          {
            "type": "equals",
            "path": "$.context.mode",
            "defaultResult": false,
            "value": "RESPONSE",
            "extractValueFromPath": false
          },
          {
            "type": "equals",
            "path": "$.context.party.type",
            "defaultResult": false,
            "value": "MERCHANT",
            "extractValueFromPath": false
          },
        //   {
        //     "type": "exists",
        //     "path": "$.context.party.merchantId",
        //     "defaultResult": false
        //   },
        //   {
        //     "type": "contains_any",
        //     "path": "$.context.party.subMerchantId",
        //     "defaultResult": false
        //   },
        ]
      }
    ]
}

const data1 = {
    "type": "and",
    "children": [
      {
        "type": "not",
        "children": [
          {
            "type": "contains_any",
            "path": "$.paymentInfo[?(@.type == 'ACCOUNT')].accountId",
            "defaultResult": false,
            "values": [
              "ACCOUNT",
              "INTENT"
            ],
            "extractValues": false
          }
        ]
      },
      {
        "type": "greater_than_equals",
        "path": "$.ref.resolvedPaths.amount",
        "defaultResult": false,
        "value": 100,
        "extractValueFromPath": false
      },
      {
        "type": "or",
        "children": [
          {
            "type": "and",
            "children": [
              {
                "type": "equals",
                "path": "$.context.mode",
                "defaultResult": false,
                "value": [
                  "PEER_TO_MERCHANT"
                ],
                "extractValueFromPath": false
              },
              {
                "type": "exists",
                "path": "$.context.merchantId",
                "defaultResult": false
              },
              {
                "type": "exists",
                "path": "$.context.subMerchantId",
                "defaultResult": false
              }
            ]
          },
          {
            "type": "and",
            "children": [
              {
                "type": "equals",
                "path": "$.context.mode",
                "defaultResult": false,
                "value": "RESPONSE",
                "extractValueFromPath": false
              },
              {
                "type": "equals",
                "path": "$.context.party.type",
                "defaultResult": false,
                "value": "MERCHANT",
                "extractValueFromPath": false
              },
              {
                "type": "exists",
                "path": "$.context.party.merchantId",
                "defaultResult": false
              },
              {
                "type": "exists",
                "path": "$.context.party.subMerchantId",
                "defaultResult": false
              }
            ]
          }
        ]
      }
    ]
}

let isValid = true;
function test(data) {
    if (data.type && data.children &&  data.children.length) {
        for (let eachChild of data.children) {
            if (isValid) {
                test(eachChild)
            }
        }
    } else {
        if (data.type === "exists") {
            isValid = false
        }
    }
}

test(data)
// if (isValid) {
//     // console.log("MUSTONG----->", )
//     // convertMustong(data)

// } else {
//     console.log("MUSTONG NOT---->", data)
// }

function Modal(type) {
    this.type = type;
    this.predicate = []
}

function convertMustong(payload) {
    let conjectionList = []
    if (payload.children &&  payload.children.length) {
        for (let eachChild of payload.children) {
            let conjection = new Modal('AND')
            for(let ch of eachChild.children) {
                switch(ch.type) {
                    case 'equals':
                    case 'in':

                        break;
                }
            }
            conjection.predicate =  eachChild.children
            conjectionList.push(conjection);
        }
    } 
    return conjectionList;
}
console.log("convertMustong(data)---->", convertMustong(data))



const arr = [];
arr.push(1,2,3,4,5,5)
console.log("arr---->", arr)