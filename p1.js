"use strict";
let id = "";
let ave = 0;
let f = false; 
let fall = false;
const hashRates = [0, 0, 0];
let hashConut = 0;
const hashRateCheck = function () {
  const stam = fetch(
    "https://api.ethermine.org/miner/0xbda1841a530ff346d948fd240bb99ea0692d80e0/workers"
  )
    .then((response) => response.json())
    .then((data) => {
      bdika(data);
    });

  const bdika = async function (data1) {
    const res = await fetch("http://127.0.0.1:4067/config");
    const data = await res.json();
    const result = data.worker;
    Stam2(result, data1);
  };

  function Stam2(dataTrex, dataPool) {
    console.log(dataTrex);
    console.log(dataPool);

    let i = 0;
    for (const x of dataPool.data) {
      if (x.worker == dataTrex) {
        break;
      }
      i++;
    }
    
    console.log(hashConut);
    if (hashRates.length == hashConut) hashConut = 0;
    hashRates[hashConut] = dataPool.data[i].reportedHashrate / 1000000;
    if( ave != 0 ){
        if(hashRates[hashConut] > (ave - 1)){
          fall = true;
          const idFromApi = fetch(
            "http://localhost:3000/mhs"
          )
            .then((response) => response.json())
            .then((data) => {
             id = data[0]._id
            });
          

          sendToApi(id);
        }  
    }    
    hashConut++;
    console.log(...hashRates);
    if ( hashConut == 3 ) f = true;
    if (f == true){
      const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
      ave = arrAvg(hashRates);
      console.log(ave);
    }  
  }  
};  


function sendToApi(id){ //change api. 
  console.log(id); //test

  // Instantiating new EasyHTTP class
  const http = new EasyHTTP;
  // User Data
  const data = {
    name_rig: 'rig 2',
    mhs: 'true',
  }
  

  // Update Post
  http.put(
    `http://localhost:3000/mhs/${id}`,
    data)
    
    // Resolving promise for response data
    .then(data => console.log(data))
    
    // Resolving promise for error
    .catch(err => console.log(err));
  }

hashRateCheck();
 setInterval(hashRateCheck, 10000);

