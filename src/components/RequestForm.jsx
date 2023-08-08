import React, { useState } from 'react'
import './RequestForm.css';
import InputArea from './InputArea';

const RequestForm = () => {
    const [quoteRequest , setQuoteRequest] = useState({
        name: '',
        lastName : '',
        email : '',
        subject :'',
        subjectDescription : '',
        status : 'pending'
    });

    const [request , setRequest] = useState('')
    const [errors , setError] = useState({})
    const Requesthandler = (element , e) => {
        setError({...errors , [element] : ""});
        setQuoteRequest({...quoteRequest , [element] : e.target.value})
    }

    const {name , lastName , email , subject , subjectDescription , status} = quoteRequest;

    const submitRequestQuote = (e) => {
        e.preventDefault()
        if(!name) {
            setError({...errors , name : "plz fill the name field!"})
        }
        if(!email) {
            setError({...errors , email : 'plz fill the email field!'})
        }
        if(!subjectDescription) {
            setError({...errors , subjectDescription : "plz fill the subject!"})
        }
        if(name === '' || email === '' || subjectDescription === "") {
            setQuoteRequest({...quoteRequest , status : 'rejected'})
            console.log('something went wrong!')
        }
        else {
            console.log('everything is fine!')
            setQuoteRequest({...quoteRequest , status : 'fullfilled'})
               setRequest({ name , lastName , email , subject , subjectDescription , status})

               alert("the request is in pending plz don't left the page!")
                setTimeout(()=> {
                    alert(`${name} ${lastName} the request is send successfull we will contact u later thank's!`)

               setQuoteRequest({name:'' , lastName :'' , email : '' , subject : '' , subjectDescription:"" , status : 'pending'})

                } , 3000)
            }
    }
    // console.log(errors)
    request !== '' && console.log(request)
  return (      
        <div className="form-area">
            <h5>Request a free quote, <br /> Best rate gurantee!</h5>
            <form onSubmit={submitRequestQuote}>
                <InputArea type='text' placeholder='Name' error={errors.name} value ={name} setState={(e)=>Requesthandler('name' , e)}/>

                <InputArea type='text' error={errors.lastName} placeholder='Last Name' value={lastName} setState={(e)=>Requesthandler('lastName' , e)}/>

                <InputArea type='email' error={errors.email} placeholder='Email' value={email} setState={(e)=> Requesthandler('email' , e)} required={true}/>

                <InputArea type='text' error={errors.subject} placeholder='Subject' value={subject} setState={(e)=> Requesthandler('subject' , e)}/>

                <div className="text-area">
                    <textarea name="subject" placeholder='Subject Description' cols="30" rows="5" value={subjectDescription} onChange={(e)=> Requesthandler('subjectDescription' , e)} ></textarea>
                    { errors.subjectDescription && <span>{errors.subjectDescription}</span> }
                </div>
                <div className="submit">
                    <input type="submit" value="Submit" />
                </div>
                {status === 'rejected' &&  <span className='error'>Plz filled the form correctly!</span> }
            </form>
        </div>
  )
}

export default RequestForm;