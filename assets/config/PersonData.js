const Person = {
    schema: {
      type: "object",
      properties: {
        people: {
          type: "array",
          title: "People",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                minLength: 3,
                description: "Please enter your name",
              },
              birthDate: {
                type: "string",
                format: "date",
              },
              age: {
                type: "integer",
                description: "Please enter your age.",
              },
            },
          },
        },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/people",
          options: {
            detail: {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Label",
                  text: "Person Info",
                },
                {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/name",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/age",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/birthDate",
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    }
  };
  
  export default Person;