import { faker } from '@faker-js/faker';
const Messenger = {
   user1: {
     userId: "unique-user-id-1",
     userName: "John Doe",
     userInfo: {
       email: "mdr50843@gmail.com",
       password: "robin@535",
     },
     photos: {
       profile:[faker.image.avatar()],
       cover: [],
       album: [],
     },
     storyInfo: { isStory: false, stories: [faker.image.avatar()]},
     noteInfo: {
       noteId: "note1",
       hasNotes:true,
       noteContent: "Meeting at 3 PM",
       timestamp: "2024-12-29T10:00:00Z",
     },
     friends: [
      {
        userId: "unique-user-id-2",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-3",
        isOnline: false
      },
      { 
        userId: "unique-user-id-4",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
   },
   user2: {
     userId: "unique-user-id-2",
     userName: "Alice Johnson",
     userInfo: {
       email: "alicejohnson@gmail.com",
       password: "alice@2024",
     },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: { isStory: false, stories: [faker.image.avatar()]},
     noteInfo: {
       noteId: "note2",
       hasNotes:true,
       noteContent: "Buy groceries",
       timestamp: "2024-12-28T15:00:00Z",
     },
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-3",
        isOnline: false
      },
      { 
        userId: "unique-user-id-4",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
   },
   user3: {
     userId: "unique-user-id-3",
     userName: "Chris Evans",
     userInfo: {
       email: "chrisevans@gmail.com",
       password: "captain@america",
     },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: {
       isStory: true,
       stories: [faker.image.avatar()],
     },
     noteInfo: {
       noteId: "note3",
       hasNotes:true,
       noteContent: "Doctor's appointment",
       timestamp: "2024-12-29T07:00:00Z",
     },
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-2",
        isOnline: false
      },
      { 
        userId: "unique-user-id-4",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
   },
   user4: {
     userId: "unique-user-id-4",
     userName: "Emily Davis",
     userInfo: {
       email: "emilydavis@gmail.com",
       password: "emily@1234",
     },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: { isStory: false, stories: [] },
     noteInfo: {
       noteId: "note4",
       hasNotes:false,
       noteContent: "Call John",
       timestamp: "2024-12-27T14:00:00Z",
     },
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-2",
        isOnline: false
      },
      { 
        userId: "unique-user-id-3",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
    //  chatHistory: [
    //    {
    //      chatId: "chat4",
    //      messages: [
    //        { content: "How's the meeting going?", senderId: "user4" },
    //      ],
    //    },
    //  ],
   },
   user5: {
     userId: "unique-user-id-5",
     userName: "Robert Brown",
     userInfo: { email: "robertbrown@gmail.com", password: "robert@123" },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: { isStory: false, stories: [] },
     noteInfo: { noteId: "note5",hasNotes:true, noteContent: "Gym at 6 AM" },
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-2",
        isOnline: false
      },
      { 
        userId: "unique-user-id-3",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-4",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
    //  chatHistory: [],
   },
   user6: {
     userId: "unique-user-id-6",
     userName: "Sophia Lee",
     userInfo: { email: "sophialee@gmail.com", password: "sophia@1234" },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: { isStory: false, stories: [faker.image.avatar()] },
     noteInfo: { noteId: "note6",hasNotes:true, noteContent: "Dinner plans at 7" },
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-3",
        isOnline: false
      },
      { 
        userId: "unique-user-id-4",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-2",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-7",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
    //  chatHistory: [],
   },
   user7: {
     userId: "unique-user-id-7",
     userName: "Sweety Beauty",
     userInfo: { email: "miawilson@gmail.com", password: "mia@1234" },
     photos: {
      profile:[faker.image.avatar()],
      cover: [],
      album: [],
    },
     storyInfo: { isStory: true, stories: [faker.image.avatar()] },
     noteInfo: { 
      noteId: "note7",
      hasNotes:true,
      noteContent: "use to say something"},
     friends: [
      {
        userId: "unique-user-id-1",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-3",
        isOnline: false
      },
      { 
        userId: "unique-user-id-4",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-5",
        isOnline: false
      },
      { 
        userId: "unique-user-id-6",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-2",
        isOnline: false
      },
      { 
        userId: "unique-user-id-8",
        isOnline: true 
      },
      { 
        userId: "unique-user-id-9",
        isOnline: false
      },
      { 
        userId: "unique-user-id-10",
        isOnline: true 
      }
     ],
    //  chatHistory: [],
   },
   user8: {
      userId: "unique-user-id-8",
      userName: "Carolina Marine",
      userInfo: { email: "miawilson@gmail.com", password: "mia@1234" },
      photos: {
         profile:[faker.image.avatar()],
         cover: [],
         album: [],
       },
      storyInfo: { isStory: true, stories: [faker.image.avatar()] },
      noteInfo: { 
        noteId: "note8",
        hasNotes:true,
        noteContent: "Badminton is my favourite game" },
      friends: [
        {
          userId: "unique-user-id-1",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-3",
          isOnline: false
        },
        { 
          userId: "unique-user-id-4",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-5",
          isOnline: false
        },
        { 
          userId: "unique-user-id-6",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-7",
          isOnline: false
        },
        { 
          userId: "unique-user-id-2",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-9",
          isOnline: false
        },
        { 
          userId: "unique-user-id-10",
          isOnline: true 
        }
       ],
      // chatHistory: [],
    },
    user9: {
      userId: "unique-user-id-9",
      userName: "Ruby Riot",
      userInfo: { email: "miawilson@gmail.com", password: "mia@1234" },
      photos: {
         profile:[faker.image.avatar()],
         cover: [],
         album: [],
       },
      storyInfo: { isStory: true, stories: [faker.image.avatar()] },
      noteInfo: { 
        noteId: "note9",
        hasNotes:true, 
        noteContent: "UFC is the hardest game i have ever seen" },
      friends: [
        {
          userId: "unique-user-id-1",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-3",
          isOnline: false
        },
        { 
          userId: "unique-user-id-4",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-5",
          isOnline: false
        },
        { 
          userId: "unique-user-id-6",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-7",
          isOnline: false
        },
        { 
          userId: "unique-user-id-8",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-2",
          isOnline: false
        },
        { 
          userId: "unique-user-id-10",
          isOnline: true 
        }
       ],
      // chatHistory: [],
    },
    user10: {
      userId: "unique-user-id-10",
      userName: "Angelina White",
      userInfo: { email: "miawilson@gmail.com", password: "mia@1234" },
      photos: {
         profile:[faker.image.avatar()],
         cover: [],
         album: [],
       },
      storyInfo: { 
        isStory: true, 
        stories: [faker.image.avatar()] },
      noteInfo: { 
        noteId: "note10",
        hasNotes:true, 
        noteContent: "Fucking on camera is not easy" },
      friends: [
        {
          userId: "unique-user-id-1",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-3",
          isOnline: false
        },
        { 
          userId: "unique-user-id-4",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-5",
          isOnline: false
        },
        { 
          userId: "unique-user-id-6",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-7",
          isOnline: false
        },
        { 
          userId: "unique-user-id-8",
          isOnline: true 
        },
        { 
          userId: "unique-user-id-9",
          isOnline: false
        },
        { 
          userId: "unique-user-id-2",
          isOnline: true 
        }
       ],
      // chatHistory: [],
    },
 };
 
 export default Messenger;