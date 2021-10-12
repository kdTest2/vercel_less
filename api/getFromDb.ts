import { MongoClient } from 'mongodb'

module.exports = async (req, res) => {
    const CONNECTION_STRING = "mongodb+srv://root:900629ly@cluster0.avpwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    var myobj = { name: "测试新增", url: "www.runoob" };
    const client = await MongoClient.connect(CONNECTION_STRING);
    const db = await client.db('sbdrin');
    
    await db.collection("test").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
    });
    var result = await db.collection("test").find().toArray();
    res.status(200).json(result);
}