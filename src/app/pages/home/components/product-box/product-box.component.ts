
import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html',})
export class ProductBoxComponent {
  @Input()  fullWidthMode=false;
  @Input() product :Product | undefined  ;
 @Output() addToCart=new EventEmitter();
OnAddToCart():void{

  this.addToCart.emit(this.product);
}
}
