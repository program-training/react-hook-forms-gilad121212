import  { useState, ChangeEvent, FormEvent } from 'react';
import {useForm} from 'react-hook-form'
interface FormData {
  username: string;
  email: string;
  password:string;
}

function RegularForm1() {
    const {register , handleSubmit , formState : {errors}} = useForm()
    console.log(errors.password?.message)
  return (
    <form onSubmit={handleSubmit((data)=>{
        alert(data)
    })}>
        <h1>Change Me To React Hook Form</h1>
      <div>
        <input
        {...register("firstName",{required:'this is requierd' , minLength : {
            value : 2,
            message: 'min length is 2 '
        }})}
           type="text"
          placeholder='Enter UserName'
        />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <input
        {...register("email",{
            required:'this is requierd',
            pattern:{
                value:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message:'the email is not god'
            }
    },)}
           type="text"
           placeholder='Enter Email'
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
        {...register("password",{
            required:'this is requierd',
            pattern:{
                value:/^((?=.*[0-9])(?=.*[a-z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]))$/,
                message:'one namber one quper Case one lwore case '
            },
            maxLength:{
                value:20,
                message:'is aft to be las then 20'
            },
            minLength:{
                value:5,
                message:'the minimo length is 8'
            }
            
        })}
           type="text"
           placeholder='Enter Password'
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
      <select {...register("gender",{required:"gilad sinai"})} name="" id="">
        <option value=""></option>
        <option value="piufio">jhv c</option>
        <option value="tiud7">uyf</option>
      </select>
      <p>{errors.gender?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm1;