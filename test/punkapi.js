const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const baseUrl = 'https://api.punkapi.com/'
const validate = require('jsonschema').validate;

const endpointName = 'v2/beers';
describe('Punkapi', () => {
  it('Test this API using <number_of_data> values of 20, 5, and 1 and then verify that the amount of data returned for each example is valid (no need to verify the contents).', async () => {
    const scenarios = [
      {
        page: 2,
        per_page: 20
      },
      {
        page: 2,
        per_page: 5
      },
      {
        page: 2,
        per_page: 1
      }
    ]
    for (const scenario of scenarios) {
      const response = await getData(scenario)
      const totalItems = response.body.length
      expect(totalItems).equal(scenario.per_page)
    }
  });
  it('Verify That the amount of data returned', async () => {
    const responseData = await getData()
    const data = responseData.body
    const verify = validate(data,jsonSchema)
    expect(verify.valid).to.be.true;
    for (const item of verify.instance) {
      console.log(item.name)
      expect(item.name).to.be.not.null;
    }
  });

  it('Verify That the amount of data returned', async () => {
    const responseData = await getData()
    const data = responseData.body
    for (const item of data) {
      console.log(item.name)
    }
  });
});

async function getData (params) {
  const res = await chai
    .request(baseUrl)
    .get(endpointName)
    .query(params)
    .send();

  return {
    res: res,
    body: res.body,
    status: res.status
  }
}

const jsonSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "number"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "number"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "null"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "null"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "number"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "null"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "number"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "null"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "integer"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "number"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "null"
        },
        "srm": {
          "type": "null"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "integer"
        },
        "attenuation_level": {
          "type": "number"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "null"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "integer"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "integer"
        },
        "ibu": {
          "type": "null"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "null"
        },
        "srm": {
          "type": "null"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    },
    {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": "number"
        },
        "ibu": {
          "type": "integer"
        },
        "target_fg": {
          "type": "integer"
        },
        "target_og": {
          "type": "integer"
        },
        "ebc": {
          "type": "integer"
        },
        "srm": {
          "type": "integer"
        },
        "ph": {
          "type": "number"
        },
        "attenuation_level": {
          "type": "integer"
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer"
            },
            "unit": {
              "type": "string"
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "temp": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "duration": {
                      "type": "integer"
                    }
                  },
                  "required": [
                    "temp",
                    "duration"
                  ]
                }
              ]
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer"
                    },
                    "unit": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": "string"
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "amount"
                  ]
                }
              ]
            },
            "hops": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "integer"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "number"
                        },
                        "unit": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "value",
                        "unit"
                      ]
                    },
                    "add": {
                      "type": "string"
                    },
                    "attribute": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "amount",
                    "add",
                    "attribute"
                  ]
                }
              ]
            },
            "yeast": {
              "type": "string"
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    }
  ]
}