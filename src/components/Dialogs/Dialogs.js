import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <div className={s.dialog}>
    <NavLink to={'dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name='Alexey' id='1' />
        <DialogItem name='Dima' id='2' />
        <DialogItem name='Oleg' id='3' />
        <DialogItem name='Sasha' id='4' />
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='How are you?'/>
        <Message message='Yo'/>
      </div>
    </div>
  )
}

export default Dialogs;