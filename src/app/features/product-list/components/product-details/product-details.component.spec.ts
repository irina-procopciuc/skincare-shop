import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ProductDetailsComponent } from './product-details.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


const fakeActivatedRoute = {
  snapshot: { data: { } }
} as ActivatedRoute;


describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [PrimengModule, BrowserAnimationsModule, FormsModule],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}, MessageService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
