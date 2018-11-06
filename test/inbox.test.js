const assert = require('assert'); //making assertions about tests, some value equal to another
const ganache = require('ganache-cli'); //ganache cli , local ethereum test network
const Web3 = require('web3'); //constructor functions, creates instance from web3 library
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const web3 = new Web3(ganache.provider());//provider: argument are exchangable depending on network, communication layer between web3 library and ethereum network, every provider has identical set of methods
//const { interface, bytecode } = require('../compile');
const interface = require('../compile.js');
const bytecode = require('../compile.js');
let accounts;
let inbox;
//get access to unlocked accounts (dont require public or private key, are default) over Web3 just for test purposes

  //Get a list of all accounts, we use instance of Web3. access eth module and getAccounts function. every function in Web3 is asynchronous
  beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    inbox = new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: bytecode, arguments: ['Hi there'] }) //method is chained on the returned, bytecode and some default argument
      .send({from: accounts[0], gas: '1000000'});
  });

    describe('Inbox', () => {
      it('deploys a contract', () => {
        console.log(accounts);
      });
    });




    // Use one of those accounts to deploy
    // the contract



//Mocha: 3 Functions: it (run one individual assertion (2 values, 1 from code and one should be equal and compare both to see if they are the same) on something we want to test, core of testing), describe (group a collection of it-functions testing the same thing to see they are related), beforeeach(execute general setup code)
