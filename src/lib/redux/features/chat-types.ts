export type TMediaData = {
  content_type: string;
  file_name: string;
  file_size: number;
  url: string;
};

export type TMediaRequest = {
  // id of image
  _id: string;
  // status of the image
  status: string;

  //Could be more specific based on actual data
  metadata: any;
  //type of image
  type: string;
  images: TMediaData[];
  modelMesh: TMediaData;
};

export type TSubThread = {
  // subThreadID
  _id: string;

  createdAt: string;

  // threadId which the message belongs to.
  threadId: string;

  // Prompt which was given by the user to generate
  message: string;
  // Style which a user was given to generate the model.
  style: string;
  imageRequest: TMediaRequest[];
  modelRequest: TMediaRequest[];
};

export type ChatMessage = {
  threadId: string;
  subThreads: TSubThread[];
};

export type ChatState = {
  inputQuery: string;
  threads: ChatMessage;
};
