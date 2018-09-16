import React, {Component} from 'react';
import axios from 'axios'
let result = false;
 export function login(credentials){
     return  axios.post(
            '/api/login',
            credentials,
        ).then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.success.token)

        }).catch((error) => {
            console.log(error)
        });


   }


 export function logout(){
       const instance = axios.create({
           headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
       });
       instance.get('/api/logout')
           .then(response => {
               console.log(response)
               if(response.status == 200){
                   localStorage.setItem('token',"");
                    result = true;
               }
           });

        return result;
   }



