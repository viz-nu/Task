import express from "express";
import "./dbconnect.js";
import waModel from "./models/conversation.js";
const app = express();
const port = 5000;
app.use(express.json());
app.post("url", async (req, res) => {
    try {
        const { body, from } = req;
        const data = { body, from }
        const conversationData = await waModel.filter((ele) => { ele.from === data.from; })
        if (req.body.indexOf("search") !== -1) {
            toBeSearched = req.body.slice(req.body.indexOf("search") + 7,)
            if (!conversationData) {
                //no conversation linked to it
            } else {
               const serchedArray = conversationData.conversation.filter((ele)=>{ele.indexOf(toBeSearched) !== -1})
            // display serchedArray as results of search
            }
        }
        else {
            
            if (!conversationData) {
                conversationData.from = data.from;
                conversationData.conversation.push(data.body)
                new waModel(conversationData);
            }
            else {
                conversationData.conversation.push(data.body)
            }
            await conversationData.save() //saving in mongodb
        }

    } catch (error) {
        console.log(error);

    }
});


