import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms'
import { ISession,restrictedWords } from './../shared/index';

@Component({
  templateUrl:'./create-session.component.html',
  styles:[`em {float: right;color: #e05c65;padding-left: 10px;}
  .error input,.error select, .error textarea {background-color: #e3c3c5;}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
  `]
})


export class CreateSessionComponent implements OnInit {

  newSessionForm:FormGroup
  name:FormControl
  presenter:FormControl
  duration:FormControl
  level:FormControl
  abstract:FormControl
  ngOnInit(){
    this.name=new FormControl('',Validators.required)
    this.presenter=new FormControl('',Validators.required)
    this.duration=new FormControl('',Validators.required)
    this.level=new FormControl('',Validators.required)
    this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400),restrictedWords(['foo','bar'])])


  this.newSessionForm=new FormGroup({
    name:new FormControl('',Validators.required),
    presenter:this.presenter,
    duration:this.duration,
    level:this.level,
    abstract:this.abstract,
  })

  }

  // if we check  array of words
// private restrictedWords(words:any)
// {
//  return (control:FormControl):{[key:string]:any}=>{
//    if (!words)return null as any
//    var invalidWords= words
//    .map( (w:any) =>control.value.includes(w)? w : null)
//    .filter( (w:any) => w != null)

//    return invalidWords && invalidWords.length > 0
//           ?{'restrictedWords':invalidWords.join(', ')}
//           :null as any
//  }
// }

  // if we check one word not array of words
  // private restrictedWords(control:FormControl):{[key:string]:any}
  // {
  //   console.log(control.value.includes('foo'));

  //   return control.value.includes('foo')
  //   ?{'restrictedWords':'foo'}
  //   :null as any
  // }

  saveSession(formValues:any){

    let session:ISession={
      id:undefined,
      name:formValues.name,
      presenter:formValues.presenter,
      duration:+formValues.duration,
      level:formValues.level,
      abstract:formValues.abstract,
      voters:[]

    }

    console.log(session);


  }
}
