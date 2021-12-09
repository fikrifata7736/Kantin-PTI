import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JajananDetailComponent } from './jajanan-detail.component';

describe('JajananDetailComponent', () => {
  let component: JajananDetailComponent;
  let fixture: ComponentFixture<JajananDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JajananDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JajananDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
