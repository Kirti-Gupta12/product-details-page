import React from "react";
import classes from './productPreview.module.css';

const ProductPreview = (props)=>
{
    const currHour=new Date().getHours() > 9 ? new Date().getHours():'0' + new Date().getHours();
  const currMinute=new Date().getMinutes() > 9? new Date().getMinutes() : '0'+new Date().getMinutes();

    return(
        <div className={classes.productPreview}>
        <img src={props.currentPreviewImage} alt='product preview' />

        {
          props.currentSelectedFeature===1 ?
          <div className={classes.heartBeatSection}>
        <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div> 
        :

        <div className={classes.timeSection}>
          <p>{`${currHour}:${currMinute}`}</p>
        </div>

        }
        

        </div>
        
    );
}

export default ProductPreview;  