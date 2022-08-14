import React,{Component} from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/productPreview';
import ProductDetails from  './ProductDetails/ProductDetails';
import TopBar from './TopBar/topbar';
import ProductData from './Utils/ProductData';


class App extends Component {

  state={
    productData:ProductData,
    // currentPreviewImage:'https://i.imgur.com/iOeUBV7.png',
    currentPreviewImagePos:0,
    // showHeartBeatSection:false
    currentSelectedFeature:0
  }

  onColorOptionClick=(pos)=>{
    this.setState({currentPreviewImagePos :pos });
    }

  onFeatureItemClick=(pos)=>{
    
    this.setState({currentSelectedFeature:pos})
  }

  render()
  {

    return (
      <div className="App">
        <TopBar/>  
          
  
         <div className={classes.mainContainer}>
          
          <div className={classes.productPreview}>
           <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
  
          <div className={classes.productData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
  
         </div>
      </div>
    );
  }
  
}

export default App;
