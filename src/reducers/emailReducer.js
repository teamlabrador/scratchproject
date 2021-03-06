import * as types from '../constants/actionTypes';

const initialState = {

  user: {
  },

  threadList: {

    projects: [ {
      threadId: 1,
      subject: 'Demo Testing: Project Plan Run Through',
      createdAt: 'March 29th, 2018',
      group: 1,
      messages: [ {
        messageId: 1,
        message: "Initial run through for the group, and assign the scrum projects to different users in our group. \n Things to in mind would be everyone's skill level and the frameworks that are being used.",
        author: "Ben",
        createdAt: "March 29, 2018",
        group: 1,
        },
        {
        messageId: 2,
        message: "I would like to work on the front end and work with Maddie to set up the routes to post to the database",
        author: "Paul",
        createdAt: "March 30th, 2018",
        group: 1,
        }],
      }],
    approvers: [ {
      threadId: 2,
      threadAuthor: 'Maddie',
      subject: 'Project Goals',
      createdAt: 'March 30th, 2018',
      messages: [ {
        messageId: 1,
        message: "Have the best looking userface, and do not let anyone find out about the bugs in the code!!!",
        author: "Maddie",
        createdAt: "March 30th, 2018",
        group: 1,
        },
        {
        messageId: 2,
        message: "Guys, I solved the problem. Lets post something on trello, and grab a new task!!!",
        author: "Ben",
        createdAt: "March 30th, 2018",
        group: 2,
      }],
      } 
    ],
    contributors:[{
    threadId: 3,
    threadAuthor: 'Maddie',
    subject: 'Celebration Ideas, post group project',
    createdAt: 'Codesmith LLC, VENICE CA',
    group: 1,
    messages: [ {
      messageId: 1,
      message: "So many choices, what are we going to do?",
      author: "JD",
      createdAt: "March 30th, 2018",
      group: 1,
      },
      {
      messageId: 2,
      message: "Let's go get TOMS coffee",
      author: "JD",
      createdAt: "April 2, 2018",
      group: 3,
      } ]
    }
    ],
    informed: [ {
      threadId: 4,
      threadAuthor: 'Maddie',
      subject: 'Group Coffee Invitation',
      createdAt: 'April 2, 2018',
      group: 1,
      messages: [ {
        messageId: 1,
        message: "I love coldbrew!!",
        author: "Paul",
        createdAt: "April 2, 2018",
        group: 1,
        },
        {
        messageId: 2,
        message: "Lets go wakingggg!!! ",
        author: "Ben",
        createdAt: "April 2, 2018",
        group: 2,
      } ],
    }]
  }
};

const emailReducer = (state = initialState, action) =>
{
  switch (action.type) {
    case types.LOGIN:
      let user = {
        userId: 2,
        userImage: `https://avatars0.githubusercontent.com/u/34157644?s=64&v=4`,
        userName: `Back2bas1cs`
      }
      return {
        ...state,
        user,
      };
    case types.LOGOUT:
    return {
      ...state,
      user: {},
    };
    case types:composeThread:
    return {
      ...state
    };
    default:
      return state;
  }

}

export default emailReducer
