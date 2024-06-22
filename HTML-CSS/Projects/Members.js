import "dotenv/config";
import { MongoClient } from "mongodb";

export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB failed!", error);
    process.exit();
  }
}
// _____________________________________________________________________________________________
export async function createDocument(collection) {
  const MembersDocument = {
    Firstname: "hamidreza",
    Lastname: "hosseini",
    NationalCode: 11111111,
    Gender: "Male",
    Orders: [
      {
        Product: "staminofen",
        Number: 5,
      },
    ],
    Employee: {
      PersonalCode: 12345678,
      Role: "doctor",
      Cals: [
        {
          starttime: 12,
          finishtime: 20,
          Date: "12/12/2022",
        },
      ],
    },
  };
  await collection.insertOne(MembersDocument);
}
// _____________________________________________________________________________________________
// export async function createManyDocument(collection) {
//   const Documents = [
//     {
//       Firstname: "hamidreza",
//       Lastname: "hosseini",
//       NationalCode: 11111111,
//       Gender: "Male",
//       Orders: [
//         {
//           Product: "staminofen",
//           Number: 5,
//         },
//       ],
//       Employee: {
//         PersonalCode: 12345678,
//         Role: "doctor",
//         Cals: [
//           {
//             starttime: 12,
//             finishtime: 20,
//             Date: "12/12/2022",
//           },
//         ],
//       },
//     },
//     {
//       Firstname: "hamidreza",
//       Lastname: "hosseini",
//       NationalCode: 11111111,
//       Gender: "Male",
//       Orders: [
//         {
//           Product: "staminofen",
//           Number: 5,
//         },
//       ],
//       Employee: {
//         PersonalCode: 12345678,
//         Role: "doctor",
//         Cals: [
//           {
//             starttime: 12,
//             finishtime: 20,
//             Date: "12/12/2022",
//           },
//         ],
//       },
//     },
//   ];
//   await collection.insertmany(Documents);
// }

export async function executeMembersCreateOperation() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("DrugStoreDB");
    const collection = db.collection("Members");
    console.log("CREATE Member");
    await createDocument(collection);
  } finally {
    await mongoClient.close();
  }
}
await executeMembersCreateOperation();

// _____________________________________________________________________________________________
export async function executeMembersFindOperation() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("DrugStoreDB");
    const collection = db.collection("Members");
    const res = await collection.find({}).toArray();
    console.log(res);
  } finally {
    await mongoClient.close();
  }
}

await executeMembersFindOperation();
// _____________________________________________________________________________________________
export async function updateByName(collection, Firstname, updatedFields) {
  await collection.updateMany({ Firstname }, { $set: updatedFields });
}

export async function executeMembersUpdateOperation() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("DrugStoreDB");
    const collection = db.collection("Members");
    await updateMembersByName(collection, "hamidreza", {
      "Employee.Role": "nurse",
    });
  } finally {
    await mongoClient.close();
  }
}

await executeMembersUpdateOperation();

// _____________________________________________________________________________________________
export async function deleteByName(collection, Firstname) {
  await collection.deleteOne({ Firstname });
}

export async function executeMembersDeleteOperation() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("DrugStoreDB");
    const collection = db.collection("Members");

    console.log("DELETE Student");
    await deleteByName(collection, "hamidreza");
    console.log(await findByName(collection, "hamidreza"));
  } finally {
    await mongoClient.close();
  }
}
//_____________________________________________________________________________________________
