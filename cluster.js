const cluster = require("node:cluster");
const os = require("node:os");

function runPrimaryProcess(){
    const numberOfCpus = os.cpus().length;
    for(let i = 0; i < numberOfCpus; i++){
        cluster.fork();
    }
}

function runWorkerProcess(){
    require("./server.js");
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();