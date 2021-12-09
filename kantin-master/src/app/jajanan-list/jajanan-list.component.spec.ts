import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JajananListComponent } from './jajanan-list.component';

describe('JajananListComponent', () => {
  let component: JajananListComponent;
  let fixture: ComponentFixture<JajananListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JajananListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JajananListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
