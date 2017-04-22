const mocha = require('mocha');
const chai = require('chai');
chai.should();
const debug = require('debug')('trycatch');

const { trycatch, notrycatch} = require('./main');

describe('with try catch', () => {
  it('should be slower?', ()=> {
    let i = 0;
    const ITERATIONS = 100000;


    /* time the function without try block */
    let j= 0;
    const noTryStart = process.hrtime();
    while ( j < ITERATIONS) {
      notrycatch();
      j++;
    }
    const noTryEnd = process.hrtime(noTryStart);


    /* time the try block */
    const tryStart = process.hrtime();
    while (i < ITERATIONS) {
      trycatch(); 
      i++;
    }
    const tryEnd = process.hrtime(tryStart);

    const tryDur = tryEnd[0]*10e6 + tryEnd[1];
    const noTryDur = noTryEnd[0]*10e6 + noTryEnd[1];

    noTryDur.should.be.below(tryDur);

    console.log(`After ${ITERATIONS} try duration - notry duration ${(tryDur - noTryDur)/10e6} seconds`);

  })
  it('should be slower?', ()=> {
    let i = 0;
    const ITERATIONS = 100000;

    /* time the try block */
    const tryStart = process.hrtime();
    while (i < ITERATIONS) {
      trycatch(); 
      i++;
    }
    const tryEnd = process.hrtime(tryStart);

    /* time the function without try block */
    let j= 0;
    const noTryStart = process.hrtime();
    while ( j < ITERATIONS) {
      notrycatch();
      j++;
    }
    const noTryEnd = process.hrtime(noTryStart);

    const tryDur = tryEnd[0]*10e6 + tryEnd[1];
    const noTryDur = noTryEnd[0]*10e6 + noTryEnd[1];

    console.log(`After ${ITERATIONS} try duration - notry duration ${(tryDur - noTryDur)/10e6} seconds`);
    noTryDur.should.be.below(tryDur);

  })
})
