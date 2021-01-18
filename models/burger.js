const express = require("express");
const orm = require("../config/orm.js");

let burger = {
    all: async function() {

        const results = await orm.selectAll("burgers");
        
        return results;
    },

    create: async function(cols, vals, cb) {

        const results = await orm.insertOne("burgers", cols, vals);

        return results;
    },

    update: async function(objColVals, condition, cb) {

        const results = await orm.updateOne("burgers", objColVals, condition);

       return results;
    }
};

module.exports = burger;