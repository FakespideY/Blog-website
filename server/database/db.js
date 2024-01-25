import mongoose from "mongoose";

const Connection = (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://zappiestzebra:yA9Rhnzpa4CjuEcE@blog.4wowsxr.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database is connected successfully");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

export default Connection;
