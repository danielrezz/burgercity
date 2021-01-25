const express = require("express");
const orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            console.log("hello")
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    delete: function (columnName, columnValue, cb) {
        orm.delete("burgers", columnName, columnValue, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;