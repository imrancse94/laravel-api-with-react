import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

 export function login(credentials){
    let result = false;
     axios.post(
            '/api/login',
            credentials,
        ).then((response) => {
            console.log(response)
            cookie.save('token', response.data.success.token)
        }).catch((error) => {
            console.log(error)
        });

     if(cookie.load('token') != null){
         result = true;
     }
        return result;
   }


 export function logout(){
   let result = false;

       const instance = axios.create({
           headers: {'Authorization': 'Bearer '+cookie.load('token')}
       });
   
   instance.get('/api/logout')
           .then(response => {
               console.log(response)
               if(response.status == 200){
                   //localStorage.removeItem('token');
                   cookie.remove('token')

               }

           });

alert(cookie.load('token'));
     if(cookie.load('token') == 'undefined'){
         result = true;
     }
     return result;
   }

export function PostData(type, userData) {
    let BaseURL = 'https://api.thewallscript.com/restful/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    let result = false;
    new Promise((resolve, reject) =>{
        fetch(type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
                console.log('alert')
                console.log(res)
            })
            .catch((error) => {
                reject(error);
            });


    });
}

