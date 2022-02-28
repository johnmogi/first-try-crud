const Lead = require("../models/lead");

function getAllLeads() {
  // return Lead.find({}).exec();
  return Lead.find({}).populate("").exec();
}

function getOneLead(id) {
  return Lead.find({ _id: id }).exec();
}

function addOneLead(lead) {
  return lead.save();
}



  function deleteOneLead(_id) {
    return new Promise((resolve, reject) => {
      Lead.deleteOne({ _id }, (err, info) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }



function updateLead(lead) {
  console.log(lead._id);
  return new Promise((resolve, reject) => {
    Lead.updateOne({ _id: lead._id }, lead, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(info.n ? lead : null);
    });
  });
}

module.exports = { getAllLeads, getOneLead, addOneLead, updateLead, deleteOneLead };