import React, { useState, useEffect } from 'react'


const SingleColor = (props) => {
  const [alert,set_alert] = useState(false);

  const {rgb,weight,index,hexColor} = props;
  const rbg_value = rgb.join(",");
  const wieght_value = `${weight}%`;
  const hex_value = `#${hexColor}`;

  useEffect(() => {
    const timout = setTimeout(() => {
      set_alert(false);
    },2000);
    return () => clearTimeout(timout);
  },[alert])
  return <article className={`color ${index > 10 ? "color-light" : null}`}
  style={{backgroundColor:`rgb(${rbg_value})`}} onClick={
    () => {
      set_alert(true);
      navigator.clipboard.writeText(hex_value);
    }
  }>
    <p className="percent-value">{wieght_value}</p>
    <p className="color-value">{hex_value}</p> 
    {alert && <p>copied to clipboard</p>}
  </article>
}

export default SingleColor
