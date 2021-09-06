import React, { useEffect, useState } from 'react'

const Alert = (props) => {
  const {type,msg} = props.alert;
  const {alert} = props;
  const {remove_alert} = props;
  useEffect(()=>{
    const timeout = setTimeout(() => {
      remove_alert();
    }, 2000);
    return () => clearTimeout(timeout) ;
  },[alert]);
  return <p className={`alert alert-${type}`}>
    {msg}
  </p>
}

export default Alert