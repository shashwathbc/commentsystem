export const getComments = async () => {
    return [
      {
        id: "1",
        body: "What lang do you know",
        username: "Shashwath",
        userId: "1",
        parentId: null,
        createdAt: "2022-06-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "What frameworks do you know",
        username: "Shashwath",
        userId: "2",
        parentId: null,
        createdAt: "2022-06-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "HTML CSS JS REACT",
        username: "Shashwath",
        userId: "2",
        parentId: "1",
        createdAt: "2022-06-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "REACT-REDUX BOOTSTRAP MATERIAL-UI",
        username: "Shashwath",
        userId: "2",
        parentId: "2",
        createdAt: "2022-06-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "DevilsGate",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };